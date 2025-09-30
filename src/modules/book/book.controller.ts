import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dtos/createBook.dto';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';
import { UpdateBookDto } from './dtos/updateBook.dto';

@ApiTags('books')
@Controller()
export class BookController {
    constructor(private readonly bookService: BookService) { }


    @Get('books')
    @ApiResponse({ status: 200, description: 'List of books.' })
    getBooks() {
        return this.bookService.getBooks();
    }

    @Get('books/:id')
    @ApiParam({ name: 'id', required: true, description: 'The ID of the book' })
    @ApiResponse({ status: 200, description: 'The book with the specified ID.' })
    getBooksById(@Param('id') id: number) {
        return this.bookService.getBooksById(id);
    }

    @Post('books')
    @ApiResponse({ status: 201, description: 'The created book.' })
    createBook(@Body() book: CreateBookDto) {
        const bookEntity = { ...book, createdAt: new Date(), updatedAt: new Date() };
        return this.bookService.createBook(bookEntity);
    }

    @Put('books/:id')
    @ApiParam({ name: 'id', required: true, description: 'The ID of the book to update' })
    @ApiResponse({ status: 200, description: 'The updated book.' })
    updateBook(@Param('id') id: number, @Body() book: UpdateBookDto) {
        return this.bookService.updateBook(id, book);
    }
    
    @Delete('books/:id')
    @ApiParam({ name: 'id', required: true, description: 'The ID of the book to delete' })
    @ApiResponse({ status: 200, description: 'The book has been deleted.' })
    deleteBook(@Param('id') id: number) {
        return this.bookService.deleteBook(id);
    }
}
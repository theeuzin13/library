import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dtos/createBook.dto';
@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

    @Get('books')
    getBooks() {
        return this.bookService.getBooks();
    }

    @Get('books/:id')
    getBooksById(@Param('id') id: number) {
        return this.bookService.getBooksById(id);
    }

    @Post('books')
    createBook(@Body() book: CreateBookDto) {
        const bookEntity = { ...book, createdAt: new Date(), updatedAt: new Date() };
        return this.bookService.createBook(bookEntity);
    }

    @Put('books/:id')
    updateBook(@Param('id') id: number, @Body() book: Partial<CreateBookDto>) {
        return this.bookService.updateBook(id, book);
    }

    @Delete('books/:id')
    deleteBook(@Param('id') id: number) {
        return this.bookService.deleteBook(id);
    }
}
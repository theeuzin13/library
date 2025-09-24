import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dtos/createBook.dto';
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('books')
@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  /**
   * Retrieves a list of all books.
   * @returns An array of books.
   */
  @Get('books')
  @ApiResponse({ status: 200, description: 'List of books.' })
  getBooks() {
      return this.bookService.getBooks();
  }

  /**
   * Retrieves a book by its ID.
   * @param id - The ID of the book to retrieve.
   * @returns The book with the specified ID.
   */
  @Get('books/:id')
  @ApiParam({ name: 'id', required: true, description: 'The ID of the book' })
  @ApiResponse({ status: 200, description: 'The book with the specified ID.' })
  getBooksById(@Param('id') id: number) {
      return this.bookService.getBooksById(id);
  }

  /**
   * Creates a new book.
   * @param book - The book data to create.
   * @returns The created book.
   */
  @Post('books')
  @ApiResponse({ status: 201, description: 'The created book.' })
  createBook(@Body() book: CreateBookDto) {
      const bookEntity = { ...book, createdAt: new Date(), updatedAt: new Date() };
      return this.bookService.createBook(bookEntity);
  }

  /**
   * Updates an existing book by its ID.
   * @param id - The ID of the book to update.
   * @param book - The updated book data.
   * @returns The updated book.
   */
  @Put('books/:id')
  @ApiParam({ name: 'id', required: true, description: 'The ID of the book to update' })
  @ApiResponse({ status: 200, description: 'The updated book.' })
  updateBook(@Param('id') id: number, @Body() book: Partial<CreateBookDto>) {
      return this.bookService.updateBook(id, book);
  }

  /**
   * Deletes a book by its ID.
   * @param id - The ID of the book to delete.
   * @returns A confirmation message.
   */
  @Delete('books/:id')
  @ApiParam({ name: 'id', required: true, description: 'The ID of the book to delete' })
  @ApiResponse({ status: 200, description: 'The book has been deleted.' })
  deleteBook(@Param('id') id: number) {
      return this.bookService.deleteBook(id);
  }
}
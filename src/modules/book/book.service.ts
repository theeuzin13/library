import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>,
    ) {}

    getBooks() {
        return this.bookRepository.find();
    }

    getBooksById(id: number) {
        return this.bookRepository.findOneBy({ id });
    }

    createBook(CreateBookDto: Partial<BookEntity>) {
        return this.bookRepository.save(CreateBookDto);
    }
    
    async updateBook(id: number, book: Partial<BookEntity>) {
        await this.bookRepository.update(id, book);
        return this.bookRepository.findOneBy({ id });
    }

    deleteBook(id: number) {
        return this.bookRepository.delete(id);
    }
}

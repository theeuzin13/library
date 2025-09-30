import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly UserRepository: Repository<BookEntity>,
    ) {}

    getBooks() {
        return this.UserRepository.find();
    }

    getBooksById(id: number) {
        return this.UserRepository.findOneBy({ id });
    }

    createBook(CreateBookDto: Partial<BookEntity>) {
        return this.UserRepository.save(CreateBookDto);
    }
    
    updateBook(id: number, book: Partial<BookEntity>) {
        return this.UserRepository.update(id, book);
    }

    deleteBook(id: number) {
        return this.UserRepository.delete(id);
    }
}

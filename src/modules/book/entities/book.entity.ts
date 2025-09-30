import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'books' })
export class BookEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'author', nullable: false })
    author: string;

    @Column({ name: 'publisher', nullable: false })
    publisher: string;
    
    @Column({ name: 'gender', nullable: false })
    gender: string;

    @Column({ name: 'price', type: 'decimal', nullable: false })
    price: number;

    @Column({ name: 'publish_date', type: 'date', nullable: false })
    publishDate: Date;

    @Column({ name: 'status', default: true })
    status: boolean;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
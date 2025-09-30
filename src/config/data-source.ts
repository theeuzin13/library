import { BookEntity } from '../modules/book/entities/book.entity';
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'library_db',
  entities: [BookEntity],
  migrations: ["src/migrations/*.ts"],
  migrationsRun: true,
  synchronize: false,
  logging: true,
});

export default dataSource;

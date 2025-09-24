import { DataSource } from "typeorm"

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'library_db',
    entities: [`${__dirname}/**/*.entity{.js,.ts}`],
    migrations: [`${__dirname}/migration/{.ts,*.js}`],
    migrationsRun: true,
    synchronize: false,
    logging: true,
})
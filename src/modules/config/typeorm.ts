import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from 'dotenv';
config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [`${__dirname}/**/*.entity{.js,.ts}`],
    migrations: [`${__dirname}/migration/{.ts,*.js}`],
    migrationsRun: true,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'false',
    logging: process.env.TYPEORM_LOGGING === 'true',
};

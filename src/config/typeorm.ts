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
    entities: [__dirname + '/modules/**/*.entity.{ts,js}'],
    migrations: [__dirname + '/migrations/*.{ts,js}'],
    migrationsRun: true,
    logging: process.env.TYPEORM_LOGGING === 'true',
    autoLoadEntities: true,
};

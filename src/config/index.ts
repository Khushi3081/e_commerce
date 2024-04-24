import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const {
    API_PORT,
    DATABASE_URL,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    NODE_ENV
} = process.env

    
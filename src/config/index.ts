import { DEFAULT_ENVIRONMENT } from '@/helper/common.helper';
import { config } from 'dotenv';
config({ path: `.env.${DEFAULT_ENVIRONMENT}` });

export const {
    API_PORT,
    DATABASE_URL,
    DATABASE_USERNAME,
    DATABASE_PASSWORD
} = process.env

    
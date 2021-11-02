import dotenv from 'dotenv';
dotenv.config();

/* eslint-disable no-undef */
export const environment = {
    production: true,
    beta: process.env.BETA,
    dev: false,
    mongo: {
        protocol: process.env.MONGO_PROTOCOL,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
        host: process.env.MONGO_HOST,
        dbName: process.env.MONGO_DB_NAME,
        settings: process.env.MONGO_SETTINGS,
    },
};

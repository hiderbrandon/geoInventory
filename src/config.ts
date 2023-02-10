import { registerAs } from "@nestjs/config";

export default registerAs(`config`, () => {
    return {
        database: process.env.POSTGRES_DB,
        postgres: {
            dbName: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            password: process.env.POSTGRES_PASSWORD,
        },
        mongodb: {
            dbName: process.env.MONGO_DB,
            user: process.env.MONGO_INITDB_ROOT_USERNAME,
            host: process.env.MONGO_HOST,
            port: parseInt(process.env.MONGO_PORT, 10),
            connection: process.env.MONGO_CONNECTION,
            password: process.env.MONGO_INITDB_ROOT_PASSWORD,
        },
        apiKey: process.env.API_KEY,
    }
})
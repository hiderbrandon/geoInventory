import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongoClient } from 'mongodb';
import { MongooseModule } from "@nestjs/mongoose";
import config from "../config";

@Global()
@Module({

    imports: [
        MongooseModule.forRootAsync({
            useFactory: async (configService: ConfigType<typeof config>) => {
                const { connection, user, password, host, port, dbName } = configService.mongodb;

                return {
                    uri: `${connection}://${host}:${port}`,
                    user,
                    pass: password,
                    dbName
                }

            },
            inject: [config.KEY],
        })
    ],
    providers: [
        {
            provide: 'MONGO',
            useFactory: async (configService: ConfigType<typeof config>) => {
                const { connection, user, password, host, port, dbName } = configService.mongodb;
                const uri = `${connection}://${user}:${password}@${host}:${port}/?authMechanism=DEFAULT`;
                const mongoClient = new MongoClient(uri);
                await mongoClient.connect();
                const mongoDatabase = mongoClient.db(dbName);
                return mongoDatabase;
            },
            inject: [config.KEY],
        },
    ],
    exports: ['MONGO', MongooseModule],
})
export class MongoModule { }



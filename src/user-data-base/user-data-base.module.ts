import { Global, Inject, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'pg';
import config from '../config';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (myConfig: ConfigType<typeof config>) => {
                const { user, host, dbName, password, port } = myConfig.postgres;
                return {
                    type: `postgres`,
                    host,
                    username: user,
                    port,
                    database: dbName,
                    password,
                    synchronize: true,// only on dev Envs
                    autoLoadEntities: true
                };
            },
            inject: [config.KEY]
        })
    ],
    providers: [
        {
            provide: `PG`,
            useFactory: (myConfig: ConfigType<typeof config>) => {
                const { user, host, dbName, password, port } = myConfig.postgres;
                const client = new Client({
                    user,
                    host,
                    database: dbName,
                    password,
                    port,
                });
                client.connect();
                return client;
            },
            inject: [config.KEY]
        }
    ],

    exports: [`PG`, TypeOrmModule],
})
export class UserDataBaseModule {}

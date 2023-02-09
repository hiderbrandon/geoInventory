import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongoModule } from './mongo/mongo.module';

import { environments } from './environments';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { UserDataBaseModule } from './user-data-base/user-data-base.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || `.env`,
      load: [config],
      isGlobal: true,
    }),
    ItemsModule,MongoModule, AuthModule, UserDataBaseModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

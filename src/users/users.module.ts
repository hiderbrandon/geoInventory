import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './controlles/users.controller';
import { UsersService } from './services/users.service';

import { User } from './entities/user.entity';

@Module({
    imports : [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}

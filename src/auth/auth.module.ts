import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';
import { localStrategy } from './strategies/localStrategy';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[ 
    UsersModule,
    PassportModule] ,
  providers: [AuthService , localStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

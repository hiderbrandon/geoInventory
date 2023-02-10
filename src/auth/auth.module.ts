import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';
import { localStrategy } from './strategies/localStrategy';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import config from 'src/config';
import { ConfigType } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports:[ 
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({ 
      inject:[config.KEY],
      useFactory:(configService : ConfigType<typeof config>)=>{
        return {
          secret : configService.jwtSecret,
          signOptions:{expiresIn:`10d`}}
      }
      
    })
  ] ,
  providers: [AuthService , localStrategy , JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

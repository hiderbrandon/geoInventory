import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { User } from 'src/users/entities/user.entity';


@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){};
    @Post("login")
    login(@Req() req : Request){
        const user = req.user as User;
        return this.authService.generateJWT(user);
    }
}

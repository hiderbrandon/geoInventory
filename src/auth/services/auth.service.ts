import { Injectable } from '@nestjs/common';
import {  JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

import { UsersService } from 'src/users/services/users.service';
import { User } from "..//../users/entities/user.entity";
import { PayloadToken } from "../models/token.model";

@Injectable()
export class AuthService {
    constructor(
        private usersService :UsersService,
        private jwtService:JwtService){}

    async validateUser(id: number , password: string){
        const user = await this.usersService.findOnebyId(id);
        const isMatch = await bcrypt.compare(password ,  user.Password );
        if(user && isMatch){
            return user;
        }

        return null
    }

    generateJWT( user : User){
        const payload :PayloadToken= {role: user.type , sub: user.id};
        return { acces_token: this.jwtService.sign(payload),
        user}
    }

}

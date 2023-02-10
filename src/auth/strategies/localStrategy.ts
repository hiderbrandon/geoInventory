import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import {AuthService} from "../services/auth.service"

@Injectable()
export class localStrategy extends PassportStrategy(Strategy ,  `local`){
    constructor(private authService : AuthService){
        super();
    };

    validate = async (id:number , password : string) => {
        const user = await this.authService.validateUser(id , password);
        if(!user){
            throw new UnauthorizedException(`not allow`);
        };

        return user;
    }

}
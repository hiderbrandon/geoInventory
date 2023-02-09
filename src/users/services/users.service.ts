import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from "typeorm";



@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private UserRepository : Repository<User>) {};
    findAll(){
        return this.UserRepository.find();
    }
    findOnebyId(id : number){
        const anUser = this.UserRepository.findOneBy({id:id} );
        if (!anUser){
            throw new NotFoundException(`User not found`);
        };

        return anUser ;
    }
}

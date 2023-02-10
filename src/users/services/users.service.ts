import { Injectable, NotFoundException ,HttpException , HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from "bcrypt";

import { User } from '../entities/user.entity';
import { Repository } from "typeorm";
import { CreateUserDto } from '../dtos/createUser.Dto';
import { UpdateUserDto } from '../dtos/updateUser.Dto';




@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository : Repository<User>) {};
    findAll(){
        return this.userRepository.find();
    };

    findOnebyId(id : number){
        const anUser = this.userRepository.findOneBy({id:id} );
        if (!anUser){
            throw new NotFoundException(`User not found`);
        };

        return anUser ;
    };
    findOnebyEmail(email : string){
        const anUser = this.userRepository.findOneBy({email:email} );
        if (!anUser){
            throw new NotFoundException(`User not found`);
        };

        return anUser ;
    };

    findOnebyBossId(id : number){
        const anUser = this.userRepository.findOneBy({idBoss:id} );
        if (!anUser){
            throw new NotFoundException(`User not found`);
        };

        return anUser ;
    };
    
    async create(anUser: CreateUserDto) {
        const myUser = await this.userRepository.findOneBy(anUser);
        if (!myUser) {
            const newClient = this.userRepository.create(anUser);
            const hashedPassword = await bcrypt.hash(newClient.password , 10 );
            newClient.password = hashedPassword; 
            return this.userRepository.save(newClient);
        }
        else {
            throw new HttpException(`User already exist`, HttpStatus.FOUND);
        }

    };

    async update(idNumber: number, changes: UpdateUserDto) {
        const anUser = await this.userRepository.findOneBy({ id: idNumber});

        if (!anUser) {
            throw new NotFoundException(`User doesn't exist`);
        }
        await this.userRepository.update({ id: idNumber }, changes);

    };

    async remove(idNumber: number) {
        const anUser = await this.userRepository.findOneBy({ id: idNumber});

        if (!anUser) {
            throw new NotFoundException(`Client doesn't exist`);
        }
        this.userRepository.delete({ id: idNumber });
    };
}

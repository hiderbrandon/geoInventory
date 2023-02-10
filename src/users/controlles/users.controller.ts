import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/updateUser.Dto';
import { CreateUserDto } from '../dtos/createUser.Dto';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { Public } from 'src/auth/decorators/public.decorator';

@UseGuards(ApiKeyGuard)
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    gatAllClients() {
        return this.userService.findAll();
    };

    @Get(`:id`)
    finOne(
        @Param(`id`, ParseIntPipe) id: number){
        return this.userService.findOnebyId(id);
    };

    @Post(`/`)
    create(@Body() payload: CreateUserDto) {
        return this.userService.create(payload);
    }

    @Put(`:idNumber`)
    update(@Param(`idNumber`) idnumber: number,@Body() payload: UpdateUserDto) {
        return this.userService.update(idnumber, payload);
    };

    @Delete(`:idNumber/`)
    delete(@Param(`idNumber`) idNumber: number) {
        this.userService.remove(idNumber)
    };

    
    @Get(`admmon/:idNumber`)
    finWorkers(
        @Param(`idNumber`, ParseIntPipe) idNumber: number){
        return this.userService.findOnebyBossId(idNumber);
    };
    
}

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    gatAllClients() {
        return this.userService.findAll();
    }

    @Get(`:id`)
    finOne(
        @Param(`id`, ParseIntPipe) id: number){
        return this.userService.findOnebyId(id);
    }

    @Get(`:idNumber/:type`)
    finWorkers(
        @Param(`idNumber`, ParseIntPipe) idNumber: number){
        return "this.userService.findOnebyId(idNumber)";
    }
}

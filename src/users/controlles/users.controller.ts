import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/updateUser.Dto';
import { CreateUserDto } from '../dtos/createUser.Dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
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

    @Public()
    @Post(`signup`)
    create(@Body() payload: CreateUserDto) {
        return this.userService.create(payload);
    }
 
    @Put(`:idNumber`)
    update(@Param(`idNumber`) idnumber: number,@Body() payload: UpdateUserDto) {
        return this.userService.update(idnumber, payload);
    };

    @Delete(`:idNumber`)
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param(`idNumber`) idNumber: number) {
        this.userService.remove(idNumber)
    };

    
    @Get(`admmon/:idNumber`)
    finWorkers(
        @Param(`idNumber`, ParseIntPipe) idNumber: number){
        return this.userService.findOnebyBossId(idNumber);
    };
    
}

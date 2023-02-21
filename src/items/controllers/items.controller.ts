import { Body ,Controller, Get , Post ,Delete, Put, Param, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ItemsService } from '../services/items.service';
import { CreateItemDto } from '../dtos/createItem.dto';
import { UpdateItemDto } from '../dtos/updateItem.dto';


@UseGuards(JwtAuthGuard)
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { };

    @Get()
    getAllITems() {
        return this.itemsService.findAll();
    };

    @Get(`:myId`)
    getbyId(
        @Param(`myId`) myId: number) {
        return this.itemsService.findByUserID(myId);
    }

    @Post()
    create(@Body() payload: CreateItemDto) {
        return this.itemsService.create(payload);
    };

    @Put(`:idNumber`)
    update(@Param(`idNumber`) idNumber: number,
            @Body() payload: UpdateItemDto) {
        return this.itemsService.update(idNumber,payload);
    };

    @Delete(`:idItem`)
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param(`idItem`) idItem: string) {
        this.itemsService.remove(idItem)
    };
}


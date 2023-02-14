import { Body ,Controller, Get , Post ,Delete, Put, Param, UseGuards, SetMetadata, } from '@nestjs/common';

import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ItemsService } from '../services/items.service';
import { CreateItemDto } from '../dtos/createItem.dto';
import { UpdateItemDto } from '../dtos/updateItem.dto';


@UseGuards(JwtAuthGuard)
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { };

    @Public()
    @Get()
    getAllITems() {
        return this.itemsService.findAll();
    };

    @Public()
    @Get(`:myId`)
    getOneItem(
        @Param(`myId`) myId: number) {
        return this.itemsService.findOne(myId);
    }

    @Post()
    create(@Body() payload: CreateItemDto) {
        return this.itemsService.create(payload);
    };

    @Put()
    update(@Param(`:idNumber`) idNumber: number,
            @Body() payload: UpdateItemDto) {
        return this.itemsService.update(idNumber,payload);
    };

    @Delete(`:idItem`)
    delete(@Param(`idItem`) idItem: string) {
        this.itemsService.remove(idItem)
    };
}


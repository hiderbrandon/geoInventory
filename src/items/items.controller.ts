import { Controller, Get, Param, } from '@nestjs/common';
import { ItemsService } from './items.service';


@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { };

    @Get()
    getAllITems() {
        return this.itemsService.findAll();
    }
    @Get(`:myId`)
    getOneItem(
        @Param(`myId`) myId: number) {
        return this.itemsService.findOne(myId);
    }
}


import { Body ,Controller, Get , Post ,Delete, Put, Param, UseGuards, SetMetadata, } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dtos/createItem.dto';
import { UpdateItemDto } from './dtos/updateItem.dto';
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


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

    @Delete(`:idNumber/:idType`)
    delete(@Param(`idNumber`) idNumber: number, @Param(`idType`) idItem: string) {
        this.itemsService.remove(idNumber, idItem)
    };
}


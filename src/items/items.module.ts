import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Items, itemsSchema } from './entities/items.entity';

@Module({
    imports: [MongooseModule.forFeature([ { name: Items.name, schema: itemsSchema} ])],
    controllers: [ItemsController],
    providers: [ItemsService]
})
export class ItemsModule { }

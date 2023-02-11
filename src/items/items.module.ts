import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Items, itemsSchema } from './entities/items.entity';
import { ItemsService } from './services/items.service';
import { ItemsController } from './controllers/items.controller';

@Module({
    imports: [MongooseModule.forFeature([ { name: Items.name, schema: itemsSchema} ])],
    controllers: [ItemsController],
    providers: [ItemsService]
})
export class ItemsModule { }

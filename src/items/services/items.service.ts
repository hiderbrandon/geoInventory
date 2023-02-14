import { Injectable ,HttpStatus ,HttpException , NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Items } from '../entities/items.entity';
import { CreateItemDto } from '../dtos/createItem.dto';
import { UpdateItemDto } from '../dtos/updateItem.dto';


@Injectable()
export class ItemsService {

    constructor(@InjectModel(Items.name) private itemModel : Model<Items>){};

    findAll(){
        return this.itemModel.find().exec();
    }

    async findOne(id: number){
        const item =  this.itemModel.findOne({idUser:id} ).exec();
        if(!item){
            throw new HttpException("this user doesn't haveinventory items yet", HttpStatus.NOT_FOUND);
        };

        return item;
    }

    async create(myItem: CreateItemDto) {
        const newItem = new this.itemModel(myItem);
        const aItem = await this.itemModel.findOne(myItem).exec();
        console.log(!aItem);

        if (aItem) {
            throw new HttpException("this user already exist , may be you want to update ", HttpStatus.FOUND);
        }
        return newItem.save();
    }

    async update(idNumber: number, changes: UpdateItemDto) {
        return  this.itemModel.findByIdAndUpdate( idNumber , changes);
    }

    async remove(idItem: string) {
        return this.itemModel.findByIdAndDelete(idItem);
    }

}

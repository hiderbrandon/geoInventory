import { Injectable ,HttpStatus ,HttpException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Items } from './entities/items.entity';


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

}

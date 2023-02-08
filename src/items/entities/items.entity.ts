import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Items extends Document {
    @Prop({ type: String })
    image: string;
    @Prop({ required: true, type: Number })
    longitude: number;
    @Prop({ required: true, type: Number })
    latitude: number;
    @Prop({ required: true, type: Number })
    idUser: number;
    @Prop({ required: true, type: String })
    idType: string;
    @Prop({ type: String })
    name: string;
    
};

export const itemsSchema = SchemaFactory.createForClass(Items);
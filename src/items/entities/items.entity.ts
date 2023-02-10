import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { GeometryType } from "./geometryType";
import { Propertiestype } from "./propertiesType";

@Schema()
export class Items extends Document {
    @Prop({ type: String })
    image: string;
    @Prop({ required: true, type: GeometryType })
    coordinates: GeometryType ;
    @Prop({ required: true, type: Propertiestype })
    properties: Propertiestype;
    @Prop({ required: true, type: Number })
    idUser: number;
    @Prop({ required: true, type: String })
    idType: string;
    @Prop({ type: String })
    name: string;
    
};

export const itemsSchema = SchemaFactory.createForClass(Items);
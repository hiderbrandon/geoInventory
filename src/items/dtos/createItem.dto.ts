import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { GeometryType } from '../entities/geometryType';
import { Propertiestype } from '../entities/propertiesType';

export class CreateItemDto {
    @IsString()
    image: string;

    @IsInt()
    @IsNotEmpty()
    idUser: number;

    @IsString()
    idType: string;

    @IsString()
    name: string;

    coordinates: GeometryType ;

    properties: Propertiestype;
}
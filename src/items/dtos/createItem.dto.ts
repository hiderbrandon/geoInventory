import { IsString, IsNotEmpty, IsInt } from 'class-validator';


export class CreateItemDto {
    @IsString()
    image: string;
    @IsInt()
    @IsNotEmpty()
    longitude: number;
    @IsInt()
    @IsNotEmpty()
    latitude: number;
    @IsInt()
    @IsNotEmpty()
    idUser: number;
    @IsString()
    idType: string;
    @IsString()
    name: string;
}
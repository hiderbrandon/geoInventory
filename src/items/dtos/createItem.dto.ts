import { IsString, IsNotEmpty, IsInt } from 'class-validator';


export class CreatePhotoDto {
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
}
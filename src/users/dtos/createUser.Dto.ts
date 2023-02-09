import { IsString, IsNotEmpty, IsInt ,IsOptional} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    type: `op` | `ad` ;
    @IsInt()
    @IsOptional()
    id: number;
    @IsString()
    @IsNotEmpty()
    Name: string;
    @IsInt()
    @IsOptional()
    idBoss: number | null ;
}
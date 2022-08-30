import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeRaffleDto {
    
    @IsString()
    @IsNotEmpty()
    tipoRifa:string
}

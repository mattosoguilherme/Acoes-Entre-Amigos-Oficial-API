import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookingDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    requisitos_reserva:string;
}

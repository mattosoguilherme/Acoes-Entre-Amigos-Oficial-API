import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {

    @IsOptional()
    requisitos_reserva?: string;
}

import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateTypeRaffleDto } from './create-type-raffle.dto';

export class UpdateTypeRaffleDto extends PartialType(CreateTypeRaffleDto) {
    @IsOptional()
    tipoRifa?: string;
}

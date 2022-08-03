import { PartialType } from '@nestjs/swagger';
import { CreateTypeRaffleDto } from './create-type-raffle.dto';

export class UpdateTypeRaffleDto extends PartialType(CreateTypeRaffleDto) {}

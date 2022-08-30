import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateTypeDisplayDto } from './create-type-display.dto';

export class UpdateTypeDisplayDto extends PartialType(CreateTypeDisplayDto) {
  @IsOptional()
  tipoExibicao?: string;
}

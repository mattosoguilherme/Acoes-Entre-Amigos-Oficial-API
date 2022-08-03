import { PartialType } from '@nestjs/swagger';
import { CreateTypeDisplayDto } from './create-type-display.dto';

export class UpdateTypeDisplayDto extends PartialType(CreateTypeDisplayDto) {}

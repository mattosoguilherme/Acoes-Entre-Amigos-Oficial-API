import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeDisplayDto {
  @IsString()
  @IsNotEmpty()
  tipoExibicao: string;
}

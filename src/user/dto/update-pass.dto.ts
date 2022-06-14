import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePassDto {
  @IsString({
    message: 'O campo actualPass deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo senha atual é obrigatório',
  })
  @ApiProperty({
    default: '******',
    description: 'senha atual do usuário',
  })
  @MinLength(6, {
    message:
      ' O mínimo de caracteres exigidos nos campos de senha são 6. Ex: 123456 ',
  })
  actualPass: string;

  @IsString({
    message: 'O campo newPass deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo nova senha é obrigatório',
  })
  @ApiProperty({
    default: '******',
    description: 'senha do usuário',
  })
  @MinLength(6, {
    message:
      ' O mínimo de caracteres exigidos nos campos de senha são 6. Ex: 123456 ',
  })
  newPass: string;

  @IsString({
    message: 'O campo password deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo senha de confirmação é obrigatório',
  })
  @ApiProperty({
    default: '******',
    description: 'senha de confirmação do usuário',
  })
  @MinLength(6, {
    message:
      ' O mínimo de caracteres exigidos nos campos de senha são 6. Ex: 123456 ',
  })
  newPassConfirmation: string;
}

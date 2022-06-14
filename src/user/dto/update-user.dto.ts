import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
export class UpdateUserDto {
  @IsOptional()
  @IsString({
    message: 'O campo name deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo nome é obrigatório',
  })
  @ApiProperty({
    default: 'Francisco Mattoso',
    description: 'nome do usuário',
  })
  name: string;

  @IsOptional()
  @IsString({
    message: 'O campo email deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo email é obrigatório',
  })
  @IsEmail()
  @ApiProperty({
    default: 'guilhermemktfran@gmail.com',
    description: 'email do usuário',
  })
  email: string;

  @IsOptional()
  @IsString({
    message: 'O campo contact deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo de contato é obrigatório',
  })
  @ApiProperty({
    default: '22988226317',
    description: 'telefone do usuário',
  })
  @Length(11, 11, {
    message: 'O campo de contato, deve ter 11 caracteres. Ex: (XX) XXXXX-XXXX',
  })
  contact: string;
}

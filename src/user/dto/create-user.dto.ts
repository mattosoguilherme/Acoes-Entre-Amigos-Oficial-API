import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsString({
    message: 'O campo name deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo nome é obrigatório',
  })
  @ApiProperty({
    default: 'Guilherme Mattoso',
    description: 'nome do usuário',
  })
  name: string;

  @IsString({
    message: 'O campo email deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({ 
    message: 'Campo email é obrigatório'
 })
  @IsEmail()
  @ApiProperty({
    default: 'guilhermemktfran@gmail.com',
    description: 'email do usuário',
  })
  email: string;

  @IsString({
    message: 'O tipo do campo password deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo senha é obrigatório',
  })
  @ApiProperty({
    default: '******',
    description: 'senha do usuário',
  })
  @MinLength(6,{message:" O mínimo de caracteres exigidos nos campos de senha são 6. Ex: 123456 "})
  password: string;

  @IsString({
    message: 'O campo password deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo senha é obrigatório',
  })
  @ApiProperty({
    default: '******',
    description: 'senha de confirmação do usuário',
  })
  @MinLength(6,{message:" O mínimo de caracteres exigidos nos campos de senha são 6. Ex: 123456 "})
  confirmationPass:string;

  @IsString({
    message: 'O campo contact deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo de contato é obrigatório',
  })
  @ApiProperty({
    default: '11992767398',
    description: 'telefone do usuário',
  })
  @Length(11,11,{message:"O campo de contato, deve ter 11 caracteres. Ex: (XX) XXXXX-XXXX"})
  contact: string;
}

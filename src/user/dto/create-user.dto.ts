import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsString({
    message: 'O tipo do campo name deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo name é obrigatório',
  })
  @ApiProperty({
    default: 'Guilherme Mattoso',
    description: 'nome do usuário',
  })
  name: string;

  @IsString({
    message: 'O tipo do campo email deve ser obrigatoriamente uma string ',
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
    message: 'Campo password é obrigatório',
  })
  @ApiProperty({
    default: '******',
    description: 'senha do usuário',
  })
  @MinLength(6)
  password: string;

  @IsString({
    message: 'O tipo do campo password deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo password é obrigatório',
  })
  @ApiProperty({
    default: '******',
    description: 'senha de confirmação do usuário',
  })
  @MinLength(6)
  confirmationPass:string;

  @IsString({
    message: 'O tipo do campo contact deve ser obrigatoriamente uma string ',
  })
  @IsNotEmpty({
    message: 'Campo contact é obrigatório',
  })
  @ApiProperty({
    default: '11992767398',
    description: 'nome do usuário',
  })
  @Length(11,11)
  contact: string;
}

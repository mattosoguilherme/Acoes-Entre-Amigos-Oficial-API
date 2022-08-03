import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateRaffleDto {
  @ApiProperty({
    default: 'Chá Rifa',
    description: 'Campo designado ao titulo da rifa',
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ default: 'Rua Tenente Manoel Alves dos Anjos' })
  @IsString()
  @IsNotEmpty()
  local: string;

  @ApiProperty({
    default: '11992767398',
    description:
      'Este campo deverá ser preenchido com o telefone do organizador',
  })
  @IsString()
  @IsNotEmpty()
  telefone_suporte: string;

  @ApiProperty({
    default: 'Chá rifa do Gael, para comemorar um ano do nosso príncipe',
    description: 'Este campo deverá ser preenchido com a descrição',
  })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({
    default:
      'https://cdn.rifa.link/rifas/00000121757_rifas_7HbC8FBGwhqWdTxcXp6t.jpg',
    description:
      'Este campo deverá ser preenchido com uma imagem do prêmio ou folder desenvolvido pela nossa equipe',
  })
  @IsUrl()
  @IsString()
  @IsNotEmpty()
  img_premio: string;

  @ApiProperty({
    default: 'https://chat.whatsapp.com/Lqs84miW9xgCTQvUeHGoYN',
    description:
      'Este campo deverá ser preenchido com uma imagem do prêmio ou folder desenvolvido pela nossa equipe',
  })
  @IsUrl()
  @IsString()
  @IsNotEmpty()
  link_grupo: string;

  @ApiProperty({
    default: ['celular', 'moto', 'fogão'],
    description: 'Este campo deverá ser preenchido com os prêmios',
  })
  @IsArray()
  @IsNotEmpty()
  premios: string[];

  @ApiProperty({
    default: 1,
    description:
      ' Neste campo será inserida o ID de um categoria pré cadastrada no sistema',
  })
  @IsNumber()
  @IsNotEmpty()
  categoria: number;

  @ApiProperty({
    default: '2022-08-02T22:33:06.886Z',
    description: 'Este campo deverá ser preenchido com a data de encerramento',
  })
  @IsDateString()
  @IsNotEmpty()
  prazo_expiracao: Date;

  @ApiProperty({
    default: '2022-08-02T22:33:06.886Z',
    description: 'Este campo deverá ser preenchido com a data de sorteio',
  })
  @IsDateString()
  @IsNotEmpty()
  dia_sorteio: Date;

  @ApiProperty({
    default: 10,
    description:
      'Este campo deverá ser preenchido com a quantidade cotas(números)',
  })
  @IsNumber()
  @IsNotEmpty()
  cotas: number;

  @ApiProperty({
    default: 10.5,
    description:
      'Este campo deverá ser preenchido com preço individual das cotas(números)',
  })
  @IsNumber()
  @IsNotEmpty()
  preco_cota: number;

  @ApiProperty({
    default: 3,
    description:
      'Este campo deverá ser preenchido com o limite de cotas(números) por comprador(a)',
  })
  @IsNumber()
  @IsNotEmpty()
  limite_cota_user: number;

  @ApiProperty({
    default: 2,
    description:
      'Este campo deverá ser preenchido com um ID de um tipo pré cadastrado no sistema',
  })
  @IsNumber()
  @IsNotEmpty()
  Tipo_rifa: number;

  @ApiProperty({
    default: 1,
    description:
      'Este campo deverá ser preenchido com um ID de um tipo pré cadastrado no sistema',
  })
  @IsNumber()
  @IsNotEmpty()
  Tipo_exibicao: number;

  @ApiProperty({
    default: [1, 2, 3],
    description:
      'Este campo deverá ser preenchido com um IDs de requisitos pré cadastrados no sistema',
  })
  @IsArray()
  @IsNotEmpty()
  Requisitos_reserva: number[];

  @ApiProperty({
    // default: { chave: 'valor', chave2: 'valor2' },
    description:
      'Este campo deverá ser preenchido com as promoções de compra, se houver',
  })
  @IsObject()
  @IsNotEmpty()
  @IsOptional()
  promocoes: object;
}

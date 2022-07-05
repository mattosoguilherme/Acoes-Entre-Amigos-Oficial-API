import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  validateOrReject,
} from 'class-validator';

export class CreateRaffleDto {
  @ApiProperty({
    default: 'Chá Rifa',
    description: 'Campo designado ao titulo da rifa',
  })
  titulo: string;

  @ApiProperty({
    default: 1,
    description:
      ' Neste campo será inserida o ID de um categoria pré cadastrada no sistema',
  })
  categoria: number;

  @ApiProperty({ default: 'Rua Tenente Manoel Alves dos Anjos' })
  local: string;

  @ApiProperty({
    description: 'Este campo deverá ser preenchido com a data de encerramento',
  })
  prazo_expiracao: Date;

  @ApiProperty({
    description: 'Este campo deverá ser preenchido com a data de sorteio',
  })
  dia_sorteio: Date;

  @ApiProperty({
    default: 10,
    description:
      'Este campo deverá ser preenchido com a quantidade cotas(números)',
  })
  cotas: number;

  @ApiProperty({
    default: 10.5,
    description:
      'Este campo deverá ser preenchido com preço individual das cotas(números)',
  })
  preco_cota: number;

  @ApiProperty({
    default: 3,
    description:
      'Este campo deverá ser preenchido com o limite de cotas(números) por comprador(a)',
  })
  limite_cota_user: number;

  @ApiProperty({
    default: '11992767398',
    description:
      'Este campo deverá ser preenchido com o telefone do organizador',
  })
  telefone_suporte: string;

  @ApiProperty({
    default: 'Chá rifa do Gael, para comemorar um ano do nosso príncipe',
    description: 'Este campo deverá ser preenchido com a descrição',
  })
  descricao: string;

  @ApiProperty({
    default:
      'https://cdn.rifa.link/rifas/00000121757_rifas_7HbC8FBGwhqWdTxcXp6t.jpg',
    description:
      'Este campo deverá ser preenchido com uma imagem do prêmio ou folder desenvolvido pela nossa equipe',
  })
  img_premio: string;

  @ApiProperty({
    default: 'whatsapp',
    description:
      'Este campo deverá ser preenchido com uma imagem do prêmio ou folder desenvolvido pela nossa equipe',
  })
  link_grupo: string;

  @ApiProperty({
    default: 2,
    description:
      'Este campo deverá ser preenchido com um ID de um tipo pré cadastrado no sistema',
  })
  Tipo_rifa: number;

  @ApiProperty({
    default: [1],
    description:
      'Este campo deverá ser preenchido com um ID de um tipo pré cadastrado no sistema',
  })
  Tipo_exibicao: number[];

  @ApiProperty({
    default: [1, 2, 3],
    description:
      'Este campo deverá ser preenchido com um IDs de requisitos pré cadastrados no sistema',
  })
  Requisitos_reserva: number[];

  @ApiProperty({
    default: ['celular', 'moto', 'fogão'],
    description: 'Este campo deverá ser preenchido com os prêmios',
  })
  premios: string[];

  @ApiProperty({
    default:{"chave":"valor", "chave2":"valor2"},
    description:
      'Este campo deverá ser preenchido com as promoções de compra, se houver',
  })
  promocoes: JSON;
}

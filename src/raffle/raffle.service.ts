import { Injectable } from '@nestjs/common';
import { Quota, Raffle } from '@prisma/client';
import { AeaService } from 'src/aEa/aEa.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRaffleDto } from './dto/create-raffle.dto';
import { UpdateRaffleDto } from './dto/update-raffle.dto';

@Injectable()
export class RaffleService {
  constructor(private prisma: PrismaService, private aEa: AeaService) {}

  async create(createRaffleDto: CreateRaffleDto): Promise<Raffle> {
    const {categoria,Requisitos_reserva, Tipo_exibicao, Tipo_rifa,cotas} = createRaffleDto


    let createdCotas:Quota[] = []

    for (let index = 0; index < cotas; index++) {
      
      const cota = await this.prisma.quota.create({
        data: {
          cota: index
        }
      })

      createdCotas.push(cota)
      
    }

    const createdRaffle = await this.prisma.raffle.create({ data: {
      titulo: createRaffleDto.titulo,
      prazo_expiracao:createRaffleDto.prazo_expiracao,
      dia_sorteio:createRaffleDto.dia_sorteio,
      descricao:createRaffleDto.descricao,
      preco_cota:createRaffleDto.preco_cota,
      limite_cota_user:createRaffleDto.limite_cota_user,
      img_premio:createRaffleDto.img_premio,
      link_grupo:createRaffleDto.link_grupo,
      telefone_suporte:createRaffleDto.telefone_suporte,
      premios:createRaffleDto.premios,  
      promocoes:createRaffleDto.promocoes,
      Categorias: { connect: { id: categoria} },
      Requisitos_reserva: { connect: Requisitos_reserva.map((r) => ({id: r})) },
      Tipos_exibicao: { connect: { id: Tipo_exibicao}},
      Tipos_rifa:{connect: {id: Tipo_rifa}},
      local:createRaffleDto.local,
      Cotas: { connect:createdCotas.map((c)=>({ id: c.id })) },
    }, include:{
      Cotas:true,
      
    }})

    return createdRaffle;
  }

  findAll() {
    return `This action returns all raffle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} raffle`;
  }

  update(id: number, updateRaffleDto: UpdateRaffleDto) {
    return `This action updates a #${id} raffle`;
  }

  remove(id: number) {
    return `This action removes a #${id} raffle`;
  }
}

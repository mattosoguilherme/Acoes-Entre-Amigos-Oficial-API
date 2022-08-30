import { Injectable } from '@nestjs/common';
import { TypeRaffle } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeRaffleDto } from './dto/create-type-raffle.dto';
import { UpdateTypeRaffleDto } from './dto/update-type-raffle.dto';

@Injectable()
export class TypeRaffleService {
  constructor(private prisma: PrismaService) {}

  async create({ tipoRifa }: CreateTypeRaffleDto):Promise<TypeRaffle> {
    return await this.prisma.typeRaffle.create({
      data: {
        tipo_sorteio: tipoRifa,
      },
    });
  }

  async update(id: number, { tipoRifa }: UpdateTypeRaffleDto):Promise<TypeRaffle> {
    return await this.prisma.typeRaffle.update({
      where: { id: id },
      data: {
        tipo_sorteio: tipoRifa,
      },
    });
  }

  async remove(id: number):Promise<TypeRaffle> {
    return await this.prisma.typeRaffle.delete({ where: { id: id } });
  }
}

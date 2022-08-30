import { Injectable } from '@nestjs/common';
import { TypeDisplay } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDisplayDto } from './dto/create-type-display.dto';
import { UpdateTypeDisplayDto } from './dto/update-type-display.dto';

@Injectable()
export class TypeDisplayService {
  constructor(private prisma: PrismaService) {}

  async create({ tipoExibicao }: CreateTypeDisplayDto): Promise<TypeDisplay> {
    return await this.prisma.typeDisplay.create({
      data: {
        tipo_exibicao: tipoExibicao,
      },
    });
  }

  async update(
    id: number,
    { tipoExibicao }: UpdateTypeDisplayDto,
  ): Promise<TypeDisplay> {
    return await this.prisma.typeDisplay.update({
      where: { id: id },
      data: {
        tipo_exibicao: tipoExibicao,
      },
    });
  }

  async remove(id: number): Promise<TypeDisplay> {
    return await this.prisma.typeDisplay.delete({ where: { id: id } });
  }
}

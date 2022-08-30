import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create({ categoria }: CreateCategoryDto): Promise<Category> {
    const createdCategory = await this.prisma.category.create({
      data: {
        categoria: categoria,
      },
    });

    return createdCategory;
  }

  async update(
    id: number,
    { categoria }: UpdateCategoryDto,
  ): Promise<Category> {
    return this.prisma.category.update({
      where: { id: Number(id) },
      data: {
        categoria: categoria,
      },
    });
  }

  async remove(id: number): Promise<Category> {
    return this.prisma.category.delete({ where: { id: Number(id) } });
  }
}

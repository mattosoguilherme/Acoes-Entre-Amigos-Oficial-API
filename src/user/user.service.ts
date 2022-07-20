import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AeaService } from 'src/aEa/aEa.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePassDto } from './dto/update-pass.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserFindManyDto } from './dto/user-findMany.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private aEa: AeaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, contact } = await this.aEa.fields_validator(
      createUserDto,
    );

    const createdUser = await this.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        contact: contact,
      },
    });
    delete createdUser.password;
    return createdUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const { name } = await this.aEa.updated_fields_validator(updateUserDto);

    const updatedUser = await this.prisma.user.update({
      where: { id: id },
      data: {
        name: name,
        email: updateUserDto.email,
        contact: updateUserDto.contact,
      },
    });
    delete updatedUser.password;
    return updatedUser;
  }

  async updateCredential(
    id: string,
    updatePassDto: UpdatePassDto,
  ): Promise<User> {
    const newHash = await this.aEa.new_credentials_validator(updatePassDto, id);

    const credentialsUserUpdated = await this.prisma.user.update({
      where: { id: id },
      data: {
        password: newHash,
      },
    });

    credentialsUserUpdated.password;
    return credentialsUserUpdated;
  }

  async remove(id: string): Promise<User> {
    await this.aEa.find_user_by_id(id);

    const userDeleted = await this.prisma.user.delete({
      where: { id: id },
    });

    return userDeleted;
  }

  async findAll(): Promise<UserFindManyDto[]> {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        contact: true,
        name: true,
        Rifas: {
          select: {
            _count: true,
            Categorias: { select: { categoria: true } },
            Cotas: {
              select: {
                cota: true,
                id: true,
                comprador: true,
                contato_comprador: true,
              },
            },
            descricao: true,
            id: true,
            img_premio: true,
            link_grupo: true,
            limite_cota_user: true,
            Locais: { select: { local: true } },
            preco_cota: true,
            premios: true,
            promocoes: true,
            prazo_expiracao: true,
            Requisitos_reserva: { select: { requisitos_reserva: true } },
            telefone_suporte: true,
            dia_sorteio: true,
            titulo: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<User> {
    const userFinded = await this.aEa.find_user_by_id(id);

    delete userFinded.password;

    return userFinded;
  }
}

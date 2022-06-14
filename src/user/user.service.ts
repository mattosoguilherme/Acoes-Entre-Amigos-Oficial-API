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
            Category: { select: { category: true } },
            Quotas: { select: { quotas: true, id: true, buyer: true } },
            description: true,
            id: true,
            frontCover: true,
            group_link: true,
            limit_participant_quota: true,
            place: true,
            price_quote: true,
            prizes: true,
            promotions: true,
            quota_payment_term: true,
            reservation_requirements: true,
            support_contact: true,
            term: true,
            title: true,
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

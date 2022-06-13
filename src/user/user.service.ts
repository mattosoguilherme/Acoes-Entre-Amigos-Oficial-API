import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AeaService } from 'src/aEa/aEa.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private aEa: AeaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, contact } = await this.aEa.fields_validator(
      createUserDto
    );

    const createdUser = await this.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
        contact: contact,
      },
    });
    return createdUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UpdatePassDto } from 'src/user/dto/update-pass.dto';

@Injectable()
export class AeaService {
  constructor(private prisma: PrismaService) {}

  titleize(text: string) {
    var words = text.toLowerCase().split(' ');

    for (var i = 0; i < words.length; i++) {
      var w: string = words[i];
      words[i] = w[0].toUpperCase() + w.slice(1);
    }
    const n: string = words.join();
    return n.replace(/,/g, ' ');
  }

  async compare(pass: string, id: string) {
    const { password } = await this.prisma.user.findUnique({
      where: { id: id },
    });

    const hashValidated = await bcrypt.compare(pass, password);

    if (!hashValidated) {
      throw new ConflictException('Senha atual está incorreta.');
    }
  }

  async email_valid(email: string): Promise<User> {
    const emailFinded = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailFinded) {
      throw new NotFoundException('email já cadastrado');
    }

    return emailFinded;
  }

  async find_user_by_id(id: string): Promise<User> {
    const userFinded = await this.prisma.user.findUnique({
      where: { id: id },
    });

    if (!userFinded) {
      throw new NotFoundException(' Id não existe. Usuário não encontrado. ');
    }
    return userFinded;
  }

  async fields_validator({
    email,
    password,
    name,
    contact,
    confirmationPass,
  }: CreateUserDto): Promise<User> {
    if (password !== confirmationPass) {
      throw new ConflictException('As senhas estão divergentes');
    }

    const nameFormated = this.titleize(name);
    const hashPass = await bcrypt.hash(password, 10);
    await this.email_valid(email);

    return {
      id: '',
      password: hashPass,
      name: nameFormated,
      email: email,
      contact: contact,
    };
  }

  async updated_fields_validator({
    name,
    email,
    contact,
  }: UpdateUserDto): Promise<User> {
    const user: User = {
      id: '',
      password: '',
      name: name,
      email: email,
      contact: contact,
    };

    if (name) {
      user.name = this.titleize(name);
    }

    if (email) {
      await this.email_valid(email);
    }

    return user;
  }

  async new_credentials_validator(
    { actualPass, newPass, newPassConfirmation }: UpdatePassDto,
    idUser: string,
  ): Promise<string> {
    const { id } = await this.find_user_by_id(idUser);

    await this.compare(actualPass, id);

    if (newPass !== newPassConfirmation) {
      throw new ConflictException(
        'Nova senha está divergente da senha de confirmação',
      );
    }

    return await bcrypt.hash(newPass, 10);
  }
}

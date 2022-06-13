import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

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
}

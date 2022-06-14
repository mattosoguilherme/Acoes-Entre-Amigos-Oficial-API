import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AeaService } from 'src/aEa/aEa.service';

@Module({
  controllers: [UserController],
  providers: [UserService,PrismaService, AeaService]
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { TypeRaffleService } from './type-raffle.service';
import { TypeRaffleController } from './type-raffle.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TypeRaffleController],
  providers: [TypeRaffleService,PrismaService]
})
export class TypeRaffleModule {}

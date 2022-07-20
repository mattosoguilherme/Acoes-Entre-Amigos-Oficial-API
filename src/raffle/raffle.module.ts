import { Module } from '@nestjs/common';
import { RaffleService } from './raffle.service';
import { RaffleController } from './raffle.controller';
import { AeaService } from 'src/aEa/aEa.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RaffleController],
  providers: [RaffleService, AeaService, PrismaService]
})
export class RaffleModule {}

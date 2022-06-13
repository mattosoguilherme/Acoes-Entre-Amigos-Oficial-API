import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { RaffleModule } from './raffle/raffle.module';
import { PrismaService } from './prisma/prisma.service';
import { AeaService } from './aEa/aEa.service';

@Module({
  imports: [UserModule, RaffleModule],
  controllers: [],
  providers: [ PrismaService, AeaService],
})
export class AppModule {}

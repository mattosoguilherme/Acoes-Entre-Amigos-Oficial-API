import { Module } from '@nestjs/common';
import { TypeRaffleService } from './type-raffle.service';
import { TypeRaffleController } from './type-raffle.controller';

@Module({
  controllers: [TypeRaffleController],
  providers: [TypeRaffleService]
})
export class TypeRaffleModule {}

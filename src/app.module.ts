import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { RaffleModule } from './raffle/raffle.module';
import { CategoryModule } from './category/category.module';
import { BookingModule } from './booking/booking.module';
import { TypeRaffleModule } from './type-raffle/type-raffle.module';
import { TypeDisplayModule } from './type-display/type-display.module';


@Module({
  imports: [UserModule, RaffleModule, CategoryModule, BookingModule, TypeRaffleModule, TypeDisplayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

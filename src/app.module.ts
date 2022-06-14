import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { RaffleModule } from './raffle/raffle.module';


@Module({
  imports: [UserModule, RaffleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RaffleModule } from './raffle/raffle.module';

@Module({
  imports: [UserModule, RaffleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

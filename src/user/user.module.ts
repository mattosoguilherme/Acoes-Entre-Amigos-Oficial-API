import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AeaService } from 'src/aEa/aEa.service';
import { BullModule, InjectQueue } from '@nestjs/bull';
import { MailerModule } from '@nestjs-modules/mailer';
import { Queue } from 'bull';
import { MiddlewareBuilder } from '@nestjs/core';
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import { SendMailConsumer } from './job/sendMail.consumer';
import { SendMailProducerService } from './job/sendMailProducer.service';
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'sendMail-queue',
    }),
    BullModule.forRoot({
      redis: {
        // name: process.env.REDIS_USER,
        // password: process.env.REDIS_PASS,
        host: 'localhost' || process.env.REDIS_HOST,
        port: 6379 || Number(process.env.REDIS_PORT),
      },
    }),
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
      //  host: "smtp.gmail.com ",
        service:"gmail",
        secure: true,
        port: 465 || Number(process.env.MATL_PORT),
        tls: {
          rejectUnauthorized: false,
        },
        auth: {
          user: "equipe.develop@gmail.com", 
          pass: "@suporte2022" ,
        },
      },
    }),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    AeaService,
    SendMailConsumer,
    SendMailProducerService,
  ],
})
export class UserModule {
  constructor(@InjectQueue('sendMail-queue') private sendMailQueue: Queue) {}

  configure(consumer: MiddlewareBuilder) {
    const { router } = createBullBoard([new BullAdapter(this.sendMailQueue)]);
    consumer.apply(router).forRoutes('/dashboard');
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';

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
@Module({
  imports:[
    BullModule.registerQueue({
      name:"sendMail-queue"
    }),
    BullModule.forRoot({
      redis:{
        name: process.env.REDIS_USER,
        password:process.env.REDIS_PASS,
        host:process.env.REDIS_HOST,
        port:Number(process.env.REDIS_PORT)
      }
    }),
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        secure: false,
        port: Number(process.env.MATL_PORT),
        tls: {
          rejectUnauthorized: false,
        },
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    })
  
  ],
  controllers: [UserController],
  providers: [UserService,PrismaService, AeaService]
})
export class UserModule {
  constructor(@InjectQueue('sendMail-queue') private sendMailQueue: Queue) {}

  configure(consumer: MiddlewareBuilder) {
    const { router } = createBullBoard([new BullAdapter(this.sendMailQueue)]);
    consumer.apply(router).forRoutes('/dashboard');
  }
}

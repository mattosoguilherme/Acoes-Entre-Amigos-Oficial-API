import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class SendMailProducerService {
  constructor(@InjectQueue('sendMail-queue') private queue: Queue) {}

  async sendMail(user: CreateUserDto) {
    await this.queue.add('sendMail-job', user);
  }
}

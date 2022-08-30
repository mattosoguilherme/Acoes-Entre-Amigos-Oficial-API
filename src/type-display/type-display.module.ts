import { Module } from '@nestjs/common';
import { TypeDisplayService } from './type-display.service';
import { TypeDisplayController } from './type-display.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TypeDisplayController],
  providers: [TypeDisplayService,PrismaService]
})
export class TypeDisplayModule {}

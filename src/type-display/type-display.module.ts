import { Module } from '@nestjs/common';
import { TypeDisplayService } from './type-display.service';
import { TypeDisplayController } from './type-display.controller';

@Module({
  controllers: [TypeDisplayController],
  providers: [TypeDisplayService]
})
export class TypeDisplayModule {}

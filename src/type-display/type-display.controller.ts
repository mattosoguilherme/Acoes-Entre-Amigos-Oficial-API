import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeDisplayService } from './type-display.service';
import { CreateTypeDisplayDto } from './dto/create-type-display.dto';
import { UpdateTypeDisplayDto } from './dto/update-type-display.dto';

@Controller('type-display')
export class TypeDisplayController {
  constructor(private readonly typeDisplayService: TypeDisplayService) {}

  @Post()
  create(@Body() createTypeDisplayDto: CreateTypeDisplayDto) {
    return this.typeDisplayService.create(createTypeDisplayDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTypeDisplayDto: UpdateTypeDisplayDto) {
    return this.typeDisplayService.update(id, updateTypeDisplayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.typeDisplayService.remove(id);
  }
}

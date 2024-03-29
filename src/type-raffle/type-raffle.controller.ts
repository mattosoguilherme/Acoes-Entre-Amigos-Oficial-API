import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeRaffleService } from './type-raffle.service';
import { CreateTypeRaffleDto } from './dto/create-type-raffle.dto';
import { UpdateTypeRaffleDto } from './dto/update-type-raffle.dto';

@Controller('type-raffle')
export class TypeRaffleController {
  constructor(private readonly typeRaffleService: TypeRaffleService) {}

  @Post()
  create(@Body() createTypeRaffleDto: CreateTypeRaffleDto) {
    return this.typeRaffleService.create(createTypeRaffleDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTypeRaffleDto: UpdateTypeRaffleDto) {
    return this.typeRaffleService.update(id, updateTypeRaffleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.typeRaffleService.remove(id);
  }
}

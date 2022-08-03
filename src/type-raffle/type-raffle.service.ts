import { Injectable } from '@nestjs/common';
import { CreateTypeRaffleDto } from './dto/create-type-raffle.dto';
import { UpdateTypeRaffleDto } from './dto/update-type-raffle.dto';

@Injectable()
export class TypeRaffleService {
  create(createTypeRaffleDto: CreateTypeRaffleDto) {
    return 'This action adds a new typeRaffle';
  }

  findAll() {
    return `This action returns all typeRaffle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeRaffle`;
  }

  update(id: number, updateTypeRaffleDto: UpdateTypeRaffleDto) {
    return `This action updates a #${id} typeRaffle`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeRaffle`;
  }
}

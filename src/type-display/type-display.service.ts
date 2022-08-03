import { Injectable } from '@nestjs/common';
import { CreateTypeDisplayDto } from './dto/create-type-display.dto';
import { UpdateTypeDisplayDto } from './dto/update-type-display.dto';

@Injectable()
export class TypeDisplayService {
  create(createTypeDisplayDto: CreateTypeDisplayDto) {
    return 'This action adds a new typeDisplay';
  }

  findAll() {
    return `This action returns all typeDisplay`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeDisplay`;
  }

  update(id: number, updateTypeDisplayDto: UpdateTypeDisplayDto) {
    return `This action updates a #${id} typeDisplay`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeDisplay`;
  }
}

import { Injectable } from '@nestjs/common';
import { BookingRequirements } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor( private prisma:PrismaService){}
  
 async create({requisitos_reserva}: CreateBookingDto):Promise<BookingRequirements> {
    return this.prisma.bookingRequirements.create({
      data:{
        requisitos_reserva: requisitos_reserva
      }
    });
  }

  findAll() {
    return `This action returns all booking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}

import { Injectable } from '@nestjs/common';
import { BookingRequirements } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async create({
    requisitos_reserva,
  }: CreateBookingDto): Promise<BookingRequirements> {
    return this.prisma.bookingRequirements.create({
      data: {
        requisitos_reserva: requisitos_reserva,
      },
    });
  }

  async update(
    id: number,
    { requisitos_reserva }: UpdateBookingDto,
  ): Promise<BookingRequirements> {
    return await this.prisma.bookingRequirements.update({
      where: { id: id },
      data: {
        requisitos_reserva: requisitos_reserva,
      },
    });
  }

  async remove(id: number): Promise<BookingRequirements> {
    return await this.prisma.bookingRequirements.delete({ where: { id: id } });
  }
}

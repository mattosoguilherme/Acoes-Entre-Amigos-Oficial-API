import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRaffleDto {
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  frontCover: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  place: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  support_contact: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  group_link: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  limit_participant_quota: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  price_quote: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quota_payment_term: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  idCategory:number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantity_quotas:number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  reservation_requirements: string[];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  prizes: string[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  promotions: object[];

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  term:Date;


}

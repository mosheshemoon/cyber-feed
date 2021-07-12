import {
  IsArray,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class Restaurant {
  @IsOptional()
  @IsMongoId()
  _id?: string;
  @IsString() title: string;
  @IsOptional()
  @IsString()
  image?: string;
  @IsOptional()
  @IsNumber()
  minCharge?: number;
  @IsNumber() rating: number;
  @IsString() titlMC: string;
  @IsOptional()
  @IsArray()
  type?: string[];
}

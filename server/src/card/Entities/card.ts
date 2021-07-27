import { IsDate, IsMongoId, IsOptional, IsString } from 'class-validator';

export class Card {
  @IsOptional()
  @IsMongoId()
  _id?: string;
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  description: string;
  @IsOptional()
  @IsDate()
  date?: Date;
  @IsOptional()
  numberOfLikes?: number;
  @IsOptional()
  @IsString()
  name?: string;
}

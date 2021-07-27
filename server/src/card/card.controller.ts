import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { Card } from './Entities';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  @Get()
  async card(): Promise<Card[]> {
    return this.cardService.getAll();
  }

  @Post()
  async create(@Body() card: Card): Promise<Card> {
    console.log(card)
    return this.cardService.create(card);
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardController } from './card.controller';
import { CardSchema } from './card.schema';
import { CardService } from './card.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'restaurant', schema: CardSchema },
    ]),
  ],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}

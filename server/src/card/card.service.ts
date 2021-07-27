import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './Entities';

@Injectable()
export class CardService {
  constructor(
    @InjectModel('restaurant') private restaurantModel: Model<Card>,
  ) {}

  async getAll() {
    return this.restaurantModel.find();
  }

  async create(card: Card): Promise<Card> {
    const createdCat = new this.restaurantModel(card);
    return createdCat.save();
  }
}

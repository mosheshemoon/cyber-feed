import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from './Entities';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel('restaurant') private restaurantModel: Model<Restaurant>,
  ) {}

  async getAll() {
    return this.restaurantModel.find();
  }

  async update(id: string, changes: Restaurant): Promise<Restaurant> {
    return this.restaurantModel.findOneAndUpdate({ _id: id }, changes);
  }

  async delete(id: string): Promise<number> {
    return (await this.restaurantModel.deleteOne({ _id: id })).deletedCount;
  }

  async create(restaurant: Restaurant): Promise<Restaurant> {
    const createdCat = new this.restaurantModel(restaurant);
    return createdCat.save();
  }
}

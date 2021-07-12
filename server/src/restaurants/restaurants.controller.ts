import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Restaurant } from './Entities';
import { RestaurantsService } from './restaurant.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  async restaurants(): Promise<Restaurant[]> {
    return this.restaurantsService.getAll();
  }

  @Put(':restaurantId')
  async update(
    @Param('restaurantId') restaurantId: string,
    @Body() changes: Restaurant,
  ): Promise<Restaurant> {
    if (!restaurantId) {
      throw new Error('no id was sent');
    }

    return this.restaurantsService.update(restaurantId, changes);
  }

  @Delete(':restaurantId')
  async delete(@Param('restaurantId') restaurantId: string) {
    if (!restaurantId) {
      throw new Error('no id was sent');
    }

    const res = await this.restaurantsService.delete(restaurantId);
    if (res === 0) {
      throw new Error('no item was deleted');
    }

    return;
  }

  @Post()
  async create(@Body() restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantsService.create(restaurant);
  }
}

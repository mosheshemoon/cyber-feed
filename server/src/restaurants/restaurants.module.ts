import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantSchema } from './restaurant.schema';
import { RestaurantsService } from './restaurant.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'restaurant', schema: RestaurantSchema },
    ]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}

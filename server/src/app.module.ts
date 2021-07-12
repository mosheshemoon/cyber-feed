import { Module } from '@nestjs/common';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RestaurantsModule, MongooseModule.forRoot('mongodb+srv://nest-admin:zh1WHVeAb5E5qqBL@cluster0.2fzz1.mongodb.net/restaurants?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}

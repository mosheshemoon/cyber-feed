import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CatDocument = Restaurant & Document;

@Schema()
export class Restaurant {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String })
  image: string;

  @Prop({ type: Number })
  minCharge: number;

  @Prop({ type: Number, required: true })
  rating: number;

  @Prop({ type: String, required: true })
  titlMC: string;

  @Prop({ type: [String] })
  type: string[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);

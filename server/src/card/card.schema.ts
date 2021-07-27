import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Card {
  @Prop({ type: String})
  description: string;

  @Prop({ type: Date, default: new Date() })
  date: Date;

  @Prop({ type: String, default: 'CyberProof Analist' })
  title: string;

  @Prop({ type: String, default: 'seemo cohen' })
  name: string;

  @Prop({ type: Number, default: 0 })
  numberOfLikes: number;
}

export const CardSchema = SchemaFactory.createForClass(Card);

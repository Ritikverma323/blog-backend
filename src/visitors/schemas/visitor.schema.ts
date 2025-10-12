import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Visitor extends Document {
  @Prop({ required: true })
  postId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ default: Date.now })
  date: Date;
}

export const VisitorSchema = SchemaFactory.createForClass(Visitor);

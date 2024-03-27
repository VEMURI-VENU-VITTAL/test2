import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import * as AutoIncrementFactory from 'mongoose-sequence';

export enum Category {
  ADVENTURE = 'Adventure',
  CALSSICS = 'Classics',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  
  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;

  @Prop()
  book_url?:string
}

export const BookSchema = SchemaFactory.createForClass(Book);
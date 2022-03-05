import * as mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
  id: number;
  brand: string;
  description: string;
  image: string;
  price: number;
  priceOld?: number;
  desc?: number;
}
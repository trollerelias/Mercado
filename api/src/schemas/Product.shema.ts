import * as mongoose from "mongoose";
import { IProduct } from "../interfaces/Product.interfaz";

export const ProductSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    priceOld: { type: Number },
    desc: { type: Number }
});

ProductSchema.index({ brand: 'text', description: 'text'})

const Product = mongoose.model<IProduct>("products", ProductSchema);

export default Product;
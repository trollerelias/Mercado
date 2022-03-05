import Product from "../schemas/Product.shema";
import { IProduct } from "../interfaces/Product.interfaz";

class ProductModel {
    async findById(id : number | null): Promise<IProduct | null> {
        // console.log(`id : ${newId}`);
        const product = await Product.findOne({ id });
        return product;
    }

    async findByTerm(termino : string): Promise<IProduct[]> {
        const products = await Product.find({
            $or: [{ brand: { $regex: termino } }, { description: { $regex: termino }}]
        }).limit(100);
        return products;
    }
}

export const productModel = new ProductModel();
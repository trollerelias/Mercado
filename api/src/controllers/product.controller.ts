import { Request, Response } from "express";
import { IProduct } from "../interfaces/Product.interfaz";
import { productModel } from "../model/product.model";
import Product from "../schemas/Product.shema";
import { textos } from "../util/textos";

class ProductController {
  async index(req: Request, res: Response) {

    const { termino } = req.query;
    const term: string = String(termino);
    let id: number | null = null;
    const DESC = 50;
    let products: IProduct[] = [];

    if(!isNaN(Number(termino)))
      id = Number(termino);
    
    const product = await productModel.findById(id);

    if(product) {
      products = [product];
    } else {
      products = await productModel.findByTerm(term);
    }

    if(textos.checkPalindrom(term) && term.length > 2) {
      products.map((prod)=> {
        prod.desc = DESC;
        prod.priceOld = prod.price;
        prod.price *= (DESC / 100);
      });
    }

    res.status(200).json(products);
  }
}

export const productController = new ProductController();
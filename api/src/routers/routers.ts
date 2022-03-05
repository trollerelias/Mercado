import { Router } from "express";
import { productController } from '../controllers/product.controller';
import { homeController } from "../controllers/home.controller";

const Routers: Router = Router();

Routers.get('/', homeController.index);
Routers.get('/product', productController.index);

export default Routers;
import { ProductsController } from "@/controller/Products/product.controller";
import { Routes } from "@/interface/routes.interface";
import CategoryRepo from "@/repository/category.repository";
import ProductRepo from "@/repository/product.repository";
import { Router } from "express";

class ProductsRoute implements Routes {
    public path = '/product';
    public router = Router();
    public productsController = new ProductsController(new CategoryRepo(),new ProductRepo);
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.route(`${this.path}/category/get-all`).get(this.productsController.getAllCategoris);
      this.router.route(`${this.path}/get-all`).get(this.productsController.getProducts);
      this.router.route(`${this.path}/category-wise-product`).get(this.productsController.getProductsCategoriesWise);
    }
}

export default ProductsRoute;

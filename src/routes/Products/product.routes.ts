import { ProductsController } from "@/controller/Products/product.controller";
import { Routes } from "@/interface/routes.interface";
import ProductCartRepo from "@/repository/cartProduct.repository";
import CategoryRepo from "@/repository/category.repository";
import ProductRepo from "@/repository/product.repository";
import { Router } from "express";

class ProductsRoute implements Routes {
    public path = '/product';
    public router = Router();
    public productsController = new ProductsController(new CategoryRepo(),new ProductRepo,new ProductCartRepo());
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.route(`${this.path}/category/get-all`).get(this.productsController.getAllCategoris);
      this.router.route(`${this.path}/get-all`).get(this.productsController.getProducts);
      this.router.route(`${this.path}/category-wise-product`).get(this.productsController.getProductsCategoriesWise);
      this.router.route(`${this.path}/add-to-cart`).post(this.productsController.addProductToCart);
    }
}

export default ProductsRoute;

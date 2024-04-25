import { CartProductsController } from '@/controller/CartProduct/cartProdcut.controller';
import { Routes } from '@/interface/routes.interface';
import ProductCartRepo from '@/repository/cartProduct.repository';
import CategoryRepo from '@/repository/category.repository';
import ProductRepo from '@/repository/product.repository';
import { Router } from 'express';

class CartProductsRoute implements Routes {
  public path = '/cart-product';
  public router = Router();
  public cartProductsController = new CartProductsController(
    new CategoryRepo(),
    new ProductRepo(),
    new ProductCartRepo(),
  );

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.route(`${this.path}/get-all`).get(this.cartProductsController.getCartData);
    this.router.route(`${this.path}/add`).post(this.cartProductsController.addCartData);
    this.router.route(`${this.path}/remove`).post(this.cartProductsController.removeCartData);
    this.router.route(`${this.path}/payment`).post(this.cartProductsController.paymentCartData);
  }
}

export default CartProductsRoute;
import { generalResponse } from '@/helper/common.helper';
import Products from '@/models/product.model';
import ProductsCart from '@/models/productCart.model';
import ProductCartRepo from '@/repository/cartProduct.repository';
import CategoryRepo from '@/repository/category.repository';
import ProductRepo from '@/repository/product.repository';
import { NextFunction, Request, Response } from 'express';

export class CartProductsController {
  constructor(
    public readonly categoryRepository: CategoryRepo,
    public readonly productRepository: ProductRepo,
    public readonly productCartRepository: ProductCartRepo,
  ) {}

  public readonly getCartData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAllData = await this.productCartRepository.getAll({
        attributes: { exclude: ['created_at', 'updated_at', 'deleted_at'] },
        include: {
          model: Products,
          attributes: { exclude: ['created_at', 'updated_at', 'deleted_at'] },
        },
      });
      return generalResponse(res, getAllData, 'Cart data fetched succesfully', 'success', false, 200);
    } catch (error) {
      return generalResponse(res, error.message, 'Something Went Wrong!', 'failed', false, 400);
    }
  };

  public readonly addCartData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const addData = await ProductsCart.update(
        {
          quantity: req.body.quantity + 1,
          price: req.body.price,
          total_price: req.body.price * req.body.quantity,
        },
        {
          where: {
            uuid: req.body.uuid,
          },
        },
      );
      return generalResponse(res, '', 'Cart data added succesfully', 'success', false, 200);
    } catch (error) {
      return generalResponse(res, error.message, 'Something Went Wrong!', 'failed', false, 400);
    }
  };

  public readonly removeCartData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const removeData = await ProductsCart.update(
        {
          quantity: req.body.quantity - 1,
          price: req.body.price,
          total_price: req.body.price * req.body.quantity,
        },
        {
          where: {
            uuid: req.body.uuid,
          },
        },
      );
      return generalResponse(res, '', 'Cart data removed succesfully', 'success', false, 200);
    } catch (error) {
      return generalResponse(res, error.message, 'Something Went Wrong!', 'failed', false, 400);
    }
  };

  public readonly paymentCartData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const payment = await ProductsCart.update(
        {
          payment_done: 'COMPLETED',
          quantity: req.body.data.quantity,
          price: req.body.data.price,
          total_price: req.body.data.price * req.body.data.quantity,
        },
        {
          where: {
            uuid: req.body.data.uuid,
          },
        },
      );
      return generalResponse(res,req.body.data.uuid , 'Payment done succesfully', 'success', false, 200);
    } catch (error) {
      return generalResponse(res, error.message, 'Something Went Wrong!', 'failed', false, 400);
    }
  };
}

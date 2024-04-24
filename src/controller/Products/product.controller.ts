import { generalResponse } from '@/helper/common.helper';
import Category from '@/models/category.model';
import Products from '@/models/product.model';
import CategoryRepo from '@/repository/category.repository';
import ProductRepo from '@/repository/product.repository';
import { Request, Response, NextFunction } from 'express';
export class ProductsController {
  constructor(public readonly categoryRepository: CategoryRepo, public readonly productRepository: ProductRepo) {}
  public readonly getAllCategoris = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAllData = await Category.findAll({
        attributes: { exclude: ['created_at', 'updated_at', 'deleted_at'] },
      });
      return generalResponse(res, getAllData, 'Categories fetched successfully', 'success', false, 200);
    } catch (error) {
      console.log(error);
    }
  };

  public readonly getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.productRepository.getAll({
        include:{
          model:Category,
          attributes:['name']
        },
        attributes: { exclude: ['created_at', 'deleted_at', 'updated_at'] },
      });
      return generalResponse(res, response, "Product fetched successfully", 'success', false, 200);
    } catch (error) {
      return generalResponse(res, error.message, 'Something Went Wrong!', 'failed', false, 400);
    }
  };

  public readonly getProductsCategoriesWise = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let order;
      let minPrice, maxPrice;

      const { categoriesId }: { categoriesId?: string[] } = req.query;
      const { page, limit }: { page?: string; limit?: string } = req.query;
      const priceRange = req.query.priceRange as string;
      if (priceRange.includes('-')) {
        [minPrice, maxPrice] = priceRange.split('-');
      } else if (priceRange.includes('+')) {
        minPrice = priceRange.replace('+', '');
        maxPrice = Number.MAX_SAFE_INTEGER;
      }
      const findCategory = await this.categoryRepository.getAll({
        where: {
          uuid: categoriesId as string[],
        },
      });

      if (findCategory) {
        const AllProducts = await this.productRepository.getCategoriesWiseProducts({
          order,
          minPrice,
          maxPrice,
          categoriesId,
          page,
          limit,
        });

        return generalResponse(res, AllProducts, 'Category wise Product fetched successfully', 'success', true, 200);
      } else {
        return generalResponse(res, null, 'Something went wrong', 'failed', false, 400);
      }
    } catch (error) {
      return generalResponse(res, error.message, 'Something Went Wrong!', 'failed', false, 400);
    }
  };
}

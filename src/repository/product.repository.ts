import Products from '@/models/product.model';
import BaseRepository from './base.repository';
import Category from '@/models/category.model';
import { Op } from 'sequelize';

export default class ProductRepo extends BaseRepository<Products> {
  constructor() {
    super(Products.name);
  }

  readonly getCategoriesWiseProducts = async ({
    order,
    minPrice,
    maxPrice,
    categoriesId,
    page,
    limit,
  }: {
    order: [];
    minPrice?: string;
    maxPrice?: string;
    categoriesId: string[];
    page: string;
    limit: string;
  }) => {
    let where;
    if (minPrice && maxPrice) {
      where = {
        price: {
          [Op.between]: [Number(minPrice), Number(maxPrice)],
        },
      };
    }

    const AllProducts = await Products.findAndCountAll({
      attributes: { exclude: ['created_at', 'updated_at', 'deleted_at', 'status'] },
      where: {
        ...(categoriesId.length > 0 && { category_uuid: categoriesId }),
        ...where,
      },
      include: [
        {
          model: Category,
          attributes: ['name'],
          where: {
            uuid: categoriesId,
          },
        },
      ],
      order: order,
      limit: +limit,
      offset: (+page - 1) * +limit,
    });

    return AllProducts;
  };
}

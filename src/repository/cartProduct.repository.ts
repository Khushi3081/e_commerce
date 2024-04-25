import BaseRepository from './base.repository';
import ProductsCart from '@/models/productCart.model';

export default class ProductCartRepo extends BaseRepository<ProductsCart> {
  constructor() {
    super(ProductsCart.name);
  }

}

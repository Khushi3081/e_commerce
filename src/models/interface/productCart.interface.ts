import { RequiredKey } from './common.interface';
export interface ProductsCartAttribute {
  uuid: string;
  product_uuid: string;
  price: string;
  quantity: number;
  total_price: string | number;
  payment_done: string;
  created_at: number;
  updated_at: number;
  deleted_at: number;
}

export type RequiredProductsCartAttributes = RequiredKey<ProductsCartAttribute, 'uuid'>;

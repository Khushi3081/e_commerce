import { RequiredKey } from './common.interface';
export interface ProductsAttributes {
  uuid: string;
  title: string;
  description: string;
  category_uuid: string;
  images: string;
  price:string;
  Quantity:number;
  addedToCart:boolean;
  created_at: number;
  updated_at: number;
  deleted_at: number;
}

export type RequiredProductsAttributes = RequiredKey<ProductsAttributes, 'uuid'>;

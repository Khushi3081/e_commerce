import { RequiredKey } from './common.interface';
export interface CategoryAttributes {
  uuid: string;

  name: string;

  status: string;

  image: string;

  created_at: Date;

  updated_at: Date;

  deleted_at: Date;
}

export type RequiredCategoryAttributes = RequiredKey<CategoryAttributes, 'uuid'>;

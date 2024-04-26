import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ProductsCartAttribute, RequiredProductsCartAttributes } from './interface/productCart.interface';
import Products from './product.model';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'productsCart',
})
export default class ProductsCart extends Model<ProductsCartAttribute, RequiredProductsCartAttributes> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement:true
  })
  uuid: number;

  @ForeignKey(() => Products)
  @Column({
    allowNull: false,
    type: DataTypes.UUID,
  })
  product_uuid: string;
  @BelongsTo(() => Products, 'product_uuid')
  product: Products;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  price: string;

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  total_price: string;

  @Column({
    type: DataTypes.ENUM('PENDING', 'COMPLETED'),
    allowNull:false
  })
  payment_done:string
  
  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  readonly toJSON = () => {
    const values = Object.assign({}, this.get());
    return values;
  };
}

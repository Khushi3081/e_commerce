import {
    BelongsTo,
    Column,
    CreatedAt,
    DeletedAt,
    Model,
    Table,
    UpdatedAt,
  } from 'sequelize-typescript';
  import { DataTypes } from 'sequelize';
  import Category from './category.model';
import { ProductsAttributes, RequiredProductsAttributes } from './interface/product.interface';
  
  @Table({
    timestamps: true,
    paranoid: true,
    tableName: 'products',
  })
  export default class Products extends Model<ProductsAttributes, RequiredProductsAttributes> {
    @Column({
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    })
    uuid: string;
  
    @Column({
      allowNull: false,
      type: DataTypes.STRING,
    })
    title: string;
  
    @Column({
      type: DataTypes.TEXT,
      allowNull: false,
    })
    description: string;

    @Column({
      allowNull: true,
      type: DataTypes.UUID,
    })
    category_uuid: string;
    @BelongsTo(() => Category, 'category_uuid')
    category: Category;
  
    @Column({
      type: DataTypes.STRING,
      allowNull: true,
    })
    images: string;
   
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
  
import { DataTypes } from 'sequelize';
import { Column, CreatedAt, DeletedAt, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { CategoryAttributes, RequiredCategoryAttributes } from './interface/category.interface';

@Table({
  timestamps: true,
  tableName: 'category',
  paranoid: true,
})
export default class Category extends Model<CategoryAttributes, RequiredCategoryAttributes> {
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  uuid: number;

  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  })
  name: string;

  @Column({
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  })
  status: string;

  @Column({
    allowNull: true,
    type: DataTypes.TEXT,
  })
  image: string;

  @CreatedAt
  created_at:Date;

  @UpdatedAt
  updated_at:Date;

  @DeletedAt
  deleted_at:Date;

  readonly toJSON = () => {
    const values = Object.assign({}, this.get());
    // delete values.password;
    return values;
  };
  
}

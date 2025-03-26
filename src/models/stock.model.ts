import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

export interface StockAttributes {
  id: number;
  wholesaler_id: number;
  retailer_id: number;
  stock_amount: number;
  date: Date;
}

export interface StockCreationAttributes extends Optional<StockAttributes, 'id'> { }

export class Stock extends Model<StockAttributes, StockCreationAttributes> implements StockAttributes {
  public id!: number;
  public wholesaler_id!: number;
  public retailer_id!: number;
  public stock_amount!: number;
  public date!: Date;
}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    wholesaler_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    retailer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Stock',
    tableName: 'stocks',
    timestamps: false,
  }
);

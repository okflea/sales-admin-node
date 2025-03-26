import {
  DataTypes,
  Model,
  Optional,
  Association,
  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
} from 'sequelize';
import sequelize from '../config/db';
import { Wholesaler } from './wholesaler.model';

export interface RetailerAttributes {
  id: number;
  name: string;
  mobile_number: string;
}

export interface RetailerCreationAttributes extends Optional<RetailerAttributes, 'id'> { }

export class Retailer extends Model<RetailerAttributes, RetailerCreationAttributes> implements RetailerAttributes {
  public id!: number;
  public name!: string;
  public mobile_number!: string;

  public getWholesalers!: BelongsToManyGetAssociationsMixin<Wholesaler>;
  public setWholesalers!: BelongsToManySetAssociationsMixin<Wholesaler, number>;
  public readonly wholesalers?: Wholesaler[];

  public static associations: {
    wholesalers: Association<Retailer, Wholesaler>;
  };
}

Retailer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Retailer',
    tableName: 'retailers',
    timestamps: false,
  }
);

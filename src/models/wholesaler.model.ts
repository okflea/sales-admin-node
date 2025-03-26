import {
  DataTypes,
  Model,
  Optional,
  Association,
  BelongsToManyGetAssociationsMixin,
  BelongsToManySetAssociationsMixin,
} from 'sequelize';
import sequelize from '../config/db';
import { Retailer } from './retailer.model';

export interface WholesalerAttributes {
  id: number;
  name: string;
  mobile_number: string;
}

export interface WholesalerCreationAttributes extends Optional<WholesalerAttributes, 'id'> { }

export class Wholesaler extends Model<WholesalerAttributes, WholesalerCreationAttributes>
  implements WholesalerAttributes {
  public id!: number;
  public name!: string;
  public mobile_number!: string;

  // Association methods (Sequelize auto-adds these)
  public getRetailers!: BelongsToManyGetAssociationsMixin<Retailer>;
  public setRetailers!: BelongsToManySetAssociationsMixin<Retailer, number>;
  public readonly retailers?: Retailer[];

  public static associations: {
    retailers: Association<Wholesaler, Retailer>;
  };
}

Wholesaler.init(
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
    modelName: 'Wholesaler',
    tableName: 'wholesalers',
    timestamps: false,
  }
);

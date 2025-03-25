import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface WholesalerAttributes {
  id: number;
  name: string;
  mobile_number: string;
}

interface WholesalerCreationAttributes extends Optional<WholesalerAttributes, 'id'> { }

class Wholesaler extends Model<WholesalerAttributes, WholesalerCreationAttributes> implements WholesalerAttributes {
  public id!: number;
  public name!: string;
  public mobile_number!: string;
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

export default Wholesaler;


import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

interface RetailerAttributes {
  id: number;
  name: string;
  mobile_number: string;
}

interface RetailerCreationAttributes extends Optional<RetailerAttributes, 'id'> { }

class Retailer extends Model<RetailerAttributes, RetailerCreationAttributes> implements RetailerAttributes {
  public id!: number;
  public name!: string;
  public mobile_number!: string;
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

export default Retailer;


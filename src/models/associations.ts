import { Wholesaler } from './wholesaler.model';
import { Retailer } from './retailer.model';
import { Stock } from './stock.model';

export const associateModels = () => {
  Wholesaler.belongsToMany(Retailer, {
    through: 'WholesalerRetailer',
    as: 'retailers',
    foreignKey: 'wholesaler_id',
  });

  Retailer.belongsToMany(Wholesaler, {
    through: 'WholesalerRetailer',
    as: 'wholesalers',
    foreignKey: 'retailer_id',
  });

  Stock.belongsTo(Wholesaler, { foreignKey: 'wholesaler_id' });
  Stock.belongsTo(Retailer, { foreignKey: 'retailer_id' });
};

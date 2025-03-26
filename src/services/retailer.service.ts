
import { Retailer } from '../models/retailer.model';
import sequelize from '../config/db';

export const getRetailersWithOneWholesaler = async () => {
  const results = await sequelize.query(`
    SELECT r.*
    FROM retailers r
    JOIN (
      SELECT retailer_id
      FROM "WholesalerRetailer"
      GROUP BY retailer_id
      HAVING COUNT(wholesaler_id) = 1
    ) AS sub ON r.id = sub.retailer_id
  `, {
    model: Retailer,
    mapToModel: true,
  });

  return results;
};

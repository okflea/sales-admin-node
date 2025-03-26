import { Wholesaler } from '../models';
import sequelize from '../config/db';

export const getMonthlyTurnoverByWholesaler = async () => {
  const [results] = await sequelize.query(`
    SELECT
      s.wholesaler_id,
      TO_CHAR(s.date, 'YYYY-MM') AS month,
      SUM(s.stock_amount) AS total_turnover
    FROM stocks s
    WHERE EXTRACT(YEAR FROM s.date) = 2021
    GROUP BY s.wholesaler_id, month
    ORDER BY s.wholesaler_id, month;
  `);

  return results;
};

export const getWholesalerWithRetailers = async (id: number) => {
  const wholesaler = await Wholesaler.findByPk(id, {
    include: ['retailers'],
  });

  if (!wholesaler) {
    throw new Error('Wholesaler not found');
  }

  return wholesaler;
};

export const getMaxRetailerTurnoverPerWholesaler = async () => {
  const [results] = await sequelize.query(`
    SELECT DISTINCT ON (s.wholesaler_id)
      s.wholesaler_id,
      s.retailer_id,
      SUM(s.stock_amount) OVER (
        PARTITION BY s.wholesaler_id, s.retailer_id
      ) AS total_turnover
    FROM stocks s
    ORDER BY s.wholesaler_id, total_turnover DESC;
  `);

  return results;
};

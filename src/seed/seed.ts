import sequelize from '../config/db';
import { Wholesaler, Retailer, Stock } from '../models';

const runSeed = async () => {
  await sequelize.sync({ force: true });

  // ✅ Create wholesalers and retailers
  const wholesalers = await Wholesaler.bulkCreate([
    { name: 'Wholesaler A', mobile_number: '9876543210' },
    { name: 'Wholesaler B', mobile_number: '8765432109' },
    { name: 'Wholesaler C', mobile_number: '7654321098' },
  ]);

  const retailers = await Retailer.bulkCreate([
    { name: 'Retailer 1', mobile_number: '1234567890' },
    { name: 'Retailer 2', mobile_number: '2345678901' },
    { name: 'Retailer 3', mobile_number: '3456789012' },
    { name: 'Retailer 4', mobile_number: '4567890123' },
    { name: 'Retailer 5', mobile_number: '5678901234' },
  ]);

  // Destructure for clarity
  const [whA, whB, whC] = wholesalers;
  const [ret1, ret2, ret3, ret4, ret5] = retailers;

  // ✅ Assign relationships explicitly
  await ret1.setWholesalers([whA]);         // only A
  await ret2.setWholesalers([whA, whB]);    // A & B
  await ret3.setWholesalers([whA, whB]);    // A & B
  await ret4.setWholesalers([whB]);         // only B
  await ret5.setWholesalers([whC]);         // only C

  // ✅ Generate dates: Jan to Dec 2021
  const months = Array.from({ length: 12 }, (_, i) => new Date(2021, i, 1));

  // ✅ Stock creation helper
  const createStockForPair = async (wh: Wholesaler, rt: Retailer) => {
    for (const date of months) {
      await Stock.create({
        wholesaler_id: wh.id,
        retailer_id: rt.id,
        stock_amount: Math.floor(Math.random() * 8000 + 2000),
        date,
      });
    }
  };

  // ✅ Create stock for each defined relationship
  await createStockForPair(whA, ret1);
  await createStockForPair(whA, ret2);
  await createStockForPair(whB, ret2);
  await createStockForPair(whA, ret3);
  await createStockForPair(whB, ret3);
  await createStockForPair(whB, ret4);
  await createStockForPair(whC, ret5);

  console.log('✅ Seed complete with consistent test data');
  process.exit(0);
};

runSeed();

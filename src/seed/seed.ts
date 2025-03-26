import sequelize from '../config/db';
import { Wholesaler, Retailer, Stock } from '../models';

const runSeed = async () => {
  await sequelize.sync({ force: true });

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

  // Random many-to-many associations
  for (const retailer of retailers) {
    const shuffle = wholesalers.sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * 3) + 1;
    await retailer.setWholesalers(shuffle.slice(0, count));
  }

  // Generate stock data: Jan–Dec 2021
  const months = Array.from({ length: 12 }, (_, i) => new Date(2021, i, 1));

  for (const wholesaler of wholesalers) {
    const linkedRetailers = await wholesaler.getRetailers();

    for (const retailer of linkedRetailers) {
      for (const date of months) {
        await Stock.create({
          wholesaler_id: wholesaler.id,
          retailer_id: retailer.id,
          stock_amount: Math.floor(Math.random() * 9000 + 1000),
          date,
        });
      }
    }
  }

  console.log('✅ Seeding complete');
  process.exit(0);
};

runSeed();


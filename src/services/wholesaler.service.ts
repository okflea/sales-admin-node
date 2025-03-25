
import { Wholesaler } from '../models';

export const getWholesalerWithRetailers = async (id: number) => {
  const wholesaler = await Wholesaler.findByPk(id, {
    include: ['retailers'],
  });

  if (!wholesaler) {
    throw new Error('Wholesaler not found');
  }

  return wholesaler;
};

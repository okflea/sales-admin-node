
import { Request, Response, NextFunction } from 'express';
import { getRetailersWithOneWholesaler } from '../services/retailer.service';

export const getSingleWholesalerRetailers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const retailers = await getRetailersWithOneWholesaler();
    res.json({ success: true, data: retailers });
  } catch (err) {
    next(err);
  }
};

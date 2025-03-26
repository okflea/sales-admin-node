
import { Request, Response, NextFunction } from 'express';
import { getWholesalerWithRetailersSchema } from '../validators/wholesaler.validator';
import * as wholesalerService from '../services/wholesaler.service';
import { getMonthlyTurnoverByWholesaler } from '../services/wholesaler.service';
import { getMaxRetailerTurnoverPerWholesaler } from '../services/wholesaler.service';

export const getWholesalerWithRetailers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = getWholesalerWithRetailersSchema.parse(req);
    const data = await wholesalerService.getWholesalerWithRetailers(params.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};


export const getMaxRetailerTurnover = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getMaxRetailerTurnoverPerWholesaler();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const getMonthlyTurnover = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getMonthlyTurnoverByWholesaler();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

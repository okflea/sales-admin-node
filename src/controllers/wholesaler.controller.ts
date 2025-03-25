
import { Request, Response, NextFunction } from 'express';
import { getWholesalerWithRetailersSchema } from '../validators/wholesaler.validator';
import * as wholesalerService from '../services/wholesaler.service';

export const getWholesalerWithRetailers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { params } = getWholesalerWithRetailersSchema.parse(req);
    const data = await wholesalerService.getWholesalerWithRetailers(params.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

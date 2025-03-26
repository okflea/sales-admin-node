
import { Router } from 'express';
import { getSingleWholesalerRetailers } from '../controllers/retailer.controller';

const router = Router();

router.get('/single-wholesaler', getSingleWholesalerRetailers);

export default router;

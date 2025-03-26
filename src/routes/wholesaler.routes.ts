
import { Router } from 'express';
import { getWholesalerWithRetailers } from '../controllers/wholesaler.controller';
import { getMonthlyTurnover } from '../controllers/wholesaler.controller';
import { getMaxRetailerTurnover } from '../controllers/wholesaler.controller';

const router = Router();


router.get('/monthly-turnover', getMonthlyTurnover);
router.get('/:id/retailers', getWholesalerWithRetailers);

router.get('/max-retailer-turnover', getMaxRetailerTurnover);

export default router;

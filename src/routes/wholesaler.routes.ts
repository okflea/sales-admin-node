
import { Router } from 'express';
import { getWholesalerWithRetailers } from '../controllers/wholesaler.controller';

const router = Router();

router.get('/:id/retailers', getWholesalerWithRetailers);

export default router;

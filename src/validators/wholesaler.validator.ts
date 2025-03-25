
import { z } from 'zod';

export const getWholesalerWithRetailersSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
});

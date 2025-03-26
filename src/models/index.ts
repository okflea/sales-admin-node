import { Wholesaler } from './wholesaler.model';
import { Retailer } from './retailer.model';
import { Stock } from './stock.model';
import { associateModels } from './associations';

associateModels();

export { Wholesaler, Retailer, Stock };

import { Food } from './models/food_model';
import { Deliveries } from './models/delivery_model';
export declare class ShopService {
    private deliveryRepository;
    private foodRepository;
    constructor(deliveryRepository: typeof Deliveries, foodRepository: typeof Food);
    getPizzaDay(): Promise<Food[]>;
    getIQPizza(): Promise<Food[]>;
    getKFC(): Promise<Food[]>;
    valueStores(store_value: string): Promise<Food[]>;
}

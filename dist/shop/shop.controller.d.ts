import { ShopService } from './shop.service';
export declare class ShopController {
    private readonly appService;
    constructor(appService: ShopService);
    getPizzaDay(): Promise<import("./models/food_model").Food[]>;
    getIQPizza(): Promise<import("./models/food_model").Food[]>;
    getKFC(): Promise<import("./models/food_model").Food[]>;
}

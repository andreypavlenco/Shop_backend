import { Model } from "sequelize-typescript";
interface deliveriesType {
    delivery_id: number;
    store_id: number;
    food_id: number;
    delivery_time: Date;
}
export declare class Deliveries extends Model<Deliveries, deliveriesType> {
    delivery_id: number;
    store_id: number;
    food_id: number;
    delivery_time: Date;
}
export {};

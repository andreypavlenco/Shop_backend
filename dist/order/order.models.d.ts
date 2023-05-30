import { Model } from "sequelize-typescript";
import { User } from "src/user/user.models";
export interface orderType {
    order_id: number;
    user_id: number;
    food_name: string;
    quantity: number;
    price: number;
    food_img: string;
}
export declare class Order extends Model<Order, orderType> {
    order_id: number;
    user_id: number;
    food_name: string;
    quantity: number;
    price: number;
    food_img: string;
    user: User;
}

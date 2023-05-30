import { Model } from "sequelize-typescript";
import { Order } from "src/order/order.models";
interface userType {
    user_id: number;
    username: string;
    email: string;
    phone: string;
    address: string;
}
export declare class User extends Model<User, userType> {
    user_id: number;
    username: string;
    email: string;
    phone: string;
    address: string;
    orders: Order[];
}
export {};

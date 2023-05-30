import { Model } from "sequelize-typescript";
interface usersOrderType {
    id: number;
    order_id: number;
    user_id: number;
}
export declare class usersOrder extends Model<usersOrderType, usersOrder> {
    id: number;
    user_id: number;
    order_id: number;
}
export {};

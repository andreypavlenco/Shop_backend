import { Model } from "sequelize-typescript";
interface foodType {
    food_id: number;
    food_name: string;
    food_price: number;
    food_img: string;
}
export declare class Food extends Model<Food, foodType> {
    food_id: number;
    food_name: string;
    food_price: Number;
    food_img: string;
}
export {};

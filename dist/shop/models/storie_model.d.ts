import { Model } from "sequelize-typescript";
interface storeType {
    store_id: number;
    store_name: string;
    store_address: string;
}
export declare class Store extends Model<Store, storeType> {
    store_id: number;
    store_name: string;
    store_address: string;
}
export {};



import { BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"
import { User } from "src/user/user.models";

export interface orderType {
    order_id: number,
    user_id: number,
    food_name: string,
    quantity: number,
    price: number,
    food_img: string 
    
  }

  @Table({tableName: 'orders_food' , createdAt:false , updatedAt: false })
  export class Order extends Model<Order,orderType> {
  
      @Column({type:DataType.INTEGER , primaryKey : true,unique: true , autoIncrement: true})
      order_id: number;
      
      @ForeignKey(() => User)
      @Column({type: DataType.NUMBER })
      user_id: number;

      @Column({type: DataType.STRING })
      food_name: string;

      @Column({type: DataType.NUMBER})
      quantity: number;
  
      @Column({type: DataType.INTEGER})
       price:number;

       @Column({type: DataType.STRING})
       food_img:string;
  
       @BelongsTo(() => User, { foreignKey: 'user_id', targetKey: 'user_id' })
          user: User;
  }

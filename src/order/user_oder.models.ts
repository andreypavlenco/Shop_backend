
  import { User } from './../user/user.models';
  import { Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"
import { Order } from './order.models';
  
  interface usersOrderType {
    id: number,
    order_id: number;
    user_id: number;
   
  }

  @Table({tableName: 'order_user ' , createdAt:false , updatedAt: false })
  export class usersOrder extends Model<usersOrderType, usersOrder> {
  
      @Column({type:DataType.INTEGER , primaryKey : true})
      id: number;
      
      @ForeignKey(() => User)
      @Column({type: DataType.INTEGER})
      user_id: number;
  
      @ForeignKey(() => Order)
      @Column({type: DataType.INTEGER})
      order_id: number;
  
  }



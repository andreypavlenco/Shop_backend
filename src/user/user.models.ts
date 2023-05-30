
import { Column, DataType, HasMany, Model, Table} from "sequelize-typescript"
import { Order } from "src/order/order.models";
interface userType {
    user_id: number,
    username: string,
    email: string,
    phone: string,
    address: string
  }

  @Table({tableName: 'users' , createdAt:false , updatedAt: false })
  export class User extends Model<User,userType> {
  
      @Column({type:DataType.INTEGER , primaryKey : true, unique: true , autoIncrement: true})
      user_id: number;
      
      @Column({type: DataType.STRING})
      username: string;
  
      @Column({type: DataType.STRING })
      email: string;
  
      @Column({type: DataType.STRING})
      phone: string;
  
      @Column({type: DataType.STRING})
      address: string;  

      @HasMany(() => Order, { sourceKey: 'user_id', foreignKey: 'user_id' })
      orders: Order[];
  }

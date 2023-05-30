import { Column, DataType, Model, Table} from "sequelize-typescript"

interface deliveriesType {
    delivery_id: number,
    store_id: number,
    food_id: number,
    delivery_time: Date
  }

  @Table({tableName: 'deliveries' , createdAt:false , updatedAt: false })
  export class Deliveries extends Model<Deliveries , deliveriesType> {
  
      @Column({type:DataType.INTEGER , primaryKey : true})
      delivery_id: number;
      
      @Column({type: DataType.NUMBER})
      store_id: number;
  
  
      @Column({type: DataType.NUMBER })
      food_id: number;
  
  
      @Column({type: DataType.DATE})
      delivery_time: Date;
  
  
  }

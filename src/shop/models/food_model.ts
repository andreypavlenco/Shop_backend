import { Column, DataType, Model, Table} from "sequelize-typescript"


interface foodType {
    food_id: number,
    food_name: string,
    food_price: number,
    food_img: string,
  }
  
  @Table({tableName: 'foods' , createdAt:false , updatedAt: false })
  export class Food extends Model<Food , foodType> {
  
      @Column({type:DataType.INTEGER , primaryKey : true})
      food_id: number;
      
      @Column({type: DataType.STRING})
      food_name: string;
  
  
      @Column({type: DataType.NUMBER })
      food_price: Number;
  
      @Column({type: DataType.STRING })
      food_img: string;
  
  
  }
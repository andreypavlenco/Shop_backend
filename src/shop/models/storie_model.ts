import { Column, DataType, Model, Table} from "sequelize-typescript"

interface storeType {
    store_id: number,
    store_name: string,
    store_address: string
  }
  

  @Table({tableName: 'Store' , createdAt:false , updatedAt: false })
export class Store extends Model<Store , storeType> {

    @Column({type:DataType.INTEGER , primaryKey : true})
    store_id: number;
    
    @Column({type: DataType.STRING})
    store_name: string;


    @Column({type: DataType.STRING })
    store_address: string;




}

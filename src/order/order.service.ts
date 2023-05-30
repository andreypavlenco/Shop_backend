import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order} from './order.models';
import { orderDto } from './order.models.dto';


@Injectable()
export class OrderService {
 constructor(@InjectModel(Order) private orderRepository : typeof Order){}

 async createOrder(dto: orderDto){
 return await this.orderRepository.create(dto);

 };

 async findOrder(user_id: number){
    if(user_id){
        const order =  await this.orderRepository.findAll({where:{user_id : user_id}})
        if(order){
            console.log({...order})
            return order
        }
        return {}
    }
    
    };
 
}

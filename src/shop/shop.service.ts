import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Food } from './models/food_model';
import { Deliveries } from './models/delivery_model';


@Injectable()
export class ShopService {
 constructor(@InjectModel(Deliveries) private deliveryRepository:typeof Deliveries,
 @InjectModel(Food) private foodRepository : typeof Food
 ){}

 async getPizzaDay() {
  return await this.valueStores('1')
  };

  async getIQPizza() {
    return await this.valueStores('2')
    };

  async getKFC() {
    return await this.valueStores('3')
    };

  async valueStores(store_value : string) {
      const deliveries = await this.deliveryRepository.findAll({ where: { store_id: store_value } });
      const foodIds = deliveries.map((delivery) => delivery.food_id);
      const foods = await this.foodRepository.findAll({ where: { food_id: foodIds } });
      return foods;
  
    };

 
}

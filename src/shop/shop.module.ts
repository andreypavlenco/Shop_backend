import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Food } from './models/food_model';
import { Store } from './models/storie_model';
import { Deliveries } from './models/delivery_model';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';

@Module({
  controllers: [ShopController],
  providers: [ShopService],
  imports: [
 SequelizeModule.forFeature([Food, Store , Deliveries])   
  ],
})
export class ShopModule {}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './order.models';
import { User } from 'src/user/user.models';
import { usersOrder } from './user_oder.models';


@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
 SequelizeModule.forFeature([Order, User, usersOrder]) ,
  ],
 
})
export class OrderModule {}

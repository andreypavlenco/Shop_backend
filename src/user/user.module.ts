import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User} from './user.models';
import { Order } from 'src/order/order.models';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
   SequelizeModule.forFeature([User,Order]),  
  ],
})
export class UserModule {}

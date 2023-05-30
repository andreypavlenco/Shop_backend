import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Food } from './shop/models/food_model';
import { Store } from './shop/models/storie_model';
import { Deliveries } from './shop/models/delivery_model';
import { ShopModule } from './shop/shop.module';
import { User } from './user/user.models';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { Order } from './order/order.models';
import { usersOrder } from './order/user_oder.models';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [Food , Store ,Deliveries, User , usersOrder, Order],
     
    }),
    ShopModule,
    OrderModule,
    UserModule,
    ConfigModule.forRoot()
  ],
})
export class AppModule {}
// POSTGRES_USER="default"
// POSTGRES_HOST="ep-long-bird-745065-pooler.eu-central-1.postgres.vercel-storage.com"
// POSTGRES_PASSWORD="Pxweqz61ZOFs"
// POSTGRES_DATABASE="verceldb"
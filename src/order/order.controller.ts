import { Body, Controller, Get, Post,Query } from '@nestjs/common';
import { orderDto } from './order.models.dto';
import { OrderService } from './order.service';


@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService,){}

  @Post('order')
  createUser(@Body() dto : orderDto ){
      return this.orderService.createOrder(dto);
  };

  @Get('user/order')
  async findOrder(@Query('user_id') user_id: number) {
    const order = await this.orderService.findOrder(user_id);
    console.log({...order});
    return order;
  };

}
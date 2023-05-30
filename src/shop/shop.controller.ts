import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';


@Controller()
export class ShopController {
  constructor(private readonly appService: ShopService) {}

  @Get('PizzaDay')
  getPizzaDay() {
    return  this.appService.getPizzaDay();
  };

  @Get('IQPizza')
  getIQPizza() {
    return  this.appService.getIQPizza();
  };

  @Get('KFC')
  getKFC() {
    return  this.appService.getKFC();
  };

}

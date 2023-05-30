import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { userDto } from './user.models.dto';
import { UserService } from './user.service';


@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

@Post('user')
createUser(@Body() dto : userDto ){
      const user = this.userService.createUser(dto)
      return user
};

@Get('email')
findUser(@Query() dto: userDto){

     const user =  this.userService.findUser(dto)
     return user
};

}
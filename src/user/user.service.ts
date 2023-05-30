import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './user.models';
import { userDto } from './user.models.dto';

@Injectable()
export class UserService {
 constructor(@InjectModel(User) private usersRepository : typeof User){}

 async createUser(user: userDto){
    return await this.usersRepository.create(user)
 };

 async findUser(dto: userDto){
   if (dto.email) {
        const emailUser = await this.usersRepository.findAll({ where: { email: dto.email } });
      if (emailUser) {
         return emailUser;  
      };
   };
   return null;
}




}
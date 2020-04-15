import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { ProducerService } from './../producer/producer.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private producerService: ProducerService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    // const user2 = await this.producerService.findOneByEmail(email);
    console.log(user);
    // console.log(user2);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
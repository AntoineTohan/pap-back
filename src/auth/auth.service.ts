import { Injectable } from '@nestjs/common';
import { DeliverersService } from '../deliverer/deliverers.service';
import { ProducerService } from './../producer/producer.service';
import { AuthenticationDto } from './dto/creat-auth.dto';

@Injectable()
export class AuthService {
  constructor(private deliverersService: DeliverersService, private producerService: ProducerService) {}

  async validateUser(authenticationDto: AuthenticationDto): Promise<any> {
    const user: any = await this.deliverersService.findOneByEmail(authenticationDto.email) ? await this.deliverersService.findOneByEmail(authenticationDto.email) : await this.producerService.findOneByEmail(authenticationDto.email);
    if (user && user.password === authenticationDto.password) {
      const type = user.companyName ? 'Producer' : 'User'
      return {... user._doc, type: type };
    }
    return { result: 'error', message: 'Can\'t find the user in the database need to create an account or verify credentials' };
  }
}
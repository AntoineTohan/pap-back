import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { DeliverersService } from "../deliverer/deliverers.service";
import { ProducerService } from "./../producer/producer.service";

@Injectable()
export class AuthService {
  constructor(
    private deliverersService: DeliverersService,
    private producerService: ProducerService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: any = (await this.deliverersService.findOneByEmail(email))
      ? await this.deliverersService.findOneByEmail(email)
      : await this.producerService.findOneByEmail(email);
    if (user && user.password === pass) {
      const type = user.companyName ? 1 : 0;
      return { ...user._doc, type: type };
    }
    throw new HttpException(
      "Can't find the user in the database need to create an account or verify credentials",
      HttpStatus.FORBIDDEN
    );
  }

  async login(user: any) {
    const userObj = await this.validateUser(user.username, user.password);
    const payload = { email: user.email, sub: user.userId };
    return {
      ...userObj,
      access_token: this.jwtService.sign(payload),
    };
  }
}

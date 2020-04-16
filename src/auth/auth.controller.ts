import { Controller, Post, Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticationDto } from './dto/creat-auth.dto';

@Controller('login')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthService) {}

  @Post()
  async login(@Body() authenticationDto: AuthenticationDto) {
    return await this.authenticationService.validateUser(authenticationDto);
  }
}

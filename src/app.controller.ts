import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthenticationDto } from './auth/dto/creat-auth.dto';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() authenticationDto: AuthenticationDto) {
    return this.authService.login(authenticationDto);
  }
}
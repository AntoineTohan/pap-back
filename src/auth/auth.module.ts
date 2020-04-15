import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersModule } from '../user/users.module';
import { ProducerModule } from './../producer/producer.module';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, ProducerModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}

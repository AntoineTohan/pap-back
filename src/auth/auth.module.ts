import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../user/users.module';
import { ProducerModule } from './../producer/producer.module';
import { AuthenticationController } from './auth.controller';

@Module({
  imports: [UsersModule, ProducerModule],
  controllers: [AuthenticationController],
  providers: [AuthService],
})
export class AuthModule {}

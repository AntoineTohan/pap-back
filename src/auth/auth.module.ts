import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DeliverersModule } from '../deliverer/deliverers.module';
import { ProducerModule } from './../producer/producer.module';
import { AuthenticationController } from './auth.controller';

@Module({
  imports: [DeliverersModule, ProducerModule],
  controllers: [AuthenticationController],
  providers: [AuthService],
})
export class AuthModule {}

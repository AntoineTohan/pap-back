import { UsersModule } from './user/users.module';
import { ProducerModule } from './producer/producer.module';
import { DeliveryModule } from './delivery/delivery.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pap-back'),
    UsersModule,
    ProducerModule,
    DeliveryModule,
    AuthModule,
  ],
})
export class AppModule {}

import { UsersModule } from './user/users.module';
import { ProducerModule } from './producer/producer.module';
import { DeliveryModule } from './delivery/delivery.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pap-back'),
    UsersModule,
    ProducerModule,
    DeliveryModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

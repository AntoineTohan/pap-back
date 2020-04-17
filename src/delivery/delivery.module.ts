import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliverySchema } from './schemas/delivery.schema';
import { ProducerModule } from './../producer/producer.module';
import { DeliverersModule } from '../deliverer/deliverers.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Delivery', schema: DeliverySchema }]), DeliverersModule, ProducerModule],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}

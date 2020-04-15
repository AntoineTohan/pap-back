import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliverySchema } from './schemas/delivery.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Delivery', schema: DeliverySchema }])],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}

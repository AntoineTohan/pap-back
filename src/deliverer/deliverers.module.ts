import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliverersController } from './deliverers.controller';
import { DeliverersService } from './deliverers.service';
import { DelivererSchema } from './schemas/deliverer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Deliverer', schema: DelivererSchema }])],
  controllers: [DeliverersController],
  providers: [DeliverersService],
  exports: [DeliverersService],
  
})
export class DeliverersModule {}

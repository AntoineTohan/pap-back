import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { DeliveryService } from './delivery.service';
import { Delivery } from './interfaces/delivery.interface';

@Controller('deliveries')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  async create(@Body() createDeliveryDto: CreateDeliveryDto) {
    await this.deliveryService.create(createDeliveryDto);
  }

  @Get()
  async findAll(): Promise<Delivery[]> {
    return this.deliveryService.findAll();
  }
}

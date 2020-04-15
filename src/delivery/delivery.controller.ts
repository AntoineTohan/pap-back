import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Delivery> {
    return this.deliveryService.findOne(id);
  }
}

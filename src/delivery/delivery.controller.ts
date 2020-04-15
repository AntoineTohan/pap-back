import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
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

  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.deliveryService.deleteOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    return this.deliveryService.updateOne(id, createDeliveryDto);
  }
}

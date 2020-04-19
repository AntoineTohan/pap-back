import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { DeliveryService } from './delivery.service';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { Delivery } from './interfaces/delivery.interface';

@Controller('deliveries')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createDeliveryDto: CreateDeliveryDto) {
    await this.deliveryService.create(createDeliveryDto);
    return { result: 'ok', message: 'Delivery inserted' }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Delivery[]> {
    return this.deliveryService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Delivery> {
    return this.deliveryService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.deliveryService.deleteOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    return this.deliveryService.updateOne(id, createDeliveryDto);
  }
}

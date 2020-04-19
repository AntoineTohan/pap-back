import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { CreateDelivererDto } from './dto/create-deliverer.dto';
import { DeliverersService } from './deliverers.service';
import { Deliverer } from './interfaces/deliverer.interface';

@Controller('deliverers')
export class DeliverersController {
  constructor(private readonly deliverersService: DeliverersService) {}

  @Post()
  async create(@Body() createDelivererDto: CreateDelivererDto) {
    return this.deliverersService.create(createDelivererDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Deliverer[]> {
      return this.deliverersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Deliverer> {
    return this.deliverersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.deliverersService.deleteOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() createDelivererDto: CreateDelivererDto): Promise<Deliverer> {
    return this.deliverersService.updateOne(id, createDelivererDto);
  }
}

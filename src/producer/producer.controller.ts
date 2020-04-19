import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { CreateProducerDto } from './dto/create-producer.dto';
import { ProducerService } from './producer.service';
import { Producer } from './interfaces/producer.interface';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';

@Controller('producers')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createProducerDto: CreateProducerDto) {
    return await this.producerService.create(createProducerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.producerService.deleteOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() createProducerDto: CreateProducerDto): Promise<Producer> {
    return this.producerService.updateOne(id, createProducerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<Producer[]> {
    return this.producerService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Producer> {
    return this.producerService.findOne(id);
  }
}

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateProducerDto } from './dto/create-producer.dto';
import { ProducerService } from './producer.service';
import { Producer } from './interfaces/producer.interface';

@Controller('producers')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  async create(@Body() createProducerDto: CreateProducerDto) {
    return await this.producerService.create(createProducerDto);
  }

  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.producerService.deleteOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() createProducerDto: CreateProducerDto): Promise<Producer> {
    return this.producerService.updateOne(id, createProducerDto);
  }

  @Get()
  async findAll(): Promise<Producer[]> {
    return this.producerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Producer> {
    return this.producerService.findOne(id);
  }
}

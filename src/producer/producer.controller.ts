import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateProducerDto } from './dto/create-producer.dto';
import { ProducerService } from './producer.service';
import { Producer } from './interfaces/producer.interface';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  async create(@Body() createProducerDto: CreateProducerDto) {
    await this.producerService.create(createProducerDto);
  }

  @Get()
  async findAll(): Promise<Producer[]> {
    return this.producerService.findAll();
  }
}
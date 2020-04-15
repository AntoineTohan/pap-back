import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Delivery } from './interfaces/delivery.interface';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Injectable()
export class DeliveryService {
  constructor(@InjectModel('Delivery') private deliveryModel: Model<Delivery>) {}

  async create(createProducerDto: CreateDeliveryDto): Promise<Delivery> {
    const createdProducer = new this.deliveryModel(createProducerDto);
    return createdProducer.save();
  }

  async findAll(): Promise<Delivery[]> {
    return this.deliveryModel.find().exec();
  }
}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Delivery } from './interfaces/delivery.interface';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Injectable()
export class DeliveryService {
  constructor(@InjectModel('Delivery') private deliveryModel: Model<Delivery>) {}

  async create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    const createdProducer = new this.deliveryModel(createDeliveryDto);
    return createdProducer.save();
  }

  async findAll(): Promise<Delivery[]> {
    return this.deliveryModel.find().exec();
  }

  async findOne(id: string): Promise<Delivery> {
    return this.deliveryModel.findById(id).exec();
  }

  async updateOne(id: string, createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    return this.deliveryModel.updateOne({_id: id}, createDeliveryDto).exec();
  }

  async deleteOne(id: string) {
    return this.deliveryModel.deleteOne({_id: id});
  }
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Producer } from './interfaces/producer.interface';
import { CreateProducerDto } from './dto/create-producer.dto';

@Injectable()
export class ProducerService {
  constructor(@InjectModel('Producer') private producerModel: Model<Producer>) {}

  async create(createProducerDto: CreateProducerDto): Promise<{result: string, message: string}> {
    const createdProducer = new this.producerModel(createProducerDto);
    const alreadyExist = await this.producerModel.findOne({email: createProducerDto.email}).exec();
    if(alreadyExist) {
      throw new HttpException('Already exist in database.', HttpStatus.FORBIDDEN);
    }
    createdProducer.save();
    return { result: 'ok', message: 'Producer inserted' }
  }

  async findAll(): Promise<Producer[]> {
    return this.producerModel.find().exec();
  }

  async updateOne(id: string, createProducerDto: CreateProducerDto): Promise<Producer> {
    return this.producerModel.updateOne({_id: id}, createProducerDto).exec();
  }

  async deleteOne(id: string) {
    return this.producerModel.deleteOne({_id: id});
  }

  async findOne(id: string): Promise<Producer> {
    return this.producerModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<Producer> {
    return this.producerModel.findOne({email: email}).exec();
  }
}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Deliverer } from './interfaces/deliverer.interface';
import { CreateDelivererDto } from './dto/create-deliverer.dto';

@Injectable()
export class DeliverersService {
  constructor(@InjectModel('Deliverer') private delivererModel: Model<Deliverer>) {}

  async create(createDelivererDto: CreateDelivererDto): Promise<{result: string, message: string}> {
    const createdDeliverer = new this.delivererModel(createDelivererDto);
    const alreadyExist = await this.delivererModel.findOne({email: createDelivererDto.email}).exec();
    if(alreadyExist) {
      return { result: 'error', message: 'Already exist in database.' }
    }
    createdDeliverer.save();
    return { result: 'ok', message: 'Deliverers inserted' }
  }

  async findAll(): Promise<Deliverer[]> {
    return this.delivererModel.find().exec();
  }

  async findOne(id: string): Promise<Deliverer> {
    return this.delivererModel.findById(id).exec();
  }

  async deleteOne(id: string) {
    return this.delivererModel.deleteOne({_id: id});
  }

  async updateOne(id: string, createDelivererDto: CreateDelivererDto): Promise<Deliverer> {
    return this.delivererModel.updateOne({_id: id}, createDelivererDto).exec();
  }
  
  async findOneByEmail(email: string): Promise<Deliverer> {
    return this.delivererModel.findOne({email: email}).exec();
  }
}

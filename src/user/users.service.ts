import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUsersDto: CreateUserDto): Promise<{result: string, message: string}> {
    const createdUser = new this.userModel(createUsersDto);
    const alreadyExist = await this.userModel.findOne({email: createUsersDto.email}).exec();
    if(alreadyExist) {
      return { result: 'error', message: 'Already exist in database.' }
    }
    createdUser.save();
    return { result: 'ok', message: 'Producer inserted' }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async deleteOne(id: string) {
    return this.userModel.deleteOne({_id: id});
  }

  async updateOne(id: string, createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.updateOne({_id: id}, createUserDto).exec();
  }
  
  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({email: email}).exec();
  }
}

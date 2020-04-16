import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
      return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  async removeOne(@Param('id') id: string) {
    return this.usersService.deleteOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.updateOne(id, createUserDto);
  }
}

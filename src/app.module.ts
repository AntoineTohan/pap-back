import { UsersModule } from './user/users.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/pap-back'),
    UsersModule,
  ],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProducerController } from "./producer.controller";
import { ProducerService } from "./producer.service";
import { ProducerSchema } from "./schemas/producer.schema"

@Module({
  imports: [MongooseModule.forFeature([{ name: "Producer", schema: ProducerSchema }])],
  controllers: [ProducerController],
  providers: [ProducerService]
})
export class ProducerModule {}
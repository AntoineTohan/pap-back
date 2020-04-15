import * as mongoose from 'mongoose';

export const DeliverySchema = new mongoose.Schema({
  idDelivery: Number,
  address: String,
  weight: String,
  status: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

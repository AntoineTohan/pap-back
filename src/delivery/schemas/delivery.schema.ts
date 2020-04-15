import * as mongoose from 'mongoose';

export const DeliverySchema = new mongoose.Schema({
  deliveryAddress: String,
  collectionAddress: String,
  weight: String,
  status: String,
  createdAt: String,
  updatedAt: String,
});

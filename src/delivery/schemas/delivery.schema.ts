import * as mongoose from 'mongoose';

export const DeliverySchema = new mongoose.Schema({
  deliveryAddress: String,
  collectionAddress: String,
  weight: String,
  createdAt: String,
  updatedAt: String,
  deliveryName: String,
  producerName: String,
  clientPhoneNumber: String,
  producerPhoneNumber: String,
  isDelivered: { type: Boolean, default: false },
  isPending: { type: Boolean, default: true },
});

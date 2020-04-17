import * as mongoose from 'mongoose';

export const DeliverySchema = new mongoose.Schema({
  collectionAddress: String,
  weight: String,
  createdAt: String,
  updatedAt: String,
  deliveryAddress: String,
  clientPhoneNumber: String,
  producer: Object,
  deliverer: Object,
  isDelivered: { type: Boolean, default: false },
  isPending: { type: Boolean, default: true },
});

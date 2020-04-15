import { Document } from 'mongoose';

export interface Delivery extends Document {
  readonly deliveryAddress: string;
  readonly collectionAddress: string;
  readonly weight: string;
  readonly status: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deliveryName: string,
  readonly producerName: string,
  readonly clientPhoneNumber: string,
  readonly producerPhoneNumber: string,
  readonly isDelivered: Boolean,
  readonly isPending: Boolean,
}

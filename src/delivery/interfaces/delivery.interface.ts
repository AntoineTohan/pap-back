import { Document } from 'mongoose';

export interface Delivery extends Document {
  readonly deliveryAddress: string;
  readonly collectionAddressAddress: string;
  readonly weight: string;
  readonly status: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

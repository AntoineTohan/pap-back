import { Document } from 'mongoose';

export interface Delivery extends Document {
  readonly idDelivery: number;
  readonly address: string;
  readonly weight: string;
  readonly status: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

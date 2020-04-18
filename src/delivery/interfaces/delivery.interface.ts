import { Document } from 'mongoose';
import { Deliverer } from './../../deliverer/interfaces/deliverer.interface';
import { Producer } from './../../producer/interfaces/producer.interface';

export interface Delivery extends Document {
  readonly collectionAddress: string;
  readonly weight: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly deliveryAddress: string;
  readonly clientPhoneNumber: string;
  readonly clientName: string;
  readonly producer: Producer;
  readonly deliverer: Deliverer;
  readonly isDelivered: { type: boolean, default: false };
  readonly isPending: { type: boolean, default: true };
}

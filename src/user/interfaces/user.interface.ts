import { Delivery } from './../../delivery/interfaces/delivery.interface';
import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly adress: string;
  readonly city: string;
  readonly deliveryArea: number;
  readonly email: string;
  readonly password: string;
}

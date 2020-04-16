import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly phoneNumber: string;
  readonly address: string;
  readonly city: string;
  readonly deliveryArea: number;
  readonly email: string;
  readonly password: string;
}

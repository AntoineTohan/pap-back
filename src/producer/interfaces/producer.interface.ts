import { Document } from 'mongoose';

export interface Producer extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly address: string;
  readonly companyName: string;
  readonly city: string;
  readonly email: string;
  readonly password: string;
}

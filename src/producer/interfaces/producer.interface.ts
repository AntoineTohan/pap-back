import { Document } from 'mongoose';

export interface Producer extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly address: string;
  readonly email: string;
  readonly password: string;
}

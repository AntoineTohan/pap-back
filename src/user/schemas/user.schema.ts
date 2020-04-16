import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  address: String,
  city: String,
  deliveryArea: Number,
  password: String,
});

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  adress: String,
  city: String,
  deliveryArea: Number,
  password: String,
});
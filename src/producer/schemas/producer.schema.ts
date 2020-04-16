import * as mongoose from 'mongoose';

export const ProducerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address: String,
  companyName: String,
  city: String,
  email: String,
  password: String,
});

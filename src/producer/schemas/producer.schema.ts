import * as mongoose from 'mongoose';

export const ProducerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  password: String,
});
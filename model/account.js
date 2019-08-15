import mongoose from 'mongoose';

const { Schema } = mongoose;
const accountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  is_admin: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String
  },
  password: {
    type: String
  },
  buy_time: {
    type: Number,
    default: 0
  },
  total_price: {
    type: Number,
    default: 0
  },
  style: {
    type: String,
    required: true,
    default: 'low'
  }
},
{ timestamps: true });

export default mongoose.model('user', accountSchema);

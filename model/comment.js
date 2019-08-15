import mongoose from 'mongoose';

const { Schema } = mongoose;
const commentSchema = new Schema({
  usernameID: {
    type: String,
    required: true,
    ref: 'accounts'
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: new Date()
  },
  product: {
    type: String,
    required: true,
    ref: 'items'
  }
},
{ timestamps: true });

const commentModel = mongoose.model('comments', commentSchema);

export default commentModel;

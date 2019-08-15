const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    brand: {
        type: Array,
        required: true
    },
    color: {
        type: Array,
        required: true
    },
    buytimes: {
        type: Number,
        required: true,
        default: 0
    },
    size: {
        type: Object,
        required: true
    },
    added_by: {
        type: String,
        required: true,
        ref: 'accounts'
    }
},
{ timestamps: true });

const itemModel = mongoose.model('items', itemSchema);

export default itemModel;

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is a required field'],
    min: [4, 'min length is 4'],
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

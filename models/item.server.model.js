const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  estvalue: Number,

});
const Item = mongoose.model('Item', itemSchema);

Item.schema.path('estvalue').
    validate((value) => value > 0, 'Value must be greater than 0');


module.exports = Item;
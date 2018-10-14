const mongoose = require('mongoose');
// const updateOn = require('./plugins/updatedOn');
const valueIndicator = require('./plugins/valueIndicator');
const timestamps = require('mongoose-times');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  estvalue: Number,

});
itemSchema.plugin(timestamps, {created: 'createdOn', lastUpdated: 'updatedOn'});
// itemSchema.plugin(updateOn);
itemSchema.plugin(valueIndicator);
const Item = mongoose.model('Item', itemSchema);

Item.schema.path('estvalue').
    validate((value) => value > 0, 'Value must be greater than 0');

module.exports = Item;
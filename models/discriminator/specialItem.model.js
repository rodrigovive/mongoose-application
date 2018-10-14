const mongoose = require('mongoose');
const Item = require('../item.server.model');

const specialItemSchema = mongoose.Schema({
  hazardCode: String,
  requiresInsurance: {
    type: Boolean,
    default: true,
  },
});

const SpecialItem = Item.discriminator('SpecialItem', specialItemSchema);

module.exports = SpecialItem;
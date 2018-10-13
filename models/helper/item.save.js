const mongoose = require('mongoose');
const Item = require('../item.server.model');

const itemSaveHelper = (req, res) => {
  let newItem = {};
  if (req.body.estvalue >= 200) {
    const insuredItemSchema = Item.schema.add({
      requiresInsurance: {
        type: Boolean,
        default: true,
      },
    });
    const InsuredItem = mongoose.model('Item', insuredItemSchema);
    newItem = new InsuredItem(req.body);
  }
  if (req.body.estvalue <= 200) {
    newItem = new InsuredItem(req.body);
  }
  if (newItem != {}) {
    newItem.save((err, obj) => {
      if (err) return console.log(err);
      res.status(200).json(obj);
    });
  }
};

module.exports = itemSaveHelper;
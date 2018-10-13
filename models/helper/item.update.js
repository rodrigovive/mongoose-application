const Item = require('../item.server.model');
const mongoose = require('mongoose');

const itemUpdateHelper = (req, res) => {
  let updateItem = {};

  const callback = (err) => {
    if (err) return console.log(err,'xd');
    res.sendStatus(200, updateItem);
  };

  if (req.body.estvalue >= 200) {
    const insuredItemSchema = Item.schema.add({
      requiresInsurance: {
        type: Boolean,
        default: true,
      },
    });
    const InsuredItem = mongoose.model('Item', insuredItemSchema);
    console.log(req.body)

    if (!req.body.hasOwnProperty('requiresInsurance')) {
      updateItem = new InsuredItem(req.body);
      updateItem.requiresInsurance = true;

      Item.findOneAndUpdate({_id: req.params.id}, updateItem, callback);
    } else {
      updateItem = req.body;
      updateItem.requiresInsurance = true;
      InsuredItem.findOneAndUpdate({_id: req.params.id}, updateItem, callback);
    }

  }
  if (req.body.estvalue < 200) {
    console.log(req.body)

    if (req.body.hasOwnProperty('requiresInsurance')) {
      const insuredItemSchema = Item.schema.add({
        requiresInsurance: {
          type: Boolean,
          default: false,
        },
      });

      const InsuredItem = mongoose.model('Item', insuredItemSchema);
      updateItem = req.body;
      updateItem.requiresInsurance = false;

      InsuredItem.findOneAndUpdate({_id: req.params.id}, updateItem, callback);
    }
    if (!req.body.hasOwnProperty('requiresInsurance')) {
      updateItem = req.body;
      Item.findOneAndUpdate({_id: req.body.id}, updateItem, callback);
    }
  }

};

module.exports = itemUpdateHelper;
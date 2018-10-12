const Item = require('../../models/item.server.model');

const getItem = (req, res) => {

};

const listItem = (req, res) => {
  Item.find({}, (err, items) => {
    res.json(items);
  });
};

const createItem = (req, res) => {
  const obj = new Item(req.body);
  obj.save((err, obj) => {
    if (err) return res.json(err);
    res.status(200).json(obj);
  });
};

module.exports = {
  list: listItem,
  getOne: getItem,
  createOne: createItem,
};
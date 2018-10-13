const Item = require('../../models/item.server.model');
const itemSaveHelper = require('../../models/helper/item.save');
const itemUpdateHelper = require('../../models/helper/item.update');
const getItem = (req, res) => {

};

const listItem = (req, res) => {
  Item.find({}, (err, items) => {
    res.json(items);
  });
};

const createItem = (req, res) => {
  // const obj = new Item(req.body);
  // obj.save((err, obj) => {
  //   if (err) return res.json(err);
  //   res.status(200).json(obj);
  // });
  itemSaveHelper(req, res);
};

const editItem = (req, res) => {
  req.body = JSON.parse(JSON.stringify(req.body))

  itemUpdateHelper(req, res);
};

module.exports = {
  list: listItem,
  getOne: getItem,
  createOne: createItem,
  editOne: editItem,
};
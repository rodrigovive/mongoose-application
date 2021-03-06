const Item = require('../../models/item.server.model');
const itemSaveHelper = require('../../models/helper/item.save');
const itemUpdateHelper = require('../../models/helper/item.update');
const SpecialItem = require('../../models/discriminator/specialItem.model');
const getItem = (req, res) => {

};

const listItem = async (req, res) => {
  try {
    let items = await Item.find({}).exec();
    res.json(items);
  } catch (e) {
    throw new Error(e);
  }
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
  req.body = JSON.parse(JSON.stringify(req.body));

  itemUpdateHelper(req, res);
};

const createItemSpecial = (req, res) => {
  const obj = new SpecialItem(req.body);
  obj.save((err, obj) => {
    if (err) return console.log(err);
    res.status(200).json(obj);
  });
};
module.exports = {
  createOneSpecial: createItemSpecial,
  list: listItem,
  getOne: getItem,
  createOne: createItem,
  editOne: editItem,
};
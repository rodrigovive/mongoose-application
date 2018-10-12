const Standup = require('../../models/standup.server.model');

const getListStandup = (req, res) => {
  Standup.find({},(err,standups) => {
    res.json(standups);
  });
};

const getStandup = (req, res) => {

};
module.exports = {
  list: getListStandup,
  getOne: getStandup,

};
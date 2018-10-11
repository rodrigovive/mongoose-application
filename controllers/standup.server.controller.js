const Standup = require('../models/standup.server.model');

exports.create = (req, res) => {
  const {memberName, project, workYesterday, workToday, impediment} = req.body;

  const entry = new Standup({
    memberName,
    project,
    workYesterday,
    workToday,
    impediment,
  });

  entry.save();

  res.redirect(301, '/');
};

exports.list = (req, res) => {
  const query = Standup.find();
  query.sort({createdOn: 'desc'}).limit(12).exec((err, results) => {
    console.log(results);
    res.render('index', {title: 'Standup - List', notes: results});
  });

};
exports.filterByMember = (req, res) => {
  const query = Standup.find();
  const {memberName} = req.body;
  query.sort({createdOn: 'desc'});

  if (memberName.length > 0) {
    query.where({memberName});
  }
  query.exec((err, results) => {
    res.render('index', {title: 'Standup - List', notes: results});
  });

};
exports.getNote = (req, res) => {
  res.render('newnote', {title: 'Standup - new Note'});
};
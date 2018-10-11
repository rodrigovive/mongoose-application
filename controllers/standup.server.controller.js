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

exports.getNote = (req, res) => {
  res.render('newnote', {title: 'Standup - new Note'});
};
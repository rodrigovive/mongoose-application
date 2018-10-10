const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  impediment: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});
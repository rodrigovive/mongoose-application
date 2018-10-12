const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberNameValidator = [
  (val) => val.length > 0 && val.toLocaleLowerCase() != 'none',
  'Select a valid member name.',
];

const requiredStringValidator = [
  (val) => val.trim().length > 0,
  '{PATH} cannot be empty',
];

const standupSchema = new Schema({
  memberName: {
    type: String,
    required: true,
    validate: memberNameValidator
  },
  project: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workYesterday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workToday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  impediment: {
    type: String,
    required: true,
    default: 'none',
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Standup', standupSchema);
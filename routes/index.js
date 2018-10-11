var express = require('express');
var router = express.Router();
const standupCtrl = require('../controllers/standup.server.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/newnote', (req, res, next) => {
  return standupCtrl.getNote(req, res);
});

router.post('/newnote', (req, res, next) => {
  return standupCtrl.create(req, res);
});

module.exports = router;

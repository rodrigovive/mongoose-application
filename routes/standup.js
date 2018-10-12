const express = require('express');
const router = express.Router();
const standupController = require('../controllers/api/standup.api.controller');

router.get('/', standupController.list);
router.get('/:id', standupController.getOne);
router.post('/', (req, res) => {

});

router.put('/', (req, res) => {

});

router.patch('/', (req, res) => {

});

module.exports = router;
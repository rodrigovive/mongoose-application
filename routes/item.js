const express = require('express');
const itemApiController = require('../controllers/api/item.api.controller');
const router = express.Router();

router.get('/', itemApiController.list);

router.put('/', itemApiController.editOne);

router.post('/', itemApiController.createOne);

router.post('/specialitem', itemApiController.createOneSpecial);

module.exports = router;
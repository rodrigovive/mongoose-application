const express = require('express');
const itemApiController = require('../controllers/api/item.api.controller');
const router = express.Router();

router.get('/', itemApiController.list);

router.put('/', itemApiController.editOne);

router.post('/', itemApiController.createOne);

module.exports = router;
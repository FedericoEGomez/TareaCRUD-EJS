const express = require('express');
const router = express.Router();
const productController = require('../controller/controllerProduct')
const controller = new productController


/* home page. */
router.get('/', controller.listItems);
router.post('/add', controller.addItems);

module.exports = router;

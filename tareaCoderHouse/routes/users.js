var express = require('express');
var router = express.Router();
const controllerChatBox = require("../controller/controllerChatBox")
const controller = new controllerChatBox

/* GET users listing. */
router.get('/', controller.listMessaje);

module.exports = router;

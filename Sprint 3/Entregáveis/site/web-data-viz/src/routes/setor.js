var express = require("express");
var router = express.Router();
var setorController = require("../controllers/setorController");

router.post("/buscar", setorController.buscarSetores);

module.exports = router;

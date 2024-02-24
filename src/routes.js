const express = require("express");
const router = express.Router();

const CarroController = require("./controllers/carroController");

router.get("/carros", CarroController.buscarTodos);

module.exports = router;

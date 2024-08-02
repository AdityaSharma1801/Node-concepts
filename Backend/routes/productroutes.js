const productcontroller = require("../controllers/productcontroller")

const express=require("express");

const router = express.Router();

router.get('/',productcontroller);

router.get("/name/:name",productcontroller);

module.exports = router;


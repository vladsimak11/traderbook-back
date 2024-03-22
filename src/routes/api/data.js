const express = require("express");
const router = express.Router();

const {
  listData,
  addValues,
} = require("../../controllers/data");

router.get("/", listData);

router.post("/", addValues);


module.exports = router;

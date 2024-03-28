const express = require("express");
const router = express.Router();

const {
  listData,
  addValues,
  removeValue,
} = require("../../controllers/data");

router.get("/", listData);

router.post("/", addValues);

router.delete('/:valueId', removeValue);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  listData,
  addValues,
  removeValue,
  getDataById,
} = require("../../controllers/data");

router.get("/", listData);

router.post("/", addValues);

router.delete('/:valueId', removeValue);

router.get('/:valueId', getDataById);

module.exports = router;

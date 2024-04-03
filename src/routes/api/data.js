const express = require("express");
const router = express.Router();

const { isValidId, validateBody } = require("../../middlewares");
const schemas = require("../../validator/data");

const {
  listData,
  addValues,
  removeValue,
} = require("../../controllers/data");

router.get("/", listData);

router.post("/", validateBody(schemas.addSchema), addValues);

router.delete('/:valueId', isValidId, removeValue);

module.exports = router;

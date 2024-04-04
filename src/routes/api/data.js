const express = require("express");
const router = express.Router();

const { isValidId, validateBody, authenticate} = require("../../middlewares");
const schemas = require("../../validator/data");

const {
  listData,
  addValues,
  removeValue,
} = require("../../controllers/data");

router.get("/", authenticate, listData);

router.post("/", authenticate, validateBody(schemas.addSchema), addValues);

router.delete('/:valueId', authenticate, isValidId, removeValue);

module.exports = router;

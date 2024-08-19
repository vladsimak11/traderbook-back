const express = require("express");
const router = express.Router();

const {
    getTokens,
  } = require("../../controllers/tokens");

  router.get("/", getTokens);

  module.exports = router;
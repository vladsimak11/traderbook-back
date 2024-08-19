const axios = require('axios');
require("dotenv").config();

const { GET_TOKENS } = process.env;

const getTokens = async (req, res, next) => {
    try {
        const response = await axios.get(GET_TOKENS);
        res.json(response.data);
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    getTokens,
  };
const { Data } = require("../models/data");

const { HttpError } = require("../helpers");

const listData = async (req, res, next) => {
  try {
    const result = await Data.find(req);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addValues = async (req, res, next) => {
  try {
    const result = await Data.create({ ...req.body });
    
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const removeValue = async (req, res, next) => {
  try {
    const { valueId } = req.params;
    const result = await Data.findByIdAndDelete(valueId);

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({
      message: "Coin deleted"
    });

  } catch (error) {
    next(error);
  }
}

module.exports = {
  listData,
  addValues,
  removeValue,
};
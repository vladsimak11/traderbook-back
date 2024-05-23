const { Data } = require("../models/data");

const { HttpError } = require("../helpers");

const listData = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    const result = await Data.find({owner}, "-updatedAt", {skip, limit}).sort({'createdAt': -1});
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addValues = async (req, res, next) => {
  try {
    const { _id: owner} = req.user;
    const result = await Data.create({...req.body, owner});

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
      id: valueId,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listData,
  addValues,
  removeValue,
};

const { Data } = require("../models/data");

const listData = async (req, res, next) => {
  try {
    const values = await Data.find(req);
    res.json({
      values,
    });
  } catch (error) {
    next(error);
  }
};

const addValues = async (req, res, next) => {
  try {
    const values = await Data.create({ ...req.body });

    res.status(201).json({
      data: {
        nameCoin: values.nameCoin,
        quantityCoins: values.quantityCoins,
        commission: values.commission,
        entryPoint: values.entryPoint,
        sum: values.sum,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listData,
  addValues,
};

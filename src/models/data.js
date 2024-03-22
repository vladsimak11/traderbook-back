const { Schema, model } = require("mongoose");

const {handleMongooseError} = require("../helpers");

const dataSchema = new Schema(
  {
    nameCoin: {
      type: String,
    },
    quantityCoins: {
      type: Number,
    },
    commission: {
      type: Number,
    },
    entryPoint: {
      type: Number,
    },
    sum: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

dataSchema.post("save", handleMongooseError);

const Data = model("statistics", dataSchema);

module.exports = {
  Data,
};

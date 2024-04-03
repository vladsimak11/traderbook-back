const { Schema, model } = require("mongoose");

const {handleMongooseError} = require("../helpers");

const dataSchema = new Schema(
  {
    // trader: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Trader',
    //   required: true
    // },

    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    commission: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true,
    },
    sum: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

dataSchema.post("save", handleMongooseError);

const Data = model("statistics", dataSchema);

module.exports = {
  Data,
};

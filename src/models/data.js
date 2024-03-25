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
      type: Number,
      required: true,
    },
    commission: {
      type: Number,
      required: true,
    },
    entry: {
      type: Number,
      required: true,
    },
    sum: {
      type: Number,
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

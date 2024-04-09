const {Schema, model} = require("mongoose");

const {handleMongooseError} = require("../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for user'],
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  token: String,
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
  verify: {
    type: Boolean,
    default: false,
  },
}, {versionKey: false, timestamps: true});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = {
  User,
}
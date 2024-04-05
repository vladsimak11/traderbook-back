const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { nanoid } = require("nanoid");

const { SECRET_KEY } = process.env;

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const verificationToken = nanoid();

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      verificationToken,
    });

    res.status(201).json({
      user: {
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw HttpError(401, "Email or password is wrong");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      throw HttpError(401, "Email or password is wrong");
    }

    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

    await User.findByIdAndUpdate(user._id, { token });
    res.json({
      token,
      user: {
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getCurrent = async(req, res, next) => {
    try {
      const {email, name} = req.user
  
      res.json({
        email,
        name
      });
    } catch (error) {
      next(error);
    }
  }
  

const logout = async(req, res, next) => {
    try {
      const {_id} = req.user;
      await User.findByIdAndUpdate(_id, {token: ""});
  
      res.status(204).json({ 
        message: "No content" 
      });
    } catch (error) {
      next(error);
    }
  };

module.exports = {
  register,
  login,
  getCurrent,
  logout,
};

const express = require("express");

const router = express.Router();

const { validateBody, authenticate } = require("../../middlewares");

const schemas = require("../../validator/users");

// const { register, login, getCurrent, logout, updateAvatar, verifyEmail, resendVerifyEmail } = require("../../controllers/auth");

const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");

router.post("/register", validateBody(schemas.registerSchema), register);

// router.get("/verify/:verificationToken", verifyEmail);

router.post("/login", validateBody(schemas.loginSchema), login);

// router.post("/verify", validateBody(schemas.emailSchema), resendVerifyEmail);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router;

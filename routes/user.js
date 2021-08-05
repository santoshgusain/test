const express = require("express");
const session = require('express-session');
const router  = express.Router();
const { validationResult } = require("express-validator");
const { userValidation, loginValidation } = require("../middleware/validation");
const {
  registerUser,
  userLogin,
} = require("../controllers/user");

// using session here
router.use(session({
  secret:'santosh',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


// register user
router.post("/", userValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  registerUser(req, res);
});

// user login
router.post("/login", loginValidation(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  userLogin(req, res);
});

// user logout
router.post("/logout", async (req, res) => {
  const status = await req.session.destroy();
  res.json({logout:true} );
});

// getting user session
router.post("/session", userValidation(), (req, res) => {
  res.json( req.session.user);
});

module.exports = router;

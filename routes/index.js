const express   = require("express");
const router    = express.Router();
const user      = require('./user');

// using routes
router.use("/user", user);

module.exports = router;
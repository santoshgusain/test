const { check } = require("express-validator");

// validation for user signup
exports.userValidation = () => {
  return [
    check("email")
      .notEmpty()
      .withMessage("Email is required"),
    check("password")
      .notEmpty()
      .withMessage("Password is required"),
    check("firstName")
      .notEmpty()
      .withMessage("First Name is required"),
    check("lastName")
      .notEmpty()
      .withMessage("Last Name is required"),
  ];
};

// validation for logout
exports.loginValidation = () => {
  return [
    check("email")
      .notEmpty()
      .withMessage("Email is required"),
    check("password")
      .notEmpty()
      .withMessage("Password is required"),
  ];
};

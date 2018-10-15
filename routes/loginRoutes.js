const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/register-student", async (req, res, next) => {
    if (
      req.body.email &&
      req.body.firstName &&
      req.body.lastName &&
      req.body.password &&
      req.body.passwordConf
    ) {
      if (req.body.password != req.body.passwordConf) {
        var err = new Error("Passwords do not match.");
        return next(err);
      }

      var userData = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
      };

      const user = await new User(userData).save();

      res.status(200).json({ user });

      next();
    } else {
        var err = new Error("Some required fields are empty.");
        return next(err);
    }
  });
};

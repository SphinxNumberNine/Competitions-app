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
        password: req.body.password
      };

      const user = await new User(userData).save();

      res.status(200).json({ user });

      next();
    } else {
      var err = new Error("Some required fields are empty.");
      return next(err);
    }
  });

  app.post("/api/login-student", async (req, res, next) => {
    if (req.body.email && req.body.password) {
      User.authenticate(req.body.email, req.body.password, function(err, user) {
        if (err || !user) {
          var err = new Error("Wrong email or password.");
          err.status = 401;
          return next(err);
        } else {
          req.session.userId = user._id;
          return res.status(200).json(req.session);
        }
      });
    }
  });

  app.get("/api/current_user", async (req, res, next) => {
    if (req.session && req.session.userId) {
      res.status(200).json({ user: req.session.userId });
    } else {
      res.status(400).json({ });
    }
  });
};

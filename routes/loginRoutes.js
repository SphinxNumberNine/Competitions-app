const mongoose = require('mongoose');
const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/register-student", async (req, res) => { 
    if (
      req.body.email &&
      req.body.firstName &&
      req.body.lastName &&
      req.body.password &&
      req.body.passwordConf
    ) {
        var userData = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            passwordConf: req.body.passwordConf
        }

        console.log(userData);

        User.create(userData, async (err, user) => {
            if(err) {
                console.log(err);
                return res.status(500).json({message: "Internal server error"})
            } else {
                return res.status(200).json({ user })
            }
        })
    }
  });
};

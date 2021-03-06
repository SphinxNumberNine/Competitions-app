const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

var userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre("save", function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

userSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email }).exec(function(err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      var error = new Error("User not found.");
      error.status = 401;
      return callback(err);
    }

    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
  });
};

var User = mongoose.model("users", userSchema);
module.exports = User;

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

var userSchema = new Schema({
    email:{
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
    },
    passwordConf: {
        type: String,
        required: true
    }
});

/* userSchema.pre('save', (next) => {
    var user = this;
    bcrypt.hash(user.password, bcrypt.genSalt(10), (err, hash) => {
        if(err) {
            return next(err);
        }

        user.password = hash;
    })

    bcrypt.hash(user.passwordConf, bcrypt.genSalt(10), (err, hash) => {
        if(err) {
            return next(err);
        }

        user.passwordConf = hash;
        next();
    })
}) */

mongoose.model('users', userSchema);

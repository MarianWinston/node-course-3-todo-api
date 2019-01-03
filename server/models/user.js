const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true,
        unique: true,      // no same email
        // email validation using a validator library
        validate: {
            validator: validator.isEmail, 
            message: '{VALUE} is not a value email'
        }
    },
    password: {
        type: String,
        required: true,
        minlenght: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens = user.tokens.concat([{access, token}]); // pushes access and token to array tokens

    return user.save().then(() => {
        return token;
    });
};  

// statics used to create model methods
UserSchema.statics.findByToken = function (token) {
    let User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        return Promise.reject();
    }

    return User.findOne({
        _id: decoded._id,
       
        'tokens.token': token,
        'tokens.access': 'auth'
    }); 
}

let User = mongoose.model('User', UserSchema);

module.exports = {User};
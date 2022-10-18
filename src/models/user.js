const mongoose = require("mongoose");
const {model} = require("mongoose");
const Schema = mongoose.Schema;



// установка схемы
const userScheme = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String, ref: 'Role'
    }]
});

module.exports = model('User', userScheme)
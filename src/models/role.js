const mongoose = require("mongoose");
const {model} = require("mongoose");
const Schema = mongoose.Schema;



// установка схемы
const Role = new Schema({
    value: {
        type: String,
        unique: true,
        default: 'USER'
    }
});

module.exports = model('Role', Role)
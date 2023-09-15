const mongoose = require("mongoose");
const paginate = require("../plagins/pagination.plagin")
const UserSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})
UserSchema.plugin(paginate);

module.exports = mongoose.model('Users', UserSchema);
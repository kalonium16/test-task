const mongoose = require("mongoose");
const mongoosePaginate  = require('mongoose-paginate-v2')
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
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Users', UserSchema);
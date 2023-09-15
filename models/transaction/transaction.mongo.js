const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");

const UserSchema = new Schema({
    admin: {
        type: Schema.Types.ObjectId,
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        required: true,
        default: null
    },
    affiliation: {
        type: Schema.Types.ObjectId,
        required: true,
        default: null
    },
    description: {
        type: String,
        required: true
    },
    current_entity: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        default: null
    },
    amount: {
        type: Number,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        required: true,
        default: Date.now
    },
    __v: {
        type: Number,
        required: true,
        default: 0
    },
    balance_type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Transaction', UserSchema);
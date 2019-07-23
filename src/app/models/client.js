const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

ClientSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('clients', ClientSchema);
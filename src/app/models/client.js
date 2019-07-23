const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: String,
    phone: String,
    city: String,
    email: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('clients', ClientSchema);
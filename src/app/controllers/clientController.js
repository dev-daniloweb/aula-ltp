const Client = require('../models/client');

module.exports = {
    async index(req, res) {
        const client = await Client.find();

        res.json(client);
    },

    async show(req, res) {

    },

    async store(req, res) {
        const { name, phone, city, email } = req.body;

        const client = await Client.create({
            name,
            phone,
            city,
            email
        });

        res.json(client);
    },

    async update(req, res) {
        await res.send('OK');
    },

    async delete(req, res) {
        await res.send('OK');
    },
};
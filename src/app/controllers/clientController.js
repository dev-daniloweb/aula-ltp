const Client = require('../models/client');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const client = await Client.paginate({}, { page, limit: 10 });

        res.json(client);
    },
    
    async store(req, res) {
        
        try {
            const { name, phone, city, email } = req.body;
            
            const client = await Client.create({
                name,
                phone,
                city,
                email
            });
            
            res.status(200).json(client);
        } catch (error) {
            res.status(400).json({ menssage: error.message });
        }        
    },
    
    async show(req, res) {
        try {
            const client = await Client.findById(req.params.id);

            res.status(200).json(client);
        } catch (error) {
            res.status(404).json({ message: "Client not found" });
        }        
    },

    async update(req, res) {
        const { name, phone, city, email } = req.body;

        const client = await Client.findByIdAndUpdate(req.params.id, {
            name,
            phone,
            city,
            email
        }, { new: true });

        res.json(client);
    },

    async delete(req, res) {
        await Client.findByIdAndRemove(req.params.id);

        res.json({ message: "Client successfully removed" });
    },
};
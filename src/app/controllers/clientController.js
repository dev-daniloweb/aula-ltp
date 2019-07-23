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
            res.status(400).json({ error: error.message });
        }        
    },
    
    async show(req, res) {
        try {
            const client = await Client.findById(req.params.id);

            if(client !== null){
                res.status(200).json(client);
            } else {
                res.status(404).json({ error: "Client not exist" });
            }
        } catch (error) {
            res.status(400).json({ error: "Invalid id" });
        }        
    },

    async update(req, res) {
        try {
            const { name, phone, city, email } = req.body;
    
            const client = await Client.findByIdAndUpdate(req.params.id, {
                name,
                phone,
                city,
                email
            }, { new: true });
    
            if(client !== null){
                res.json({ message: "Client successfully updated" });
            } else {
                res.status(404).json({ error: "Client not exist" });
            }

        } catch (error) {
            res.status(400).json({ error: "Invalid id" });
        }
    },

    async delete(req, res) {
        try{
            const client = await Client.findByIdAndRemove(req.params.id);
            if(client !== null){
                res.json({ message: "Client successfully removed" });
            } else {
                res.status(404).json({ error: "Client not exist" });
            }
        } catch(error) {
            res.status(400).json({ error: "Invalid id" });
        }
    },
};
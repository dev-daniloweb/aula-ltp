const routes = require('express').Router();

const clientController = require('./app/controllers/clientController');

// Rota raiz
routes.get('/', (req, res) => {
    res.json({
        name: 'API - Aula LTP',
        version: 'v1.0.0'
    });
});

// Rotas do cliente
routes.get('/api/client', clientController.index);
routes.post('/api/client', clientController.store);
routes.get('/api/client/:id', clientController.show);
routes.put('/api/client/:id', clientController.update);
routes.delete('/api/client/:id', clientController.delete);

module.exports =  routes;
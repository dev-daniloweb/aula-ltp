const routes = require('express').Router();

const clientController = require('./app/controllers/clientController');

// Rota raiz
routes.get('/', (req, res) => {
    return './test.html';
});

// Rotas do cliente
routes.get('/api/client', clientController.index);
routes.get('/api/client/id', clientController.show);
routes.post('/api/client', clientController.store);
routes.put('/api/client', clientController.update);
routes.delete('/api/client', clientController.delete);

module.exports =  routes;
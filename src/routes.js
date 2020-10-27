const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/tools/all', ProductController.index );
routes.get('/tools', ProductController.filter );
routes.get('/tools/:id', ProductController.show );
routes.post('/tools', ProductController.store );
routes.put('/tools/:id', ProductController.update );
routes.delete('/tools/:id', ProductController.destroy );




module.exports = routes;
const express = require('express');
const routes = express.Router();

const ToolController = require('./controllers/ToolController');

routes.get('/tools', ToolController.filter );
routes.post('/tools', ToolController.store );
routes.get('/tools/:id', ToolController.show );
routes.put('/tools/:id', ToolController.update );
routes.delete('/tools/:id', ToolController.destroy );
routes.get('/tools/all', ToolController.index );




module.exports = routes;
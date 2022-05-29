const express = require('express');
const routes = express.Router();

const detalhamento_controller = require('../controllers/recebimentos')



routes.get('/details', detalhamento_controller.detalhamento_views);
routes.get('/client/details', detalhamento_controller.detalhamento_views_user);




module.exports = routes;
const express = require('express');
const routes = express.Router();

const registration_controller = require('../controllers/registration_user')



routes.post('/form/', registration_controller.registration_form);
routes.get('/form/details/user', registration_controller.registration_views);



module.exports = routes;
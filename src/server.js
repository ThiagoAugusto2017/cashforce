const express = require('express');
require('./database');
require('dotenv').config()
const app = express();



const routes = require('./router/routes');
const user_roustes = require('./router/user')

app.use(express.json());
app.use(routes);
app.use(user_roustes);

app.listen(3333);
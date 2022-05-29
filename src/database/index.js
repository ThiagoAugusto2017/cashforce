const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const user = require('../models/user')
const order = require('../models/order')
const cnpj = require('../models/cnpj')
const provider = require('../models/provider')
const buyer = require('../models/buyer')
const orderportion = require('../models/orderportion')
const sponsor = require('../models/sponsor')
const offer = require('../models/offer')

const connection = new Sequelize(dbConfig);

buyer.init(connection);
cnpj.init(connection);
order.init(connection);
orderportion.init(connection);
provider.init(connection);
sponsor.init(connection);
offer.init(connection);
user.init(connection);


buyer.associate(connection.models);
cnpj.associate(connection.models);
order.associate(connection.models);
provider.associate(connection.models);
sponsor.associate(connection.models);
user.associate(connection.models);





module.exports = connection;
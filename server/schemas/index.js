const {typeDefs} = require('./typeDefs');
const {Items} = require('../models/items');
const {resolvers} = require('./resolvers');

module.exports = { typeDefs, resolvers };

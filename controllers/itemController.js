const handlerFactory = require('./handlerFactory');
const Item = require('../models/itemModel');

// USERS ROUTES HANDLER
exports.getAllItems = handlerFactory.getAll(Item);
exports.getItem = handlerFactory.getOne(Item);
exports.createItem = handlerFactory.createOne(Item);
exports.updateItem = handlerFactory.updateOne(Item);
exports.deleteItem = handlerFactory.deleteOne(Item);

const express = require('express');

const LinkController = require('./controllers/linkCcontroller');
const UserController =  require('./controllers/userController')

const routes = express.Router();

routes.get('/link/:userID', LinkController.index);
routes.get('/link/:userID/:linkID', LinkController.find);
routes.post('/link/:userID', LinkController.store);
routes.delete('/link/:linkID', LinkController.delete);
routes.patch('/link/:linkID', LinkController.update);


routes.get('/user', UserController.index); // apenas em desenvolvimento
routes.get('/user/:userID/', UserController.find);
routes.post('/user', UserController.store);

module.exports = routes;
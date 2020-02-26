const express = require('express');

const authMiddleware = require('./middleware/auth');

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const StateController = require('./controllers/StateController');
const HomeController = require('./controllers/HomeController');
const CategoryController = require('./controllers/CategoryController');

const routes = express.Router();

routes.post('/session', SessionController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/states', StateController.index);

routes.get('/categories', CategoryController.index);

routes.use(authMiddleware);

routes.get('/', HomeController.index);

routes.post('/categories', CategoryController.store);


module.exports = routes;
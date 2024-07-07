const userController = require('../controllers/userController');

module.exports = async function(fastify, options) {
  fastify.get('/users', userController.getAllUsers);
  fastify.get('/users/:id', userController.getUserById);
  fastify.post('/users', userController.createUser);
};
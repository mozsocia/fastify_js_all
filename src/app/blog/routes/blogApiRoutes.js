const postApiController = require('../controllers/api/postApiController');
const userApiController = require('../controllers/api/userApiController');


module.exports = async function(fastify, options) {
  fastify.get('/posts', postApiController.getAllPosts);
  fastify.get('/posts/:id', postApiController.getPostById);
  fastify.post('/posts', postApiController.createPost);

  fastify.get('/users', userApiController.getAllUsers);
  fastify.get('/users/:id', userApiController.getUserById);
  fastify.post('/users', userApiController.createUser);
};


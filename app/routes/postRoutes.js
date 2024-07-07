const postController = require('../controllers/postController');

module.exports = async function(fastify, options) {
  fastify.get('/posts', postController.getAllPosts);
  fastify.get('/posts/:id', postController.getPostById);
  fastify.post('/posts', postController.createPost);
};
// src/routes/blogRoutes.js
const blogController = require('../controllers/blogController');

async function routes(fastify, options) {
  fastify.get('/blogs', blogController.listBlogs);
  fastify.post('/blogs', blogController.createBlog);
  fastify.get('/blogs/:id', blogController.getBlog);
  fastify.put('/blogs/:id', blogController.updateBlog);
  fastify.delete('/blogs/:id', blogController.deleteBlog);
}

module.exports = routes;

// app/routeManager.js

const blogApiRoutes = require('./blog/routes/blogApiRoutes');


function registerApiRoutes(fastify, opts, done) {
  // Register blog routes
  fastify.register(blogApiRoutes, { prefix: '/api/blog' });
  // Add any additional route registrations here

  done();
}

function registerPageRoutes(fastify, opts, done) {
    // Register blog routes
    // fastify.register(blogRoutes, { prefix: '/page' });
  
  
    // Add any additional route registrations here
  
    done();
  }


module.exports = {registerApiRoutes , registerPageRoutes};
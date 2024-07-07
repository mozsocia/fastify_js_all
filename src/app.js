// src/app.js
const fastify = require('fastify')({ logger: true });
const path = require('path');
const nunjucks = require('nunjucks');

fastify.register(require('@fastify/view'), {
    engine: {
        nunjucks: nunjucks
    },
    root: path.join(__dirname, 'views'),
    options: {
        filename: path.join(__dirname, 'views')
    }
})




// Register routes
fastify.register(require('./routes/blogRoutes'));

// Example route using a Nunjucks template
fastify.get('/', async (request, reply) => {
    return reply.view('index.njk', { title: 'Nunjucks Example' })
})

module.exports = fastify;
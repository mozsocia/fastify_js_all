const fastify = require('fastify');
const { migrate } = require('drizzle-orm/better-sqlite3/migrator');
const db = require('./config/database');
const serverConfig = require('./config/server');
const {registerApiRoutes , registerPageRoutes} = require('./app/routeManager');

const app = fastify(serverConfig);

// Run migrations
// migrate(db, { migrationsFolder: './database/migrations' });


// Register all routes
app.register(registerApiRoutes);
app.register(registerPageRoutes);

// Welcome message
app.get('/', (request, reply) => {
  reply.send('Hello World!');
});

// Decorate Fastify instance with our db
app.decorate('db', db);

// Start the server
const start = async () => {
  try {
    await app.listen({ port: serverConfig.port });
    app.log.info(`server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
// server.js
const app = require('./src/app');
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await app.listen({ port: PORT });
    app.log.info(`Server listening on ${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
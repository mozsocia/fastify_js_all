module.exports = {
    schema: './models/schema.js',
    out: './database/migrations',
    dialect: 'sqlite',
    dbCredentials: {
      url: 'sqlite.db'
    }
  };
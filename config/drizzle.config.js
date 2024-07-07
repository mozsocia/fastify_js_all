module.exports = {
    schema:[ "./app/models/*", "./app/**/models/*" ],
    out: './database/migrations',
    dialect: 'sqlite',
    dbCredentials: {
      url: 'sqlite.db'
    }
  };
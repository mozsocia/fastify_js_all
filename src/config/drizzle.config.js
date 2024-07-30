module.exports = {
    schema:[ "./src/app/models/*", "./src/app/**/models/*" ],
    out: './src/database/migrations',
    dialect: 'sqlite',
    dbCredentials: {
      url: 'src/sqlite.db'
    }
  };
const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');
const blogModuleSchema = require('../app/blog/models/schema');

const sqlite = new Database('src/sqlite.db');
const db = drizzle(sqlite, { 
    schema: { ...blogModuleSchema }
 });

module.exports = db;
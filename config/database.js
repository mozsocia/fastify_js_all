const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');
const schema = require('../models/schema');

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite, { schema });

module.exports = db;
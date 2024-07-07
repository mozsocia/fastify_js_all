// src/models/blogModel.js
const { sqliteTable, text, integer } = require('drizzle-orm/sqlite-core');

const blogs = sqliteTable('blogs', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  author: text('author').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().defaultNow()
});

module.exports = blogs;
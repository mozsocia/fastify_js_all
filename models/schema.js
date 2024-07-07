
// schema.js
const { sqliteTable, text, integer } = require('drizzle-orm/sqlite-core');
const { relations } = require('drizzle-orm');

const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
});

const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content'),
  userId: integer('user_id').notNull(),
});

const postsRelations = relations(posts, ({ one }) => ({
  user: one(users, {
    fields: [posts.userId],
    references: [users.id],
  }),
}));

module.exports = { 
  users, 
  usersRelations, 
  posts, 
  postsRelations 
};


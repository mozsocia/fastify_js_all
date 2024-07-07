
// seeder.js
const { drizzle } = require('drizzle-orm/better-sqlite3');
const Database = require('better-sqlite3');
const { users, posts } = require('../../models/schema');
console.log('Seeding...');

async function seed() {
  // Initialize SQLite database
  const sqlite = new Database('sqlite.db');
  const db = drizzle(sqlite);

  // Static user data
  const userData = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
  ];

  // Static post data
  const postData = [
    { title: 'First Post', content: 'This is the first post content.', userId: 1 },
    { title: 'Hello World', content: 'Welcome to my blog!', userId: 1 },
    { title: 'Drizzle ORM', content: 'Drizzle ORM is awesome!', userId: 1 },
    { title: 'Web Development', content: 'Web development is fun.', userId: 2 },
    { title: 'JavaScript', content: 'JavaScript is a versatile language.', userId: 2 },
    { title: 'Database Design', content: 'Proper database design is crucial.', userId: 2 },
    { title: 'Open Source', content: 'Contributing to open source is rewarding.', userId: 3 },
    { title: 'Learning to Code', content: 'Everyone should learn to code.', userId: 3 },
    { title: 'Tech Trends', content: 'Stay updated with the latest tech trends.', userId: 3 },
  ];

  try {
    // Insert users
    for (const user of userData) {
      await db.insert(users).values(user).run();
      console.log(`Inserted user: ${user.name}`);
    }

    // Insert posts
    for (const post of postData) {
      await db.insert(posts).values(post).run();
      console.log(`Inserted post: ${post.title}`);
    }

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    sqlite.close();
  }
}

seed();


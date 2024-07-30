const db = require('../../../../config/database.config');
const { users } = require('../../models/schema');

exports.getAllUsers = async (request, reply) => {
  const allUsers = await db.query.users.findMany({
    with: { posts: true },
  });
  return allUsers;
};

exports.getUserById = async (request, reply) => {
  const { id } = request.params;
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, parseInt(id)),
    with: { posts: true },
  });
  if (!user) {
    reply.code(404).send({ error: 'User not found' });
  }
  return user;
};

exports.createUser = async (request, reply) => {
  const { name } = request.body;
  const newUser = await db.insert(users).values({ name }).returning();
  return newUser[0];
};
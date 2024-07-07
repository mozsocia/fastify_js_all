const db = require('../../../../config/database');
const { posts } = require('../../models/schema');

exports.getAllPosts = async (request, reply) => {
  const allPosts = await db.query.posts.findMany({
    with: { user: true },
  });
  return allPosts;
};

exports.getPostById = async (request, reply) => {
  const { id } = request.params;
  const post = await db.query.posts.findFirst({
    where: (posts, { eq }) => eq(posts.id, parseInt(id)),
    with: { user: true },
  });
  if (!post) {
    reply.code(404).send({ error: 'Post not found' });
  }
  return post;
};

exports.createPost = async (request, reply) => {
  const { title, content, userId } = request.body;
  const newPost = await db.insert(posts).values({ title, content, userId }).returning();
  return newPost[0];
};
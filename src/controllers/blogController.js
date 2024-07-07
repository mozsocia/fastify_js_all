
// src/controllers/blogController.js
const db = require('../config/database');
const blogs = require('../models/blogModel');
const { eq } = require('drizzle-orm');

exports.listBlogs = async (req, reply) => {
  const allBlogs = await db.select().from(blogs);
  return reply.view('blog/list.njk', { blogs: allBlogs });
};

exports.createBlog = async (req, reply) => {
  const { title, content, author } = req.body;
  await db.insert(blogs).values({ title, content, author });
  return reply.redirect('/blogs');
};

exports.getBlog = async (req, reply) => {
  const { id } = req.params;
  const blog = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1);
  if (blog.length === 0) {
    return reply.code(404).send('Blog not found');
  }
  return reply.view('blog/view.njk', { blog: blog[0] });
};

exports.updateBlog = async (req, reply) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  await db.update(blogs).set({ title, content, author }).where(eq(blogs.id, id));
  return reply.redirect(`/blogs/${id}`);
};

exports.deleteBlog = async (req, reply) => {
  const { id } = req.params;
  await db.delete(blogs).where(eq(blogs.id, id));
  return reply.redirect('/blogs');
};
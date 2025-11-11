import { client } from "./client";
import { fetchBlogPosts, fetchRecentPosts, fetchSingleBlog } from "./queries";

// Fetch blog posts
export const getBlogPosts = async () => {
  return await client.fetch(fetchBlogPosts);
};

// Fetch single blog post
export const getSingleBlog = async (slug: string) => {
  return await client.fetch(fetchSingleBlog, { slug });
};

// Fetch recent posts
export const getRecentPosts = async () => {
  return await client.fetch(fetchRecentPosts);
};

import { defineQuery } from "next-sanity";

// GROQ Query for Blog Listing Page
const fetchBlogPosts =
  defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "categories": categories[]->title
}
`);

const fetchSingleBlog = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    publishedAt,
    mainImage,
    body,
  }
  `);

const fetchRecentPosts =
  defineQuery(`*[_type == "post"] | order(publishedAt desc)[0...3] {
  title,
  slug,
  mainImage,
  publishedAt
}
`);

export { fetchBlogPosts, fetchSingleBlog, fetchRecentPosts };

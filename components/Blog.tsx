export const dynamic = "force-dynamic"; // Ensures the page is rendered dynamically

import React from "react";
// Assuming these utility functions are available at these paths
import { getBlogPosts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";

// Define a type for your blog posts
type BlogPost = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage: any; // Sanity Image Asset type
  category?: {
    title: string; // Assuming you have a category field
  };
};

// Function to safely generate image URL
const getImageUrl = (image: any) => {
  // Assuming a fixed size based on the layout (e.g., 400px wide)
  // Adjust width/height as needed for better performance
  return (
    urlForImage(image)?.width(400).height(300).url() ||
    "./assets/images/blog/default.jpg" // Fallback path if image is missing
  );
};

// Function to format the date
const formatDate = (dateString: string) => {
  // Formats date like '12-2-2020'
  const date = new Date(dateString);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};

// Change component to an async function to fetch data
const Blog = async () => {
  // 1. Fetch data from Sanity
  const blogPosts: BlogPost[] = await getBlogPosts();

  // 2. Limit to the first 3 posts to match the current component structure
  const postsToDisplay = blogPosts.slice(0, 3);

  // 3. Helper component for rendering a single blog post card
  const BlogPostCard = ({ post, delay }: { post: BlogPost; delay: string }) => (
    <div
      className="col-md-6 col-xl-4 wow fadeInUp"
      data-wow-delay={delay}
      data-wow-duration="1500ms"
    >
      <div className="blog-block-three">
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              {/* Use the Sanity image URL */}
              <img
                src={getImageUrl(post.mainImage)}
                alt={post.title || "Blog Image"}
              />
              {/* Note: The original markup had a duplicated image tag,
                  I'm only using one here with the dynamic source. */}
              <img
                src={getImageUrl(post.mainImage)}
                alt={post.title || "Blog Image"}
              />
            </figure>
          </div>
          <div className="content-box">
            <div className="content">
              {/* Use the actual category if available, otherwise fallback or remove */}
              <span className="sub-title">
                {post.category?.title || "IT Solutions"}
              </span>
              <h4 className="title">
                {/* Link to the dynamic route based on slug */}
                <a href={`/blog/${post.slug.current}`}>{post.title}</a>
              </h4>
            </div>
            <ul className="info">
              <li>
                {/* SVG for Author/User icon */}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.67969 3.75C10.3359 3.75 11.6797 5.09375 11.6797 6.75C11.6797 8.40625 10.3359 9.75 8.67969 9.75C7.02344 9.75 5.67969 8.40625 5.67969 6.75C5.67969 5.09375 7.02344 3.75 8.67969 3.75ZM8.67969 8.25C9.49219 8.25 10.1797 7.59375 10.1797 6.75C10.1797 5.9375 9.49219 5.25 8.67969 5.25C7.83594 5.25 7.17969 5.9375 7.17969 6.75C7.17969 7.59375 7.83594 8.25 8.67969 8.25ZM8.67969 0.75C12.9609 0.75 16.4297 4.21875 16.4297 8.5C16.4297 12.7812 12.9609 16.25 8.67969 16.25C4.39844 16.25 0.929688 12.7812 0.929688 8.5C0.929688 4.21875 4.39844 0.75 8.67969 0.75ZM8.67969 14.75C10.2109 14.75 11.6484 14.1875 12.7422 13.25C12.2734 12.5312 11.4609 12.0625 10.5547 12.0312C9.89844 12.2188 9.27344 12.3125 8.67969 12.3125C8.05469 12.3125 7.42969 12.2188 6.77344 12.0312C5.86719 12.0312 5.05469 12.5312 4.58594 13.25C5.67969 14.1875 7.11719 14.75 8.67969 14.75ZM13.7422 12.125C14.4922 11.125 14.9297 9.875 14.9297 8.5C14.9297 5.0625 12.1172 2.25 8.67969 2.25C5.21094 2.25 2.42969 5.0625 2.42969 8.5C2.42969 9.875 2.83594 11.125 3.58594 12.125C4.33594 11.1562 5.52344 10.5 6.86719 10.5C7.17969 10.5 7.67969 10.8125 8.67969 10.8125C9.64844 10.8125 10.1484 10.5 10.4609 10.5C11.8047 10.5 12.9922 11.1562 13.7422 12.125Z"
                    fill="#595B62"
                  />
                </svg>
                <a href="#0">Sharja Trading</a>
              </li>
              <li>
                {/* SVG for Date icon */}
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2V5M17 2V5M3 8H21M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5ZM7 10H9V12H7V10ZM11 10H13V12H11V10ZM15 10H17V12H15V10Z"
                    stroke="#595B62"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* Format and display the published date */}
                <a href="#0">{formatDate(post.publishedAt)}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const delayValues = ["00ms", "200ms", "400ms"];

  return (
    <div>
      <section className="blog-section-three pt-120 pb-120">
        <div className="container">
          <div className="sec-title center mb-50">
            <h6
              className="sub-title wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              News & Blogs
            </h6>
            <h2 className="title wow splt-txt" data-splitting>
              get update news & Blogs <br />
              by company
            </h2>
          </div>

          <div className="row g-4">
            {/* 4. Map over the fetched posts and render the card for each */}
            {postsToDisplay.length > 0 ? (
              postsToDisplay.map((post, index) => (
                <BlogPostCard
                  key={`${post._id}-${index}`}
                  post={post}
                  delay={delayValues[index]}
                />
              ))
            ) : (
              // Fallback content if no posts are found
              <div className="col-12 text-center">
                <p>No blog posts are available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

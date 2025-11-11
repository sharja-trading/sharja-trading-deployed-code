import React from 'react';
import Link from 'next/link'; // Use Link for Next.js navigation

// --- Sanity/Utility Imports (Adjust paths as necessary) ---
import { getBlogPosts } from "@/lib/sanity/fetchQueries"; // Assuming a function to get all posts
import { urlForImage } from "@/lib/sanity/image"; // Assuming your image URL utility

// --- Type Definitions ---
type Slug = { current: string };
type ImageAsset = { _ref: string };

type BlogPost = {
  _id: string; // Used for the unique key
  title: string;
  slug: Slug;
  mainImage?: ImageAsset;
  publishedAt: string;
  // Assuming a fixed author for now as the layout uses a static name
  authorName?: string; 
};

// --- Utility Functions ---

// Function to safely generate image URL with desired dimensions
const getImageUrl = (image: any) => {
  // Targeting a suitable size for the grid layout images
  return (
    urlForImage(image)?.width(400).height(300).url() ||
    "./assets/images/blog/default.jpg" // Fallback path
  );
};

// Function to format the date string (e.g., "15 December, 2025")
const formatPublishedDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

// --- Blog Card Component (Helper Component) ---
const BlogGridCard = ({ post, delay }: { post: BlogPost; delay: string }) => {
  const postUrl = `/blog/${post.slug.current}`;
  const author = post.authorName || "Sharja Trading"; // Use fallback name

  return (
    <div 
      className="col-md-6 col-xl-4 wow fadeInLeft" 
      data-wow-delay={delay} 
      data-wow-duration="1500ms"
      // The key is applied in the parent map, but kept the structure here for clarity
    >
      <div className="blog-block-two mb-30">
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <img src={getImageUrl(post.mainImage)} alt={post.title || "Blog Image"}/>
              <span className="tag">{formatPublishedDate(post.publishedAt)}</span>
            </figure>
          </div>
          <div className="content-box">
            <ul className="info">
              <li>
                {/* SVG for User/Author Icon */}
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.10742 7.625C9.38086 7.625 11.2324 9.47656 11.2324 11.75C11.2324 12.1719 10.8809 12.5 10.4824 12.5H1.48242C1.06055 12.5 0.732422 12.1719 0.732422 11.75C0.732422 9.47656 2.56055 7.625 4.85742 7.625H7.10742ZM1.85742 11.375H10.084C9.89648 9.89844 8.63086 8.75 7.10742 8.75H4.85742C3.31055 8.75 2.04492 9.89844 1.85742 11.375ZM5.98242 6.5C4.31836 6.5 2.98242 5.16406 2.98242 3.5C2.98242 1.85938 4.31836 0.5 5.98242 0.5C7.62305 0.5 8.98242 1.85938 8.98242 3.5C8.98242 5.16406 7.62305 6.5 5.98242 6.5ZM5.98242 1.625C4.92773 1.625 4.10742 2.46875 4.10742 3.5C4.10742 4.55469 4.92773 5.375 5.98242 5.375C7.01367 5.375 7.85742 4.55469 7.85742 3.5C7.85742 2.46875 7.01367 1.625 5.98242 1.625Z"
                    fill="#1A4137" />
                </svg>
                <a href="#0">{author}</a>
              </li>
            </ul>
            <h4 className="title">
                {/* Use Next.js Link for navigation */}
                <Link href={postUrl}>{post.title}</Link>
            </h4>
            <Link className="btn-one-rounded mt-30" href={postUrl}>
                Read More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Blog Grid Component (Async Server Component) ---
// Note: Props is now empty since data is fetched internally
const BlogGrid = async () => { 
  // 1. Fetch data from Sanity
  // Get all blog posts for the grid
  const blogPosts: BlogPost[] = await getBlogPosts();
  
  // Define delay values for the wow animations
  const delayValues = ["00ms", "100ms", "200ms", "300ms", "400ms", "500ms"];

  return (
    <div>
      <section className="blog-section pt-120 pb-90">
        <div className="auto-container">
          <div className="row g-4">
            {/* 2. Map over the fetched posts and render the card for each */}
            {blogPosts && blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <BlogGridCard
                  // Use the unique post ID for the key
                  key={`${post._id}-${index}`}
                  post={post}
                  // Cycle through the delay values using modulo operator
                  delay={delayValues[index % delayValues.length]}
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
}

export default BlogGrid;
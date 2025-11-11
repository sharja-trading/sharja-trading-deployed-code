import React from "react";
// Import necessary dependencies from the first component
import { getSingleBlog, getRecentPosts } from "@/lib/sanity/fetchQueries";
import { urlForImage } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link"; // Use Link for Next.js routing

// Define a basic structure for the fetched data for better type-safety
type Author = { name: string };
type Category = { title: string };
type Slug = { current: string };
type ImageAsset = { _ref: string }; // Simplified type for Sanity image asset

type BlogPost = {
  title: string;
  slug: Slug;
  mainImage?: ImageAsset;
  publishedAt: string;
  author?: Author;
  categories?: Category[];
  body: any; // PortableText value
};

// Use the Props type from the first component to get the slug from the URL


// Ensure dynamic rendering
export const dynamic = "force-dynamic";

// Convert to an async function to fetch data and accept Next.js params
async function SingleBlog({ slug }: any) {
  // const slug = params.slug;
  // Fetch data
  const blog: BlogPost = await getSingleBlog(slug);
  const recentPosts: BlogPost[] = await getRecentPosts();

  if (!blog) {
    // Basic check for a missing blog post
    return (
      <div className="blog-details pt-120 pb-120">
        <div className="container">
          <p>Blog post not found.</p>
        </div>
      </div>
    );
  }

  // Helper function to format the date string (Day, Month, Year parts)
  const formatPublishedDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.toLocaleDateString("en-US", { day: "2-digit" }),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      year: date.getFullYear(),
    };
  };

  const { day, month } = formatPublishedDate(blog.publishedAt);

  return (
    <div className="blog-details pt-120 pb-120">
      <div className="container">
        <div className="row">
          {/* Main Blog Content - col-xl-8 col-lg-7 */}
          <div className="col-xl-8 col-lg-7">
            <div className="blog-details__left">
              {/* === Image and Date === */}
              {blog.mainImage && (
                <div className="blog-details__img">
                  <img
                    src={
                      urlForImage(blog.mainImage)?.width(850).url() ||
                      "images/resource/blog.jpg"
                    }
                    alt={blog.title || "Blog Image"}
                  />
                  <div className="blog-details__date">
                    <span className="day">{day}</span>
                    <span className="month">{month}</span>
                  </div>
                </div>
              )}

              <div className="blog-details__content">
                {/* === Meta Info === */}
                <ul className="list-unstyled blog-details__meta">
                  {/* The original only had author. Using a fallback for consistency. */}
                  <li>
                    <i className="fas fa-user-circle"></i>
                    {/* Assuming a fixed author name if not available in Sanity */}
                    {blog.author?.name || " Sharja Trading"}
                  </li>
                  {/* You can add the date here if you don't like the floating date box */}
                </ul>

                {/* === Title === */}
                <h3 className="blog-details__title">{blog.title}</h3>

                {/* === PortableText Content === */}
                <div className="blog-details__text-container">
                  {/* This replaces all the static <p> tags with dynamic content */}
                  <PortableText value={blog.body} />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - col-xl-4 col-lg-5 */}
          <div className="col-xl-4 col-lg-5">
            <div className="sidebar">
              <div className="sidebar__single sidebar__post">
                <h3 className="sidebar__title">Latest Posts</h3>
                <ul className="sidebar__post-list list-unstyled">
                  {/* Map over the recent posts */}
                  {recentPosts?.map((post) => (
                    // Use a unique key for each list item
                    <li key={post.slug.current}>
                      <div className="sidebar__post-image">
                        <img
                          src={
                            urlForImage(post.mainImage)?.width(100).height(80).url() ||
                            "images/resource/blog1-1.jpg"
                          }
                          alt={post.title || "Recent Post"}
                        />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          {/* Display Author/Admin Meta */}
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle"></i>
                            {post.author?.name || " Sharja - Trading"}
                          </span>
                          {/* Link to the post */}
                          <Link href={`/blog/${post.slug.current}`}>
                            {post.title}
                          </Link>
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
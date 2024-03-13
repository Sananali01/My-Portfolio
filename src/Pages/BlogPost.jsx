import React from "react";
import { blogs } from "./BlogData";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import error from "../images/error2.png";

export default function BlogPost() {
  const { id } = useParams();
  const blogId = parseInt(id, 10);

  if (isNaN(blogId) || blogId < 0 || blogId >= blogs.length) {
    // Handle invalid or out-of-range IDs
    return (
      <>
        <Helmet>
          <title>Blog not Found | Sanan Ali </title>
          <link rel="icon" type="image/png" href={error} />
        </Helmet>
        <div className="center-container">
          <div className="blog-post-not-found">Blog Post not Found</div>
        </div>
      </>
    );
  }

  const blog = blogs[blogId];

  // Find the previous and next blog post IDs
  const prevBlogId = blogId - 1;
  const nextBlogId = blogId + 1;

  return (
    <>
      <Helmet>
        <title>Blog | {blog.title}</title>
        <link rel="icon" type="image/png" href={blog.image} />
      </Helmet>
      <div className="blog-post-container">
        <h2 className="blog-post-title">{blog.title}</h2>
        <div className="blog-post-image">
          <img src={blog.image} alt={blog.title} className="blog-post-image" />
        </div>
        <div className="blog-navigation">
          {prevBlogId >= 0 && (
            <Link to={`/BlogPost/${prevBlogId}`} className="prev-blog-button">
              &lt; Previous
            </Link>
          )}
          {nextBlogId < blogs.length && (
            <Link to={`/BlogPost/${nextBlogId}`} className="next-blog-button">
              Next &gt;
            </Link>
          )}
        </div>
        <p className="blog-post-content">{blog.content}</p>
      </div>
    </>
  );
}

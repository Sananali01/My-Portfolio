import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "./BlogData";
import { Helmet } from 'react-helmet';
import blogFavicon from "../images/blog.png";

function BlogPage() {
  const blogsPerPage = 6; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  // Calculate blog index range for pagination
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const displayedBlogs = blogs.slice(startIndex, endIndex); // Filtered blogs for current page

  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog | Sanan Ali</title>
        <link rel="icon" type="image/png" href={blogFavicon} />
      </Helmet>

      <h1 className="blog-head">Blogs</h1>

      {/* Pagination buttons */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Blog post grid */}
      <div className="blog-grid">
        {displayedBlogs.map((blog, index) => (
          <div key={index} className="blog-post">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-post-content">
              <h2>{blog.title}</h2>
              <p>{blog.intro}</p>
              <Link to={`/BlogPost/${startIndex + index}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "./BlogData";
import { Helmet } from 'react-helmet';
import blogFavicon from "../images/blog.png"


function BlogPage() {
  // Define the number of blogs to display per page
  const blogsPerPage = 6;

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  // Filter the blogs based on the current page
  const displayedBlogs = blogs.slice(startIndex, endIndex);

  return (
    <>
      <Helmet>
        <title>Blog</title>
        <link rel="icon" type="image/png" href={blogFavicon} />
      </Helmet>

      <h1 className="blog-head">Main Blog Page</h1>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(blogs.length / blogsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
      <div className="blog-page">
        {displayedBlogs.map((blog, index) => (
          <div key={index} className="blog-main">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-main2">
              <h2>{blog.title}</h2>
              <p>{blog.intro}</p>
              <Link to={`/BlogPost/${startIndex + index}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default BlogPage;

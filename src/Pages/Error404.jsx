import React from "react";
import { Helmet } from 'react-helmet';
import error from "../images/error1.png";

export default function Error404() {
  return (
    <>
      <Helmet>
        <title> 404 Error </title>
        <link rel="icon" type="image/png" href={error} />
      </Helmet>
      <div className="error-section">
        <div className="error-container">
          <h1 className="h1">404</h1>
          <p className="p">Oops! Page not found.</p>
          <p className="p">
            Sorry, the page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>
      </div>
    </>
  );
}

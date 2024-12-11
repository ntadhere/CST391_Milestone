import React from 'react';

// Define a functional component named OneBlog that takes props as its parameter
const OneBlog = (props) => {
  return (
    // Outer container div for styling and layout
    <div className="container">
      {/* Render the title of the blog */}
      <h2>{props.blog.title}</h2>
      
      {/* Card component to display the blog image and details */}
      <div className="card">
        {/* Render the blog image with a dynamic source and alt text */}
        <img
          src={props.blog.image} // Dynamic image source from props
          className="card-img-top" // Bootstrap class for card image styling
          alt={props.blog.title} // Alt text for accessibility and SEO
        />
        
        {/* Card body to display the blog's title and description */}
        <div className="card-body">
          {/* Render the blog's title inside the card body */}
          <h5 className="card-title">{props.blog.title}</h5>
          {/* Render the blog's description */}
          <p className="card-text">{props.blog.description}</p>
        </div>
      </div>
    </div>
  );
};

// Export the OneBlog component to be used in other parts of the application
export default OneBlog;

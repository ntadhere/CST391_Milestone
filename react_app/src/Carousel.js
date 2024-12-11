import React from "react";

const Carousel = ({ blogList }) => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {blogList.map((blog, index) => (
          <div
            key={blog.blogId}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={blog.image}
              className="d-block w-100"
              alt={blog.title || "Blog Image"}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{blog.title}</h5>
              <p>{blog.description.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

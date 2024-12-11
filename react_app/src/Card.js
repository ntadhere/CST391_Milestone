import React from "react";
import './Card.css';

const Card = (props) => {
  const handleButtonClick = (event, uri) => {
    console.log("ID clicked is " + props.blogId);
    props.onClick(props.blogId, uri);
  };

  // Function to truncate text
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ");
    }
    return text;
  };

  return (
    <div className="col">
      <div className="card">
        <img src={props.imgURL} className="card-img-top" alt="title" />
        <div className="card-body">
          <h5 className="card-title">
            {props.title} - {props.authorName}
          </h5>
          <p className="card-text">
            {truncateText(props.description, 50)}
            {props.description.split(" ").length > 50 && (
              <span className="align-right">...more</span>
            )}
          </p>
          <div className="button-group">
            <button
              onClick={() => handleButtonClick(props.blogId, "/show_blog/")}
              className="btn btn-primary"
            >
              {props.buttonText}
            </button>
            <button
              onClick={() => handleButtonClick(props.blogId, "/edit_blog/")}
              className="btn btn-secondary"
            >
              Edit
            </button>
            <button
              onClick={() => handleButtonClick(props.blogId, "/delete_blog/")}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

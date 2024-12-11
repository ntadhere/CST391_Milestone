import React, { useState } from "react";
import dataSource from "../dataSource";

import "./CardAuthor.css";

const CardAuthor = (props) => {
  // State to store feedback messages for user actions
  const [feedbackMessage, setFeedbackMessage] = useState("");

  // State to determine if the feedback message is an error
  const [isError, setIsError] = useState(false);

  // Handle deletion of an author when the delete button is clicked
  const handleDelete = async () => {
    // Check if authorId is valid before proceeding with the deletion
    if (!props.authorId) {
      setFeedbackMessage(
        "Error: Author ID is missing or invalid. Unable to delete."
      );
      setIsError(true);
      return;
    }

    // Ask the user to confirm the deletion since it's irreversible
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this author? This action cannot be undone."
    );
    if (!confirmDelete) return; // Abort if the user cancels the confirmation

    try {
      // Send a DELETE request to the API for the specified author
      const response = await dataSource.delete(`/authors/${props.authorId}`);

      // Handle success response
      if (response.status >= 200 && response.status < 300) {
        setFeedbackMessage("Author deleted successfully!");
        setIsError(false);

        // Optionally call parent handler to refresh the author list or redirect
      } else {
        // Handle unexpected response statuses
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      // Log error and display a user-friendly message
      console.error("Error deleting author:", error);
      setFeedbackMessage("Error deleting author. Please try again.");
      setIsError(true);
    }
  };

  // Handle button click to trigger parent-defined event
  // `uri` determines the action (e.g., edit, view) for the clicked author
  const handleButtonClick = (event, uri) => {
    console.log("ID clicked is " + props.authorId);
    props.onClick(props.authorId, uri);
  };

  return (
    <div className="col-author">
      {/* Display author image */}
      <img src={props.imgURL} className="card-img-top" alt="avatar" />
      <div className="card-body">
        {/* Display author name */}
        <h2 className="card-title">{props.name}</h2>

        {/* Display author's email and username */}
        <p className="card-text">
          {props.email} / {props.username}
        </p>

        {/* Display feedback messages (success or error) */}
        {feedbackMessage && (
          <div
            className={`alert ${isError ? "alert-danger" : "alert-success"}`}
          >
            {feedbackMessage}
          </div>
        )}

        {/* Action buttons for view, edit, and delete */}
        <div className="button-group">
          <button
            onClick={() => handleButtonClick(props.authorId, "/edit_author/")}
            className="btn btn-primary"
          >
            View
          </button>
          <button
            onClick={() => handleButtonClick(props.authorId, "/edit_author/")}
            className="btn btn-secondary"
          >
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAuthor;

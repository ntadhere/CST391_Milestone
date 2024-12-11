import React, { useState } from "react";
import dataSource from "../dataSource";
import { useNavigate } from "react-router-dom";

const DeleteAuthor = (props) => {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!props.author || !props.author.authorId) {
      setFeedbackMessage(
        "Error: Author ID is missing or invalid. Unable to delete."
      );
      setIsError(true);
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this author? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      const response = await dataSource.delete(
        `/authors/${props.author.authorId}`
      );

      if (response.status >= 200 && response.status < 300) {
        setFeedbackMessage("Blog deleted successfully!");
        setIsError(false);

        // Call parent handler to refresh the blog list and navigate
        props.onDeleteAuthor(navigate);
        navigate("/authors"); // redirect to the list of blogs
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting author:", error);
      setFeedbackMessage("Error deleting author. Please try again.");
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <h2>Are you sure you want to delete this blog?</h2>
      <p>
        <strong>Title:</strong> {props.blog?.title || "No title available"}
      </p>
      {feedbackMessage && (
        <div
          className={`alert ${isError ? "alert-danger" : "alert-success"}`}
          role="alert"
        >
          {feedbackMessage}
        </div>
      )}
      <button onClick={handleDelete} className="btn btn-danger">
        Confirm Delete
      </button>
      <button
        onClick={() => navigate("/show_list")}
        className="btn btn-secondary"
        style={{ marginLeft: "10px" }}
      >
        Cancel
      </button>
    </div>
  );
};

export default DeleteAuthor;

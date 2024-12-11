import React, { useState } from "react";
import dataSource from "../dataSource";
import { useNavigate } from "react-router-dom";

// Component for creating or editing an author
const EditAuthor = (props) => {
  // Initialize a default author object
  let author = {
    name: "",
    username: "",
    email: "",
    password: "",
    image: "",
  };
  let newAuthorCreation = true; // Flag to track if it's a new author or editing an existing one

  // If `props.author` is provided, use it to prepopulate the form
  if (props.author) {
    author = props.author;
    newAuthorCreation = false;
  }

  // State hooks for form fields
  const [name, setName] = useState(author.name || "");
  const [username, setUsername] = useState(author.username || "");
  const [email, setEmail] = useState(author.email || "");
  const [password, setPassword] = useState(author.password || "");
  const [image, setImage] = useState(author.image || "");

  // State for feedback messages
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate(); // Navigation hook for redirecting

  // Handle form submission to create or update an author
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form behavior (page reload)

    // Construct the author object for submission
    const editAuthor = {
      authorId: author.authorId,
      name: name,
      username: username,
      email: email,
      password: password,
      image: image,
    };

    try {
      let response;
      // Decide whether to create a new author or update an existing one
      if (newAuthorCreation) {
        response = await dataSource.post("/authors", editAuthor); // POST request for new author
      } else {
        response = await dataSource.put(
          `/authors/${author.authorId}`,
          editAuthor
        ); // PUT request for existing author
      }

      // Handle successful responses
      if (response.status >= 200 && response.status < 300) {
        setFeedbackMessage("Author saved successfully!"); // Show success message
        console.log("Successful");
        setIsError(false);

        // Update the author list in the parent component and navigate back to the authors page
        props.onEditAuthor(navigate);
        navigate("/authors"); // Redirect to the authors list
      } else {
        throw new Error(`Unexpected response status: ${response.status}`); // Handle unexpected response
      }
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      setFeedbackMessage("Error saving author. Please try again."); // Show error message
      setIsError(true);
    }
  };

  // Handle cancel button click to navigate back without saving changes
  const handleCancel = () => {
    navigate("/authors"); // Redirect to the authors list
  };

  return (
    <div className="container d-flex" style={{ display: "block" }}>
      {/* Display author avatar */}
      <span>
        <img src={image} className="card-img-top" alt="avatar" />
      </span>

      {/* Form for editing or creating an author */}
      <form onSubmit={handleFormSubmit}>
        <h1>{newAuthorCreation ? "Create New" : "Edit"} Author</h1>

        {/* Feedback message displayed conditionally */}
        {feedbackMessage && (
          <div
            className={`alert ${isError ? "alert-danger" : "alert-success"}`}
            role="alert"
          >
            {feedbackMessage}
          </div>
        )}

        {/* Form fields for author details */}
        <div className="mb-3 form-group">
          <label htmlFor="authorName" className="form-label">
            Author's Name
          </label>
          <input
            type="text"
            className="form-control"
            id="authorName"
            placeholder="Enter author's name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on input change
          />
          <label htmlFor="authorUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="authorUsername"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="authorEmail" className="form-label">
            Email
          </label>
          <textarea
            type="text"
            className="form-control"
            id="authorEmail"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="authorPassword" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="authorPassword"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="authorImage" className="form-label">
            Avatar
          </label>
          <input
            type="text"
            className="form-control"
            id="authorImage"
            placeholder="Upload image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        {/* Form buttons for cancel and submit actions */}
        <div align="right">
          <button
            type="button"
            className="btn btn-light"
            onClick={handleCancel} // Cancel action
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAuthor;

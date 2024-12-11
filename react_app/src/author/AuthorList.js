import React from "react";
import CardAuthor from "./CardAuthor";
import { useNavigate } from "react-router-dom";

// Component for rendering a list of authors
const AuthorList = (props) => {
  // Log the props received to debug the data passed to this component
  console.log("props authorList", props);
  const navigator = useNavigate();

  // Function to handle the selection of an author
  // Takes the author's ID and URI, and calls the parent-provided `onClick` handler
  const handleSelectionOne = (authorId, uri) => {
    console.log("Selected ID is " + authorId); // Debug the selected author's ID
    props.onClick(authorId, navigator, uri); // Pass the ID and navigation function to the parent handler
  };

  // Debugging the specific prop for authorId
  console.log("props.authorId", props.authorId);

  // Map over the author list to create an array of `CardAuthor` components
  const authors = props.authorList.map((author) => {
    console.log("author.authorId", author.authorId); // Debug each author's ID
    return (
      <CardAuthor
        key={author.authorId} // Unique key for each card
        authorId={author.authorId} // Author's ID passed to the card
        name={author.name} // Author's name
        username={author.username} // Author's username
        email={author.email} // Author's email
        password={author.password} // Author's password (consider removing for security if not needed)
        buttonText="View & Edit" // Button text for the card
        imgURL={author.image} // URL for the author's image
        onClick={handleSelectionOne} // Click handler for the card
      />
    );
  });

  // Render the list of authors in a grid layout
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-6 g-4">{authors}</div>
    </div>
  );
};

export default AuthorList;

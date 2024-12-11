import React from "react";
import SearchForm from "../SearchForm"; // Importing the SearchForm component for user input functionality
import AuthorList from "./AuthorList"; // Importing the AuthorList component to display a list of authors

/**
 * SearchAuthor Component
 * This component combines the search form and the author list display functionality.
 * It receives props for managing state updates related to searching and selecting authors.
 *
 * Props:
 * - updateSearchResults: Function to handle search form submissions and update the search results.
 * - authorList: Array of authors to be displayed in the AuthorList component.
 * - updateSingleAuthor: Function to handle actions when a single author is selected from the list.
 */
const SearchAuthor = (props) => {
  console.log("props with update single author", props); // Debug log to inspect props passed to the component

  return (
    <div className="container">
      {" "}
      {/* Wrapper container for styling purposes */}
      {/* SearchForm to handle user search input */}
      <SearchForm onSubmit={props.updateSearchResults} />
      {/* AuthorList to display the list of authors and handle user interactions */}
      <AuthorList
        authorList={props.authorList}
        onClick={props.updateSingleAuthor}
      />
    </div>
  );
};

export default SearchAuthor; // Exporting the component for use in other parts of the application

// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

import EditBlog from "./EditBlog";
import DeleteBlog from "./DeleteBlog";
import SearchBlog from "./SearchBlog";
import OneBlog from "./OneBlog";

import EditAuthor from "./author/EditAuthor";
import CardAuthor from "./author/CardAuthor";
import SearchAuthor from "./author/SearchAuthor";
import DeleteAuthor from "./author/DeleteAuthor";
import "./App.css";
import dataSource from "./dataSource";
import HomePage from "./HomePage";

// Main App component
const App = () => {
  // State variables for managing blogs, authors, and UI interactions
  const [searchPhrase, setSearchPhrase] = useState(""); // Search input state
  const [blogList, setBlogList] = useState([]); // List of blogs
  const [authorList, setAuthorList] = useState([]); // List of authors
  const [currentlySelectedBlogId, setCurrentlySelectedBlogId] = useState(0); // Selected blog for view/edit/delete
  const [currentlySelectedAuthorId, setCurrentlySelectedAuthorId] = useState(0); // Selected author for view/edit/delete
  let refresh = false; // Variable to trigger reloading of data

  //==========================
  // Function to load all blogs from the data source
  //==========================
  const loadBlogs = async () => {
    const response = await dataSource.get("/blogs"); // Fetch blogs from API
    setBlogList(response.data); // Update state with blog data
  };

  //==========================
  // Function to load all authors from the data source
  //==========================
  const loadAuthors = async () => {
    const response = await dataSource.get("/authors"); // Fetch authors from API
    setAuthorList(response.data); // Update state with author data
  };

  //==========================
  // useEffect for initial data loading
  //==========================
  useEffect(() => {
    loadBlogs(); // Load blogs on component mount
    loadAuthors(); // Load authors on component mount
  }, [refresh]); // Reload when `refresh` changes

  //==========================
  // Author-related functions
  //==========================

  // Navigate to a single author's page based on their ID
  const updateSingleAuthor = (authorId, navigate, uri) => {
    const selectedAuthorIndex = authorList.findIndex(
      (author) => author.authorId === authorId
    ); // Find author by ID
    if (selectedAuthorIndex !== -1) {
      setCurrentlySelectedAuthorId(selectedAuthorIndex); // Update selected author ID
      navigate(uri + selectedAuthorIndex); // Navigate to author page
    } else {
      console.error("Author not found for ID:", authorId);
    }
  };

  // Refresh authors list after editing
  const onEditAuthor = (navigate) => {
    loadAuthors();
    navigate("/authors");
  };

  // Refresh authors list after deletion
  const onDeleteAuthor = (navigate) => {
    loadAuthors();
    navigate("/authors");
  };

  // Update search phrase for filtering
  const updateSearchResults = async (phrase) => {
    console.log("phrase is " + phrase);
    setSearchPhrase(phrase); // Update search input state
  };

  //==========================
  // Blog-related functions
  //==========================

  // Navigate to a single blog's page based on its ID
  const updateSingleBlog = (blogId, navigate, uri) => {
    console.log("Selected Blog ID =", blogId);
    const selectedBlogIndex = blogList.findIndex(
      (blog) => blog.blogId === blogId
    ); // Find blog by ID
    if (selectedBlogIndex !== -1) {
      setCurrentlySelectedBlogId(selectedBlogIndex); // Update selected blog ID
      let path = uri + selectedBlogIndex;
      navigate(path); // Navigate to blog page
    } else {
      console.error("Blog not found for ID:", blogId);
    }
  };

  // Refresh blog list after editing
  const onEditBlog = (navigate) => {
    loadBlogs();
    navigate("/");
  };

  // Refresh blog list after deletion
  const onDeleteBlog = (navigate) => {
    loadBlogs();
    navigate("/");
  };

  //==========================
  // Filter blogs and authors based on search phrase
  //==========================
  const renderedList = blogList.filter(
    (blog) =>
      blog.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ""
  );

  const renderedAuthor = authorList.filter(
    (author) =>
      author.name.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ""
  );

  //==========================
  // JSX Rendering
  //==========================
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Routes for blogs */}
        <Route exact path="/" element={<HomePage blogList={blogList} />} />
        <Route
          exact
          path="/show_blog"
          element={
            <SearchBlog
              updateSearchResults={updateSearchResults}
              blogList={renderedList}
              updateSingleBlog={updateSingleBlog}
            />
          }
        />
        <Route
          exact
          path="/new_blog"
          element={<EditBlog onEditBlog={onEditBlog} />}
        />
        <Route
          exact
          path="/edit_blog/:blogId"
          element={
            <EditBlog
              onEditBlog={onEditBlog}
              blog={blogList[currentlySelectedBlogId]}
            />
          }
        />
        <Route
          exact
          path="/show_blog/:blogId"
          element={<OneBlog blog={blogList[currentlySelectedBlogId]} />}
        />
        <Route
          exact
          path="/delete_blog/:blogId"
          element={
            <DeleteBlog
              onDeleteBlog={onDeleteBlog}
              blog={blogList[currentlySelectedBlogId]}
            />
          }
        />
        {/* Routes for authors */}
        <Route
          exact
          path="/authors"
          element={
            <SearchAuthor
              updateSearchResults={updateSearchResults}
              authorList={renderedAuthor}
              updateSingleAuthor={updateSingleAuthor}
            />
          }
        />
        <Route
          exact
          path="/new_author"
          element={<EditAuthor onEditAuthor={onEditAuthor} />}
        />
        <Route
          exact
          path="/edit_author/:authorId"
          element={
            <EditAuthor
              onEditAuthor={onEditAuthor}
              author={authorList[currentlySelectedAuthorId]}
            />
          }
        />
        <Route
          exact
          path="/show_author/:authorId"
          element={
            <CardAuthor author={authorList[currentlySelectedAuthorId]} />
          }
        />
        <Route
          exact
          path="/delete_author/:authorId"
          element={
            <DeleteAuthor
              onDeleteAuthor={onDeleteAuthor}
              author={authorList[currentlySelectedAuthorId]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

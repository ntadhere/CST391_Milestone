import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const EditBlog = (props) => {
  let blog = {
    title: '',
    authorName: '',
    description: '',
    year: '',
    image: '',
  };
  let newBlogCreation = true;

  if (props.blog) {
    blog = props.blog;
    newBlogCreation = false;
  }

  const [title, setBlogTitle] = useState(blog.title || '');
  const [authorName, setAuthorName] = useState(blog.authorName || '');
  const [description, setDescription] = useState(blog.description || '');
  const [year, setYear] = useState(blog.year || '');
  const [image, setImage] = useState(blog.image || '');

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const editedBlog = {
      blogId: blog.blogId,
      title: title,
      authorName: authorName,
      description: description,
      year: year,
      image: image,
    };

    try {
      let response;
      if (newBlogCreation) {
        response = await dataSource.post('/blogs', editedBlog);
      } else {
        response = await dataSource.put(`/blogs/${blog.blogId}`, editedBlog);
      }
  
      // Check if the response is successful
      if (response.status >= 200 && response.status < 300) {
        setFeedbackMessage('Blog saved successfully!');
        console.log('Successful');
        setIsError(false);
  
        // Update blog list in the parent component and navigate
        props.onEditBlog(navigate);
        navigate('/show_list'); // redirect to the list of blogs
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error); // Log detailed error for debugging
      setFeedbackMessage('Error saving album. Please try again.');
      setIsError(true);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };


  return (
    <div className="container" style={{ display: 'block' }}>
      <form onSubmit={handleFormSubmit}>
        <h1>{newBlogCreation ? 'Create New' : 'Edit'} Blog</h1>

        {feedbackMessage && (
          <div
            className={`alert ${isError ? 'alert-danger' : 'alert-success'}`}
            role="alert"
          >
            {feedbackMessage}
          </div>
        )}

        <div className="mb-3 form-group">
          <label htmlFor="blogTitle" className="form-label">Blog Title</label>
          <input type="text" className="form-control" id="blogTitle" placeholder="Enter Blog Title" value={title} onChange={(e) => setBlogTitle(e.target.value)} />
          <label htmlFor="blogAuthor" className="form-label">Author</label>
          <input type="text" className="form-control" id="blogAuthor" placeholder="Enter Blog Author" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
          <label htmlFor="blogDescription" className="form-label">Description</label>
          <textarea rows="10" type="text" className="form-control" id="blogDescription" placeholder="Enter Blog Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <label htmlFor="blogYear" className="form-label">Year</label>
          <input type="text" className="form-control" id="blogYear" placeholder="Enter Blog Year" value={year} onChange={(e) => setYear(e.target.value)} />
          <label htmlFor="blogImage" className="form-label">Image</label>
          <input type="text" className="form-control" id="blogImage" placeholder="Enter Blog Image" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>

        <div align="right">
          <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;


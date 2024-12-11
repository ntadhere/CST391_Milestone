import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const DeleteBlog = (props) => {
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!props.blog || !props.blog.blogId) {
      setFeedbackMessage('Error: Blog ID is missing or invalid. Unable to delete.');
      setIsError(true);
      return;
    }

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this blog? This action cannot be undone.'
    );
    if (!confirmDelete) return;

    try {
      const response = await dataSource.delete(`/blogs/${props.blog.blogId}`);

      if (response.status >= 200 && response.status < 300) {
        setFeedbackMessage('Blog deleted successfully!');
        setIsError(false);

        // Call parent handler to refresh the blog list and navigate
        props.onDeleteBlog(navigate);
        navigate('/show_list'); // redirect to the list of blogs
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      setFeedbackMessage('Error deleting blog. Please try again.');
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <h2>Are you sure you want to delete this blog?</h2>
      <p>
        <strong>Title:</strong> {props.blog?.title || 'No title available'}
      </p>
      {feedbackMessage && (
        <div
          className={`alert ${isError ? 'alert-danger' : 'alert-success'}`}
          role="alert"
        >
          {feedbackMessage}
        </div>
      )}
      <button onClick={handleDelete} className="btn btn-danger">
        Confirm Delete
      </button>
      <button onClick={() => navigate('/show_list')} className="btn btn-secondary" style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteBlog;

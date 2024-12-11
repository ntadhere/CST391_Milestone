import React from 'react'; // Import React to define the component
import Card from './Card'; // Import the Card component for displaying individual blog cards
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

// BlogList component to render a list of blog posts
const BlogList = (props) => {

    console.log('props blogList', props); // Debug log to inspect the props passed to the BlogList component
    const navigator = useNavigate(); // useNavigate hook to navigate between routes

    // Function to handle the selection of a specific blog post
    const handleSelectionOne = (blogId, uri) => {
        console.log('Selected ID is ' + blogId); // Debug log the selected blog's ID
        props.onClick(blogId, navigator, uri); // Call the onClick function passed in props with the blog ID, navigator, and URI
    };

    console.log('props.blogList', props.blogList); // Debug log to verify the list of blogs in the props

    // Map through the list of blogs and generate a Card component for each blog
    const blogs = props.blogList.map((blog) => {
        console.log('blog.blogId', blog.blogId); // Debug log to check each blog's ID during rendering
        return (
            <Card
                key={blog.blogId} // Use a unique key for each Card component
                blogId={blog.blogId} // Pass the blog ID as a prop to the Card
                title={blog.title} // Pass the blog title as a prop to the Card
                authorName={blog.authorName} // Pass the author's name as a prop to the Card
                description={blog.description} // Pass the blog description as a prop to the Card
                buttonText='View' // Define the button text for the Card
                imgURL={blog.image} // Pass the blog's image URL as a prop to the Card
                onClick={handleSelectionOne} // Pass the click handler for the Card
            />
        );
    });

    // Return the JSX to render the list of blogs in a responsive grid layout
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-4'> {/* Bootstrap grid layout for responsiveness */}
                {blogs} {/* Render the list of blog cards */}
            </div>
        </div>
    );
};

export default BlogList; // Export the BlogList component to be used in other parts of the application

import React from 'react';
import SearchForm from './SearchForm';
import BlogList from './BlogList';

const SearchBlog = (props) => {
    console.log('props with update single blog', props);
    return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults} />
            <BlogList blogList={props.blogList} onClick={props.updateSingleBlog} />
        </div>
    );
};

export default SearchBlog;
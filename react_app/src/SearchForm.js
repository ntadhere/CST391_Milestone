import React, { useState } from "react";

const SearchForm = (props) => {
    
    // hold the value of the text input
    // the hook also returns setInputText, the only method for changing inputText
    const [inputText, setInputText] = useState("");

    // onChange is a reserved keyword in JavaScript to handle events
    // add a method in the class definition to handle the event
    const handleChangeInput = (event) => {
    setInputText(event.target.value);
    console.log(inputText);
    };

    const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputText);
    };

    return (
        <div>
        {/* add an onSubmit event to the <form> element and create a handler method 
        to display the state of the component */}
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
            <label htmlFor="search-term">Search for</label>
            {/* The property for the <input> control called onChange */}
            <input
                type="text"
                className="form-control"
                placeholder="Enter search term here"
                onChange={handleChangeInput}
            />
            </div>
        </form>
        </div>
    );
};

export default SearchForm;

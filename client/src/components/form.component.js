import React from "react";


const SearchForm = props => {
    return (
        <div className="form-container">
        <form style={{textAlign: "center"}}>
           
                <label className="BookSearchLabel" > <h1 className="text-white"  >Find Your Favorite Books with GoogleBook API</h1></label>
                <br></br>
                <input 
                    value={props.search}
                    type="text" 
                    name="searchBook"
                    placeholder="Enter Book's Name"
                    onChange={props.handleInputChange}
                />
          
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
        </div>
    )
}
export default SearchForm
import React, { Component } from "react";
import axios from 'axios'
import SearchForm from "../components/form.component";
import SearchResult from "../components/book.component"


class SearchBooks extends Component {
    //create state
    state = {
        query: "",
        books: [],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ query: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
      event.preventDefault()
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.query)
      .then(response =>{
        console.log(response)
       this.setState({ books: [...response.data.items ] })
       
      })
      .catch(error =>console.log("Error: " + error))
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
       
    }
    render() {
        return (
            <div className="container">
                    <h1 className="text-white">Find Your Favorite Books with GoogleBook API</h1>
            
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                      
                   
               
                <br></br>
                
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
               
            </div>
        )
    }


}

export default SearchBooks
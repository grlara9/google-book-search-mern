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
    handleInputChange = e => {
        this.setState({ query: e.target.value })
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

    saveBook(book) {

        console.log("This is the book with id" + book);

        const bookData = {
          title: book.title,
          authors: book.authors,
          infoLink: book.infoLink,
          image: book.image,
          description: book.description
        };
      
        axios.post("http://localhost:5000/api/books", bookData)

        .then(res => console.log("Successful POST to DB!", res))
        .catch(err => console.log("this is the error", err));
    }

render() {
    return (
        <div className="container">
            <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
            />
            <br></br>
            <SearchResult
             books={this.state.books} 
             saveBook={book => this.saveBook(book)} />
        </div>
        )
    }
}
export default SearchBooks
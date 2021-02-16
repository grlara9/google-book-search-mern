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

         saveGoogleBooks = currentBook => {
      
        console.log("This is the book with id" + currentBook);
        
        

        axios.post("http://localhost:5000/api/books", ({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description:currentBook.description,
            image: currentBook.image,
            link: currentBook.link

        }))
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
             saveGoogleBooks={this.saveGoogleBooks} />
        </div>
        )
    }
}
export default SearchBooks
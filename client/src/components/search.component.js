import React, { Component } from "react";
import axios from 'axios'
import SearchForm from "../components/form.component";
import SearchResult from "../components/book.component"


class SearchBooks extends Component {
    //create state
    state = {
        query: "",
        books: {},
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

    handleSavedButton = bookID => {
        const book = this.state.books.find(book => book.id === bookID);

        const bookData = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.smallThumbnail,
            link: book.volumeInfo.infoLink,
           
        }
     

        axios.post('http://localhost:5000/api/books', bookData)

        .then(() => {
            this.setState({
              books: this.state.books.filter(book => book.id !== bookID)
            });
       })
    }
render() {
    return (
        <div className="container">
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
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

    handleSavedButton = event => {
        const bookData = {
            title: this.props.title,
            authors: this.props.authors,
            description: this.props.description,
            img: this.props.img,
            link: this.props.link
        }
        event.preventDefault();
        axios.post('http://localhost:5000/api/books', bookData)
        .then((response) => {console.log(response)})
        .catch((err) => {console.log(err)
            }
        );
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
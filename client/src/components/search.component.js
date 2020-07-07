import React, { Component } from 'react'
import Form from "./form.component"
import Books from "./book.component"
import axios from 'axios'

class Search extends Component{
constructor(props){
    super(props)
      this.state={
        books:[],
        query:''
      }
      
  }

  getBook = (e) =>{
    e.preventDefault()
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.query)
    .then(response =>{
      console.log(response)
     this.setState({ books: [...response.data.items ] })
     
    })
    .catch(error =>console.log("Error: " + error))
  }

  onChange =(value)=>{
    this.setState({
      query:value
    })
} 

handleSaveClick = (bookID)=>{
  const book = this.state.books.find(book => book.id === bookID)

  axios.post("http://localhost:5000/api/books", {
    title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.previewLink
    })
    .then(() => {
      this.setState({
        books: this.state.books.filter(book => book.id !== bookID)
      });
    }).catch(err => console.log(err));
  }


  render(){
    return (
     <Form onChange={this.onChange} getBook={this.getBook} />
     <Books books={this.state.books}/>
    )
  }
}
export default Search
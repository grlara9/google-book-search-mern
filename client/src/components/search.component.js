import React, { Component, Fragment } from 'react'
import Form from "./form.component"
import Books from "./book.component"
import axios from 'axios'
import BookList from './booklist.component'

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
      <React.Fragment>

     <Form onChange={this.onChange} getBook={this.getBook} />
     {(this.state.books && this.state.books.length > 0)?
     {this.state.books.map(book =>{
       return (
         <BookList 
          key={books.id}
          title={books.volumeInfo.title}
          author={books.volumeInfo.authors}
          published={books.volumeInfo.publishedDate}
          preview={books.volumeInfo.infoLink}
          image={books.volumeInfo.imageLinks.thumbnail ? books.volumeInfo.imageLinks.thumbnail : "#"}
          />
       )
     })}
     : <h1>No results available</h1>
     
  }
     
     </React.Fragment>
    )
  }
}
export default Search
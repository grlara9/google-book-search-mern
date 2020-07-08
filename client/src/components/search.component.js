import React, { Component, Fragment } from 'react'
import Form from "./form.component"
import Books from "./book.component"
import AddButton from './add.button.component'
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

render(){
  return (
    <div>
     <Form onChange={this.onChange} getBook={this.getBook} />

     {(this.state.books && this.state.books.length > 0) ?
     <Books>
     {this.state.books.map(book =>{
       return (
         <div>
         <BookList 
          key={book.id}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          published={book.volumeInfo.publishedDate}
          preview={book.volumeInfo.infoLink}
          image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"}
          />

          <AddButton
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          published={book.volumeInfo.publishedDate}
          preview={book.volumeInfo.infoLink}
          image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "#"}
          />
          </div>
       )})
    }
     </Books>
    : <h1>No results available</h1>
    }
    
    </div>
    )
  }
}
export default Search
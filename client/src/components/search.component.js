import React, { Component } from 'react'

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
 


 const Search = (props)=> {
    return (
        <form onSubmit={(e) => {props.getBook(e)}}> 
            <div className="row">

            <div className="form-group col-md-8">

            <input  type="text" 
            name="book"
            onChange={(e)=> {props.onChange(e.target.value)}}
            className="form-control form-control-lg" 
            placeholder="Search for Book..."/>
            </div>
            <div className="form-group col-md-4">

            <button type="submit" className="btn btn-primary btn-lg btn-block">Search..</button>
            </div>
            </div>
        </form>
        
        )
    
}
export default Search
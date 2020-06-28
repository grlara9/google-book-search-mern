import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component() {
  constructor(props){
    super(props);
      this.state={
        books:[],
        query:'java'
      }
  }

  getBook = (e) =>{
    e.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.query)
    .then(response =>{
      console.log(response)
     // this.setState({ books: [...data.data.items ] })
    })
    .catch(error =>console.log("Error: " + error))
  }

  render(){
  return (
    <div className="App">
     <h1>g</h1>
    </div>
  );
}
}
export default App;

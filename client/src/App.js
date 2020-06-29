import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header.component'
import Search from './components/search.component'
import Books from './components/book.component'
import axios from 'axios'
import './App.css';

class App extends Component {
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
    <Router>

    <div className="App">
     <Header />
      <Search onChange={this.onChange} getBook={this.getBook} />
      <Books books={this.state.books}/>
    </div>
    
    </Router>
  );
}
}
export default App;

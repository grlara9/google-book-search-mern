import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header.component'
import Search from './components/search.component'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        books:[],
        query:'java'
      }
      
  }

  getBook = (e) =>{
    
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.query)
    .then(response =>{
      console.log(response)
     // this.setState({ books: [...data.data.items ] })
    })
    .catch(error =>console.log("Error: " + error))
  }

  render(){
    return (
    <Router>

    <div className="App">
     <Header />
      <Search />
    </div>
    
    </Router>
  );
}
}
export default App;

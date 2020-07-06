import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header.component'
import Search from './components/search.component'
import Books from './components/book.component'
import axios from 'axios'
import './App.css';

function App() {
  
return(
    <Router>

    <div className="App">
     <Header />
      <Search onChange={this.onChange} getBook={this.getBook} />
      <Books books={this.state.books} 
      handleSaveClick={this.handleSaveClick}
      />
    </div>
    
    </Router>
  );
}

export default App;

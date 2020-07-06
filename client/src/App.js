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
        <Switch>

     <Route exact="/" component={Books} />
     <Route exact path="/books" component={Books} />
     <Route exact path="/search" component={Search} />
        </Switch>
    </div>
    
    </Router>
  );
}

export default App;

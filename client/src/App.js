import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header.component'
import SearchBook from './components/search.component'
import Saved from './components/saved.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  
return(
    <Router>
        <div className="container">
    <Header />
      <Switch>
        <Route exact path="/" component={SearchBook} />
        <Route path="/saved" component={Saved} />
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;

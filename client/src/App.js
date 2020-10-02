import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from './shared/Navigation/Navigation'
import SearchBook from './components/search.component'
import Saved from './components/saved.component'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  
return(
    <Router>
      
    <Navigation />
    <main>
      <Switch>
        <Route exact path="/" component={SearchBook} />
        <Route path="/saved" component={Saved} />
      </Switch>
    </main>
    
    </Router>
  );
}

export default App;

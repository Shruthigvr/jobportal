import React, { Component } from 'react';
import Login from './login.js';
import Home from './Home.js';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">                
                  <Route path = "/" exact component = {Login} />
                  <Route path = "/Home" exact component = {Home} />        
              
              </div>
            </Router>
        );
    }
}

export default App;
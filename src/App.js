import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Login from './login.js';
import Home from './Home.js';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">
        <Home/> 

      </div>
        );
    }
}

export default App;
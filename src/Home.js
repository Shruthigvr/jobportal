import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';

class Home extends Component {

    render() {
        return (
            <div>
				<div className="topnav">				 
  				<input type="text" placeholder="Search.."/>
  				<button class="addbtn">New User</button>
				
			</div>
			</div>
        );
    }
}

export default Home;
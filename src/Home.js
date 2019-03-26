import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';

class Home extends Component {
	
componentDidMount(){
				axios.get("https://reqres.in/api/users")
            .then(function(response) {
                console.log(response.data.data);
            })
            .catch(function(error) {
                console.log(error);
            })
			}
		
	


    render() {
    	
        return (
            <div>
				<div className="topnav">				 
  					<input type="text" placeholder="Search.."/>
  					<button class="addbtn">New User</button>
  				</div>
  				<div className="content">
  					<div className="jobcard">
  					</div>				
				</div>
			</div>
        );
    }
}

export default Home;
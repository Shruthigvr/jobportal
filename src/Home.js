import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';

class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			personList:[]
		};
	}
	
componentDidMount(){
				axios.get("https://reqres.in/api/users")
            .then(function(response) {
                console.log(response.data.data);
                let personList= response.data.data;
                console.log(personList);
                 this.setState({ personList:personList });
                
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
  				<div>
  				{this.state.personList.map(personList=>
                	<Jobcard id={personList.id} person={personList} />)		
				}
				</div>
			</div>
        );
    }
}

class Jobcard extends Component{
	constructor(props){
		super(props);
	}
	render() {
    	
        return (
            <div>
				<div className="content">
  					<div className="jobcard">
  					<p>{this.props.id}</p>
  					</div>	
			</div>
			</div>
        )
    }
}


export default Home;
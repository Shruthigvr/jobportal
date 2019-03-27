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
           
            .then(item=>{const personList = item.data.data;
            	this.setState({personList});
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
  				{this.state.personList.map(person=>
  					<div>
                	<Jobcard id={person.id} firstName={person.first_name} />
                	
                	</div>
                	)		
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
  					<p>{this.props.firstName}</p>
  					</div>	
			</div>
			</div>
        )
    }
}


export default Home;
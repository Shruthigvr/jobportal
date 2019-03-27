import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personList: []
        };
    }

    componentDidMount() {
        axios.get("https://reqres.in/api/users")

            .then(item => {
                const personList = item.data.data;
                console.log(personList);
                this.setState({ personList });
            })

    }

    filter=(e)=>{
    	this.setState({filter:e.target.value})
    }


    render() {
    	let personList=this.state.personList;
    	console.log(personList);
    	if(this.state.filter){
    		personList=personList.filter(person=>{
    			person.first_name.toLowerCase()
    			.includes(this.state.filter.toLowerCase())
    		})
    	}
        return (
            <div>
				<div className="topnav">				 
  					<input type="text" placeholder="Search.." onKeyUp={this.filter}/>
  					<button class="addbtn">New User</button>
  				</div>
  				<div>
  				{this.state.personList.map(person=>
  					
                	<Jobcard img={person.avatar} id={person.id} firstName={person.first_name} lastName={person.last_name}/>
                	
                	
                	)		
				}
				</div>
			</div>
        );
    }
}

class Jobcard extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
				<div className="content">
  					<div className="jobcard">
  					<img src={this.props.img}/>
  					<p>ID : {this.props.id}</p>
  					<p>First Name : {this.props.firstName}</p>
  					<p>Last Name : {this.props.lastName}</p>
  					</div>	
			</div>
			</div>
        )
    }
}


export default Home;
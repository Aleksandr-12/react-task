import React, { Component } from 'react';

var Values = {
	password1: 123,
	name1: 'user'
}

 export default class reg extends Component {
    
			
	constructor(props){
		super(props);
		
		
		this.state = {password2: ''};
		
		this.state = {name:'' };
		this.state = {isAuth:'' };
		this.state = {message:'' };
	}
	
	

 
 save = (e)  =>{
    e.preventDefault()
	
	
	
	this.setState({name: this.refs.name.value});
	this.setState({password2: this.refs.password2.value});
	
	if(( Values.name1 == this.state.name) && (Values.password1 == this.state.password2)) {
		this.setState({isAuth: true});
		this.setState({message: 'Вы успешно авторизированы'});
		localStorage.setItem("isAuth","isAuth");
		this.props.profile();
	}else{
		this.setState({message: 'Вы ввели не верно логин/пароль!'});
		
		this.setState({isAuth: false});
	}
	
	
	   
  }
  
  render() {
	 
    return (
	<div >
	<form>
  
  <div className="form-group">
  {this.state.message}
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" ref="password2" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text" className="form-control" ref="name" id="exampleInputName" placeholder="Name" />
  </div>
  <button  onClick={this.save} className="btn btn-primary">Submit</button>
</form>

    
		
		<h2>{this.state.password1} </h2>
        <h2>{this.state.name} </h2>
        <h2>{this.state.name1} </h2>
    
		
		
       
        
		
		
		
	 </div>
    );
  }
}


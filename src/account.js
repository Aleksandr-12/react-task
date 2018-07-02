import React, { Component } from 'react';

 export default class account extends Component{
	
	constructor(props){
		super(props);
	}
  render () {
    return (
      <div>
        <h2>Account Details</h2>
        <ul className="form-fields">
          <li>
            <label>Name</label>
            <input type="text" ref="name"  />
          </li>
          <li>
            <label>Password</label>
            <input type="password" ref="password"  />
          </li>
          <li>
            <label>Email</label>
            <input type="email" ref="email"  />
			
          </li>
          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save </button>
          </li>
        </ul>
		
		{this.props.Values.email}
			
      </div>
    );
  }

  nextStep = (e)  =>{
    e.preventDefault()

    
    var data = {
      name     : this.refs.name.value,
      password : this.refs.password.value,
      email    : this.refs.email.value
    }

    this.props.saveValues(data)
   
  }
}


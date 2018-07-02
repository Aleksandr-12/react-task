import React from 'react';
import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';

import Reg from './reg';
import Header from './header';
import Footer from './footer';

import Home from './home';

import New from './news';
import Profile from './profile';



class App extends React.Component {
	
	constructor(props){
		
		super(props);
		this.state = {C: ''};
		
	}
	/* getInitialState = () => {
			return {
			  step : 0
			}
		  }*/

	
	
	ShowComp = () => {
		switch (this.state.C){
			case 'reg':
				return <Reg profile={this.profile} />
			case 'profile':
				return <Profile registr={this.registr}  />
			case 'news':
				return <New />
			case 'home':
			 return <Home />
		
		}
		
	}
	
	registr = () => {
		var vib = 'reg';
		
		this.setState({C: vib});
		
	}
	profile = () => {
		var localValue = localStorage.getItem("isAuth");
		if(localValue){
			var vib = 'profile';
		}else{
			vib = 'reg';
		}
		
		
		this.setState({C: vib});
		
	}
	news = () => {
		var vib = 'news';
		
		this.setState({C: vib});
		
	}
	home = () => {
		var vib = 'home';
		
		this.setState({C: vib});
		
	}
	
  render() {
    return (
     <div className="container">
	
		<Header
			registr={this.registr}
			profile={this.profile}
			news={this.news}
			home={this.home}
		/>
		
		{this.ShowComp()? this.ShowComp(): <Home />}
				
		<h2>Sity Digital</h2>
		
		<Footer 
			registr={this.registr}
			profile={this.profile}
			news={this.news}
			home={this.home}
		/>
		</div>
    );
  }
}
 ReactDOM.render((
	
	<App />
		/*<Router history={hashHistory}>
			   <Route path="/" component={App}/>
			  <Route path="/new" component={NewComponent}/>
		</Router>*/
	
	),document.getElementById('root'));


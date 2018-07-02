import React from 'react';


export default class footer extends React.Component {
	
	constructor(props){
		super(props);
	}
	
  render() {
    return (
     <div>
	
		
	
		
		<ul className="nav">
  <li className="nav-item">
    <a className="nav-link  active" onClick={this.props.home}  href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={this.props.news} href="#">News</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={this.props.profile} href="#">Profile</a>
  </li>
  
</ul>
		
		
		</div>
    );
  }
}
 
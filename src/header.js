import React from 'react';


export default class  header extends React.Component {
	
	constructor(props){
		super(props);
	}
	
  render() {
    return (
     <div>
	
		
	
		
		<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <button className="nav-link" onClick={this.props.home} >Home <span className="sr-only">(current)</span></button>
      </li>
      <li className="nav-item">
            <button className="nav-link" onClick={this.props.news} >News <span className="sr-only">(current)</span></button>
    
      </li>
      <li className="nav-item">
           <button className="nav-link" onClick={this.props.profile} >Profile<span className="sr-only">(current)</span></button>
    
      </li>
      <li className="nav-item">
            <button className="nav-link" onClick={this.props.registr} >authorization<span className="sr-only">(current)</span></button>
    
      </li>
    </ul>
  </div>
</nav>
		
		
		</div>
    );
  }
}
 


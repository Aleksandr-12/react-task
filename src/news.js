import React from 'react';


	
export default class news extends React.Component {
	
	constructor(props){
		super(props);
		  this.state = {
                titles:'Preisangaben', 
                name: [ 
                    {values: [
                        {name: 'Dakaufspreis', value: '123'}, 
                        {name: 'Verkaufpreis', value: '345'},
                        {name: 'Wahruns:',     value: '567'}
                        ]}
                    ],
                titles1:'Preisan', 
                values1: [
                    {name: 'Dakauf', value: '1'}, 
                    {name: 'Verkauf', value: '2'},
                    {name: 'Wah:',     value: '3'}
                    ],
        }
	};
	

	
  render() {
	  return (
	  <div>
		<ul class="list-group">
		  <li class="list-group-item active">Cras justo odio</li>
		  <li class="list-group-item">Dapibus ac facilisis in</li>
		  <li class="list-group-item">Morbi leo risus</li>
		  <li class="list-group-item">Porta ac consectetur ac</li>
		  <li class="list-group-item">Vestibulum at eros</li>
		</ul>
	</div>
	  )
  }
}
 
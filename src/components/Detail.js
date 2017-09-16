import React from 'react'

export default class Detail extends React.Component{
	render(){
		return(
			<div>
			
			   <h1> Detail  </h1>
			   <p>{this.props.match.params.id} </p>
			
			
			</div>
		)
	}
}






import React from 'react'

//引入子组件
import Nav from './Nav'

export default class Discover extends React.Component{
	render(){
		return(
			<div>
			
			Discover
			
			
			  <Nav path={this.props.match.path} />
			</div>
		)
	}
}






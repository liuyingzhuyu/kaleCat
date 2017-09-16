
import React from 'react'

//引入子组件
import Nav from './Nav'



export default class Orders extends React.Component{
	render(){
		return(
			<div>
			
			Orders
			
			
			  <Nav path={this.props.match.path} />
			</div>
		)
	}
}






import React from 'react'


//引入子组件
import Nav from './Nav'

export default class Cart extends React.Component{
	render(){
		return(
			<div>
			
			Cart
			
			
			  <Nav path={this.props.match.path} />
			</div>
		)
	}
}






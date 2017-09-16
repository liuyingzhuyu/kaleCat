import React from 'react'


//引入子组件
import Nav from './Nav'

export default class My extends React.Component{
	
	render(){
		
		return(
			<div>
			
			My
			
		<p>sdddddddd</p>
			  <Nav path={this.props.match.path} />
			</div>
		)
	}
}






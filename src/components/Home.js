import React from 'react'
//import {Link} from 'react-router-dom'    //路由
//import {connect} from 'react-redux'  //react-redux
import HomeGoods from './HomeComponents/HomeGoods'


//引入子组件
import Nav from './Nav'
import HomeHeader from './HomeComponents/HomeHeader'



class Home extends React.Component{
   
	render(){
//         console.log(this)
		return(
			<div className='home'>
			   
			     <HomeHeader/>
			     <HomeGoods />
			    <Nav path={this.props.match.path} />
			</div>
		)
	}
}

export default Home


















// class HomeUI extends React.Component{
//
//	render(){
//
//		return(
//			<div className='home'>
//			   
//			     <HomeHeader/>
//			     <HomeGoods />
//			    <Nav path={this.props.match.path} />
//			</div>
//		)
//	}
//}
//const mapStateToProps=(state)=>{  //把state的值赋给props
//	return {
//		
//	}
//}
//const mapDispatchToProps=(dispatch)=>{ //把dispatch的值赋给props
//	return {
//		fetchListData:()=>{
//
//
//		}
//	}
//
//}
//
////容器组件
//const Home=connect(mapStateToProps,mapDispatchToProps)(HomeUI)
//
//export default Home   

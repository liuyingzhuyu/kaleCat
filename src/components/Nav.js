import React from 'react'
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom' 
//配置路由及二级路由

class NavUI extends React.Component{ 
	  constructor(){
	  	super()
	  	
	  	this.changeColor=this.changeColor.bind(this)
	  }
	  changeColor(type){
//	    	console.log(this.props.path)
	  	return this.props.path===type?'active':""
	  }
    render(){
    	return(
    			 <nav className="bar bar-tab">
						    <Link className={"tab-item external "+this.changeColor('/')}  to="/">
						        <span className="icon iconfont icon-shouye"></span>
						        <span className="tab-label">外卖</span>
						    </Link>
						     <Link className={"tab-item external "+this.changeColor('/discover')}  to="/discover" >
						        <span className="icon iconfont icon-haiwaigou"></span>
						        <span className="tab-label">海外购</span>
						    </Link>
						      <Link className={"tab-item external "+this.changeColor('/orders')}  to="/orders" >
						        <span className="icon iconfont icon-GroupCopy"></span>
						        <span className="tab-label">秀场</span>
						    </Link>
						     <Link className={"tab-item external "+this.changeColor('/cart')}  to="/cart" >
						         <span className="icon iconfont icon-gouwuche"></span>
						         <span className="tab-label">购物车</span>
						    </Link>
						    
						     <Link className={"tab-item external "+this.changeColor('/my')} to="/my">
						        <span className="icon iconfont icon-wode"></span>
						        <span className="tab-label">我的</span>
						    </Link>
						</nav>
    	)
    }
}
const mapStateToProps=(state)=>{  //把state的值赋给props
	return {
		
	}
}
const mapDispatchToProps=(dispatch)=>{ //把dispatch的值赋给props
	return {
		
		}
	}



//容器组件
const Nav=connect(mapStateToProps,mapDispatchToProps)(NavUI)

export default Nav   

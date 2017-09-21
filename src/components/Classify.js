import React from 'react'
import LazyLoad,{ lazyload } from 'react-lazyload';
//import fecthDate from '../../fetch/fetch'

//import ClassifyList from "./ClassifyList"

//import { Card } from 'antd';
import { Link} from 'react-router-dom' 
import { connect } from 'react-redux'
import { Tabs,Icon  } from 'antd';
//const TabPane = Tabs.TabPane;

//设置数据库并获取数据
   class ClassifyUI extends React.Component{
        constructor(){
        	super()
        	this.state={
        		isShow:true,
        		goodsList:[]
        	}
        	this.handleClick=this.handleClick.bind(this)
        }
    componentWillMount(){
    	    this.state.goodsList=this.props.goodsList

    	    this.setState({
    	    	goodsList:this.state.goodsList
    	    })


    }
    handleClick(type){
    	console.log(type)
    	if(type==2){
    		this.state.goodsList.sort(function(prev,current){
     			return current.goodsSale-prev.goodsSale
     		}) 
     		 this.setState({
    	    	goodsList:this.state.goodsList
    	    })
     	}else if(type==3){
     		this.state.goodsList.sort(function(prev,current){
	     			return prev.goodsPrice-current.goodsPrice
	     		}) 
	     	 this.setState({
    	    	goodsList:this.state.goodsList
    	    })
     	}else{
     		this.setState({
    	    	goodsList:this.props.goodsList
    	    })

     	}

    }
	render(){
        
		return(
			 <div className='classify' >
		      
		        <ul className="tagtitle">
		           <li onClick={()=>this.handleClick(1)}   >
		                默认
		           </li>
		           <li   onClick={()=>this.handleClick(2)} >
		             销量
		           </li>
		           <li   onClick={()=>this.handleClick(3)}>
		             
		              价格  <Icon type="caret-down" />
		           </li>
		           <li   onClick={()=>this.handleClick(4)}>
		            新品
		           </li>
		        </ul>
		        <div className='classifyList'>
		         {
		         	this.state.goodsList.map((item,index)=>{
		         		return(
		         	      <Link to={'/detail/'+item._id} key={item.goodsName + index} className="toDetail">
		         			<div className='single-item' >
		         			   <LazyLoad height={200} offset={300} scroll={true}>
					               <img alt="example" src={item.goodsPic[0]}/>
					           </LazyLoad>
					           <div className="bref">
					              <h3>{item.goodsName}</h3>
					              <p className="price">￥ {item.goodsPrice}</p>
					              <p>已售{item.goodsSale}件  </p>
					              <div className="abox">
					                <Icon type="shopping-cart" className="cart"  />
					             </div>
					           </div>
					        </div>
					       </Link>
		         		)
		         	})
		         }
		  
		    </div> 
		     </div>
		)
	}
	

}
	
	
	

const mapStateToProps=(state)=>{  //把state的值赋给props

	return {
      goodsList: state.goodsList
	}
}


const mapDispatchToProps=(dispatch)=>{ //把dispatch的值赋给props
	return {

	}

}

//容器组件
const Classify=connect(mapStateToProps,mapDispatchToProps)(ClassifyUI)

export default Classify   



















//
// class HomeGoods extends React.Component{
// 	constructor(){
// 		super()
// 		this.state={
// 			goodsList:[]
// 		}
// 	}
//
//	render(){	
//		return(
//		    <div className='goods'>
//		          <h2>— 热卖商品—</h2>
//		         <section className='list'>
//		              	   {
//						            	this.state.goodsList.map((item,index)=>{
//						            		 return(
//						            		 	 <Link to={'/detail/'+item.goodsName} key={item.goodsName + index} className="toDetail">
//											             <Card >
//																	    <div className="custom-image">
//																	      <img alt="example" width="100%" src={item.goodsPic[0]} />
//																	    </div>
//																	    <div className="custom-card">
//																	      <span className="name">{item.goodsName}</span>
//																	      <p><span className="price">￥{item.goodsPrice}</span><span className="sale-num">已售:{item.goodsSale}</span></p>
//																	    </div>
//																	  </Card> 
//											        </Link>
//						            		
//						            		 )
//						            	})
//						          } 
//		          
//		         </section>
//		         
//		    
//		     
//		    </div>
//		)
//	}
//
//	
//	componentDidMount(){
//		var that=this
//		//获取商品列表数据
//			 fecthDate('/0914project/kaleCat/src/static/json/homeGoods.json',function(data){
//		  	that.setState({
//					goodsList:data
//				})
//		  })
//		
//		
//		
//	}
//	componentDidUpdate(){
//		
//	}
//	
//}
//
//
//export default HomeGoods   

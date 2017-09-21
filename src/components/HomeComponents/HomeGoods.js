import React from 'react'
import LazyLoad,{ lazyload } from 'react-lazyload';
import fecthDate from '../../fetch/fetch'

import { Card } from 'antd';
import { Link} from 'react-router-dom' 
import { connect } from 'react-redux'


//设置数据库并获取数据
   class HomeGoodsUI extends React.Component{

    componentWillMount(){

        this.props.fetchGoodsList()
    }
	render(){
//		console.log(this,"render")
//		console.log(this.props,"render")
       let {goodsList}=this.props
		return(
			  <div className='goods'>
		          <h2>— 热卖商品—</h2>
		            <section className='list'>
		              	{
			            	goodsList.map((item,index)=>{
			            		 return(
			            		 	 <Link to={'/detail/'+item._id} key={item.goodsName + index} className="toDetail">
								             <Card >
											    <div className="custom-image">
											      <LazyLoad height={200} offset={300} scroll={true}>
											        <img alt="example" width="100%" src={item.goodsPic[0]} />
											      </LazyLoad>
											    </div>
											    <div className="custom-card">
											      <span className="name">{item.goodsName}</span>
											      <p><span className="price">￥{item.goodsPrice}</span><span className="sale-num">已售:{item.goodsSale}</span></p>
											    </div>
											  </Card> 
								    </Link>
			            		
			            		 )
			            	})
						} 
                    </section>
		      
		    </div>
		)
	}
	

}
const mapStateToProps=(state)=>{  //把state的值赋给props
// console.log(state,"ooooooooooo")
	return {
		goodsList: state.goodsList
	}
}


const mapDispatchToProps=(dispatch)=>{ //把dispatch的值赋给props
	return {
		fetchGoodsList:()=>{

					//获取商品列表数据
						 fecthDate('/api/list',function(data){
//	                     fecthDate('/0914project/kaleCat/src/static/json/homeGoods.json',function(data){
//						 	console.log(data,"8888888888888888888")
					  	dispatch({
								type:"GOODLIST",
								payload:data
							})
					  })
			
		}
	}

}

//容器组件
const HomeGoods=connect(mapStateToProps,mapDispatchToProps)(HomeGoodsUI)

export default HomeGoods   



















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

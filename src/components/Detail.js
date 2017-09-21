import React from 'react'
import { Icon,Button  } from 'antd';
import fecthDate from '../fetch/fetch'
import { Link} from 'react-router-dom' 
import { connect } from 'react-redux'

class DetailUI extends React.Component {

	constructor() {
		super()
		
		this.state = {
			goods: {}
		}
		

		this.goods_pics_swiper = null
	}
	componentWillMount(){
//		console.log(this, "componentWillMount")
       console.log(this.props.goodsList, "props")
		   var goodsList = this.props.goodsList
		   var id = this.props.match.params.id
			for(var i = 0; i < goodsList.length; i++) {
			if(goodsList[i]._id == id) {
//				console.log(this, "MMMMMMMMMMMMMMMMMMM")
//				console.log(goodsList[i],"MMMMMMMMMMMMMMM")
				
				this.setState({
					goods: goodsList[i]
				})
				break;
			}
		}
		
	}
	render() {
		console.log(this, "DDDDDDDDDDDDDD")
		console.log(this.state.goods, "DDDDDDDDDDDDDD")
     let  { goods } = this.state
	return(
			<div className="detail">
			  
		        <div className="swiper-container  goods_pics_swiper">
			        <div className="swiper-wrapper"  >
			           
			            {
			            	goods.goodsPic.map((pic,index)=>{
			            		return (
			            			 <div className="swiper-slide" key={'p'+index}>
						               <img src={pic}  alt="请重新加载" />
						            </div>
			            		)
			            	})
			            }
			        </div>
			      
			        <div className="swiper-pagination"></div>
			    </div>
			    <div className='sale_condition'>
			         <span className="nowPrice"><b className="unit"> ￥</b>{goods.goodsPrice}</span>
			        原价:<span className="originPrice">{goods.goodsPrice +100}</span>
			      
			      <span className='sale_num'> 已售:{goods.goodsSale} 件</span>
			    </div>
			    <article>
			      {goods.goodsName}
			    </article>
			    <aside>
			        <span className="rr"></span><span>正品保证</span>
			        <span className="rr"></span><span>正品保证</span>
			        <span className="rr"></span><span>正品保证</span>
			    </aside>
			    <Link to={"/evaluate/"+ goods._id}  className="tiaozhuan">
			         <p className='praise'>
				      
				       <span >100%好评率</span>
				       <span >查看全部评价<Icon type="right" /> </span>
				    </p>
				    
			    
			    </Link>
			  
			    <div className="resource">
			       <p>
			           <img alt="" src= {goods.brand_logo}/>
				       <span className="shop_title"> {goods.brand_name}</span>
				       <span className="Special"> 进入专场<Icon type="right" /> </span>
			       </p>
			       <p className="descri"> {goods.brand_desc}</p>
			   
			    </div>
			    <div className='productDetails'>
			       <h3>产品详情</h3>
			       <p className="tip">{goods.tip}   </p>
			       {
			       	  goods.detail.map((item,index)=>{
			       	  	return(
			       	  		<p key={"adfasf"+index}>
						        <img alt="" src={item} />
						    </p>
			       	  	)
			       	  })	
			       }
			       
			
			    </div>
			
			  <div className="purchase">
			       <Icon className="collection" type="heart-o" style={{ fontSize: ".8rem" }}/>
			      <Button className="cart" size="large">加入购物车</Button>
			      <Button className="buy" size="large"  type="primary">立即购买</Button>
			  </div>
			</div>
		)
	}
	componentDidMount() {
		//轮播组件实例化
		// window.Swiper  在整个window中寻找
		this.goods_pics_swiper = new window.Swiper('.goods_pics_swiper', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay: 3000
		})

	}
	componentDidUpdate() {
		console.log('componentDidUpdate')
		if(this.goods_pics_swiper) {
			this.goods_pics_swiper.update() //轮播组件更新
		}
	}

}

const mapStateToProps = (state) => { //把state的值赋给props
//	console.log(state, "ooooooooooo")
	return {
		goodsList: state.goodsList
	}
}
const mapDispatchToProps = (dispatch) => { //把dispatch的值赋给props
	return {
		//		fetchGoodsList:()=>{
		//
		//					//获取商品列表数据
		//						 fecthDate('/0914project/kaleCat/src/static/json/homeGoods.json',function(data){
		//					  	dispatch({
		//								type:"GOODLIST",
		//								payload:data
		//							})
		//					  })
		//			
		//		}
	}

}

//容器组件
const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailUI)

export default Detail

//静态页面
//	return(
//			<div className="detail">
//			  
//		        <div className="swiper-container  goods_pics_swiper">
//			        <div className="swiper-wrapper">
//			            <div className="swiper-slide">
//			               <img src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/8511502939462259.jpg"  alt="请重新加载图片" />
//			            </div>
//			              <div className="swiper-slide">
//			               <img src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/8511502939462259.jpg"  alt="请重新加载图片" />
//			            </div>
//			            <div className="swiper-slide">
//			               <img src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/8511502939462259.jpg"  alt="请重新加载图片" />
//			            </div>
//			        </div>
//			      
//			        <div className="swiper-pagination"></div>
//			    </div>
//			    <div className='sale_condition'>
//			         <span className="nowPrice"><b className="unit"> ￥</b> 2312</span>
//			        原价:<span className="originPrice">324</span>
//			      
//			      <span className='sale_num'> 已售:34234 件</span>
//			    </div>
//			    <article>
//			    [五羊]婴儿 健康洗手液 250ml*2支
//			    </article>
//			    <aside>
//			        <span className="rr"></span><span>正品保证</span>
//			        <span className="rr"></span><span>正品保证</span>
//			        <span className="rr"></span><span>正品保证</span>
//			    </aside>
//			    <p className='praise'>
//			       <span >100%好评率</span>
//			       <span >查看全部评价<Icon type="right" /> </span>
//			    </p>
//			    <div className="resource">
//			       <p>
//			           <img alt="" src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/3231500180641886.jpg"/>
//				       <span className="shop_title">五羊</span>
//				       <span className="Special"> 进入专场<Icon type="right" /> </span>
//			       </p>
//			       <p className="descri">五羊集团是一家拥有国际视野并领先世界的中国母婴用品创新公司，品牌最早可追溯至1914年。我们始终坚持“秉承为人父母之心”的理念，集合全球研发团队的力量，致力于为0-3岁婴幼儿及孕产期妈妈提供安全、优质、可靠、全面的产品及服务。集团生产的婴儿纸尿裤，婴儿洗衣液，婴儿湿巾，婴儿护肤品，孕产期护理用品及其它母婴用品，已经超过1000万中国家庭口碑实证，热销全球市场。</p>
//			   
//			    </div>
//			    <div className='productDetails'>
//			       <h3>产品详情</h3>
//			       <p className="tip">收到回复会计理论和房价来看撒娇     </p>
//			       <p>
//			        <img alt="" src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/3131502939567897.jpg" />
//			       
//			       </p>
//			       
//			
//			    </div>
//			
//			 
//			</div>
//		)
















//动态化页面
//return(
//			<div className="detail">
//			  
//		        <div className="swiper-container  goods_pics_swiper">
//			        <div className="swiper-wrapper"  >
//			           
//			            {
//			            	goods.goodsPic.map((pic,index)=>{
//			            		return (
//			            			 <div className="swiper-slide" key={'p'+index}>
//						               <img src={pic}  alt="请重新加载" />
//						            </div>
//			            		)
//			            	})
//			            }
//			        </div>
//			      
//			        <div className="swiper-pagination"></div>
//			    </div>
//			    <div className='sale_condition'>
//			         <span className="nowPrice"><b className="unit"> ￥</b>{goods.goodsPrice}</span>
//			        原价:<span className="originPrice">{goods.goodsPrice +100}</span>
//			      
//			      <span className='sale_num'> 已售:{goods.goodsSale} 件</span>
//			    </div>
//			    <article>
//			      {goods.goodsName}
//			    </article>
//			    <aside>
//			        <span className="rr"></span><span>正品保证</span>
//			        <span className="rr"></span><span>正品保证</span>
//			        <span className="rr"></span><span>正品保证</span>
//			    </aside>
//			    <link to="/evaluate/1"  className="tiaozhuan">
//			         <p className='praise'>
//				      
//				       <span >100%好评率</span>
//				       <span >查看全部评价<Icon type="right" /> </span>
//				    </p>
//				    
//			    
//			    </link>
//			  
//			    <div className="resource">
//			       <p>
//			           <img alt="" src= {goods.brand_logo}/>
//				       <span className="shop_title"> {goods.brand_name}</span>
//				       <span className="Special"> 进入专场<Icon type="right" /> </span>
//			       </p>
//			       <p className="descri"> {goods.brand_desc}</p>
//			   
//			    </div>
//			    <div className='productDetails'>
//			       <h3>产品详情</h3>
//			       <p className="tip">{goods.tip}   </p>
//			       {
//			       	  goods.detail.map((item,index)=>{
//			       	  	return(
//			       	  		<p key={"adfasf"+index}>
//						        <img alt="" src={item} />
//						    </p>
//			       	  	)
//			       	  })	
//			       }
//			       
//			
//			    </div>
//			
//			 
//			</div>
//		)






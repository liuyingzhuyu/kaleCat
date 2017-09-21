import React from 'react'
import fecthDate from '../../fetch/fetch'




 class HomeHeader extends React.Component{
 	constructor(){
 		super()
 		this.state={
 			swiperList:[],
 			vipList:[]
 		}
 		this.headerSwiper=null
 		
 		
 	}
	render(){
		return(
			<header>
			     <div className="swiper-container headerSwiper">
			        <div className="swiper-wrapper">
			             {
			             	this.state.swiperList.map((item,index)=>{
			             		return (
			             			<div className="swiper-slide  " key={item.pic_path} style={{"backgroundImage":"url("+item.pic_path+")"}}>
			             		    
			             		    </div>
			             		)
			             		
			             	})
			             }
			            
			         </div>
			        <div className="swiper-scrollbar"></div>
			    </div>
			  
			    <nav className="bar  classify">
	                <a className="tab-item external " >
	                    <span className="icon iconfont icon-quanbu"></span>
	                    <span className="tab-label">全部</span>
	                </a>
	                <a className="tab-item external" >
	                    <span className="icon iconfont icon-muying"></span>
	                    <span className="tab-label">母婴</span>
	                </a>
	                <a className="tab-item external" >
	                    <span className="icon iconfont icon-jiaju"></span>
	                    <span className="tab-label">家具</span>
	                </a>
	                <a className="tab-item external" >
	                    <span className="icon iconfont icon-meizhuang"></span>
	                    <span className="tab-label">美妆</span>
	                </a>
	                <a className="tab-item external" >
	                    <span className="icon iconfont icon-tubiao"></span>
	                    <span className="tab-label">食品</span>
	                </a>
	            </nav>
			    <div className='activity'>
			    
			        <img alt='' src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/211505093777839.jpg"/>
			    
			    
			    </div>
			   <div className='Propaganda'>
			  
			       <img alt='' className='left' src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/8071505095060689.jpg"/>
			       <img alt=''  className='right-top'   src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/3801505095114202.jpg"/>
			       <img alt=''  className='right-bottom' src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/7671505095187155.jpg"/>
			       <img alt='' className='right-bottom'src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/4611505095196672.jpg"/>
			    </div>
			  <a className='vip' >
			 <img alt='' src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/9691505096596176.jpg"/>
			 
			 </a >

		
			</header>
		)
	}
//			   {////获取vip页面
//				
//					this.state.vipList.map((item,index)=>{
//						  	
//						  	return(
//						  		<a className='vip limit' key={item.pic_path ,index}>
//								 <img alt="图标加载未成功"  src={item.pic_path}/>
//								 
//							    </a >
//						  	)
//						  })
//				
//			    }
	
	componentDidMount(){
		 //轮播组件实例化
		 // window.Swiper  在整个window中寻找
		    this.headerSwiper = new window.Swiper('.headerSwiper',{
			    scrollbar: '.swiper-scrollbar',
		        scrollbarHide: false,
		        slidesPerView: 'auto',
		        centeredSlides: true,
		        spaceBetween: 30,
		        grabCursor: true,
		        autoplay : 3000,
		  });
//		  console.log(this.headerSwiper)
		  var that=this
		  //获取轮播图
//		 fecthDate('api/swiper',function(data){
	     fecthDate('/0914project/kaleCat/src/static/json/homeSwiper.json',function(data){
//		 	console.log(data,"888888888888888888888888")
		  	that.setState({
					swiperList:data
				})
		  })
		  
		 //获取vip页面
//		fecthDate('/0914project/kaleCat/src/static/json/homeVip.json',function(data){
//		  	that.setState({
//					vipList:data
//				})
//		  })
		
	}
	
	componentDidUpdate(){
		if(this.headerSwiper){
			 this.headerSwiper.update() //轮播组件更新
		}
	}
	
	
	
	
	
	
	

}


export default HomeHeader   

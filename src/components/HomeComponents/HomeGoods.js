import React from 'react'
import fecthDate from '../../fetch/fetch'

import { Card } from 'antd';

 class HomeGoods extends React.Component{
 	constructor(){
 		super()
 		this.state={
 			
 		}
 	
 		
 	}
	render(){
		return(
		    <div className='goods'>
		          <h2>— 热卖商品—</h2>
		         <section className='list'>
		             <Card >
					    <div className="custom-image">
					      <img alt="example" width="100%" src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/5391504085911347.jpg" />
					    </div>
					    <div className="custom-card">
					      <span className="name">[REMAX/乐速]苹果数据线充电线（白色）</span>
					      <p><span className="price">￥9.90</span><span className="sale-num">已售:127</span></p>
					    </div>
					  </Card> 
		            <Card >
					    <div className="custom-image">
					      <img alt="example" width="100%" src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/8071504260079915.jpg" />
					    </div>
					    <div className="custom-card">
					      <span className="name">[REMAX/乐速]苹果数据线充电线（白色）</span>
					      <p><span className="price">￥9.90</span><span className="sale-num">已售:127</span></p>
					    </div>
					  </Card> 
		             <Card >
					    <div className="custom-image">
					      <img alt="example" width="100%" src="http://kalemao.img-cn-hangzhou.aliyuncs.com/idc/9701502939455220.jpg" />
					    </div>
					    <div className="custom-card">
					       <span className="name">[REMAX/乐速]苹果数据线充电线（白色）</span>
					      <p><span className="price">￥9.90</span><span className="sale-num">已售:127</span></p>
					    </div>
					  </Card> 
		         </section>
		         
		    
		     
		    </div>
		)
	}

	
	componentDidMount(){
	}
	componentDidUpdate(){
		
	}
	
	
	
	
	
	
	

}


export default HomeGoods   

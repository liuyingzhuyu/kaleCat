import React from 'react'
//import fecthDate from '../fetch/fetch'

//import { Card } from 'antd';
//import { Link} from 'react-router-dom' 
import { connect } from 'react-redux'


import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;


//设置数据库并获取数据
   class EvaluateUI extends React.Component{
   	 constructor() {
		super()
		this.state = {
			goods: {}
		}

	}
   	
  	componentWillMount(){
		console.log(this, "componentWillMount")
		   var goodsList = this.props.goodsList
		   var id = this.props.match.params.id
			for(var i = 0; i < goodsList.length; i++) {
			if(goodsList[i]._id == id) {
				this.setState({
					goods: goodsList[i]
				})
				console.log(this.state.goods)
				break;
			}
		}
		
	}
	render(){
		 console.log(this.state.goods,"呃呃鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅")
     let  { goods } = this.state
		return(
			  <div className='evaluate'>
		      
		         <Tabs defaultActiveKey="1" size="small">
				    <TabPane tab={<span>全部</span>} key="1">
				        
				      {
				      	goods.evaluate.map((item,index)=>{
				      	   return(
				      	   	 <div className="pingjia" key={"evaluate"+index}>
					            <div className="user">
						             <img alt=" " src={item.userPic}/>
						             <span>{item.userName}</span>
					            </div>
					            <p className="usercontent">
					               {item.content}
					               
					            </p>
						         <p className="date">
						            {item.time} 
					             
					            </p>
					        </div>
				      	   )
				      	})
				      }
			
				    </TabPane>
				    <TabPane tab={<span> <Icon type="smile-o" />好评</span>} key="2">
				      222222222
				    </TabPane>
				    <TabPane tab={<span><Icon type="meh-o" />中评</span>} key="3">
				      33333333333
				    </TabPane>
				    <TabPane tab={<span><Icon type="frown-o" />差评</span>} key="4">
				      444444444
				    </TabPane>
                </Tabs>
		       
		       
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

	}

}

//容器组件
const Evaluate=connect(mapStateToProps,mapDispatchToProps)(EvaluateUI)

export default Evaluate   




















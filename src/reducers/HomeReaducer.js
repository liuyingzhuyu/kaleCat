

//创建reducer
export default (state=[],action)=>{
	switch(action.type){
		case 'GET_HOME_DATA':
		     return action.payload
		default:
		    return  state
	}
	
}

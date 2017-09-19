

//创建reducer
export default (state=[],action)=>{
    
	switch(action.type){
		case 'GOODLIST':
//		state= state.concat(action.payload)
//		   console.log(state,"mmmmmmmmmm") 

		     return action.payload;
		default:
		    return state;
	}
	
}

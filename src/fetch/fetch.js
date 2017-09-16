	   
const fecthDate=(url,callback)=>{
		   
			fetch(url).then((res)=>{
			  return res.json()
			}).then((data)=>{
				console.log(data)
				callback(data)
			})
		
	}
	

export default fecthDate


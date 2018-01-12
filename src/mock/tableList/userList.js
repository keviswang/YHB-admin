import userList from 'static/json/userList'


export default{
	postUserCount: config => {
		let num = userList.length;//总数据长度
		console.log(config)
		let pageSize = JSON.parse(config.body).pageSize; //每页几条
		let pageNumber = Math.ceil(num/pageSize)//需要返回到前台的页数  向上取整数
		let data = {
			num : userList.length,
			count:pageNumber
		}
//		console.log(pageNumber)
		return data
	},
	postUserLists: config => {
		let userLists = new Array;
		let data = JSON.parse(config.body)
		let page = data.page
//		console.log(data)
		let pageSize = data.pageSize; //默认每页十条
		
		for(let x in userList) {
//			console.log(userList[x])
			if(x >= ((page-1)*pageSize) && x < ((page-1)*pageSize+pageSize)) {
				userLists.push(userList[x])
			}
			
		}
		
//		console.log(config)
		return userLists
	}
}

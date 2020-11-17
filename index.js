const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

Promise.all([
	axios.get('http://localhost:3001/movies'), 
	axios.get('http://localhost:3002/clothes')
]).then(resps =>{
	let data = [];

	resps.forEach(res =>{
		data.push(res.data);
	});

	app.get('/', (req, res) => {
		res.send(data)
	})
});


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})


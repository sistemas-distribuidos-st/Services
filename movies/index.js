const express = require('express')
const app = express()
const port = 3001

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const movies=[
	{name:"Parasite", year:2019, id:1}
];

//create
app.post('/movies/insert', (req, res) => {
	let con = req.body;
	movies.push(con)
	res.send("Agregado: " + con.name + " " + con.id)
})

//read
app.get('/movies/:contactId', (req, res) => {
	let con = movies[req.params.contactId]
	if(con)
		res.send("Nombre: " + con.name + "<br>ID: " + con.id)
	else
		res.send("No existe")
})

//update
app.put('/movies/update/:contactId', (req, res) => {
	let con = movies[req.params.contactId]
	if(con){
		con = movies[req.params.contactId] = req.body
		res.send("Nombre: " + con.name + "<br>ID: " + con.id)
	}else
		res.send("No existe")
})

//delete
app.delete('/movies/remove/:contactId', (req, res) => {
	let con = movies[req.params.contactId]
	movies.splice(req.params.contactId,1)
	res.send("Eliminado: " + req.params.contactId)
})

app.get('/movies', (req, res) => {
	res.send(movies)
})

app.get('/', (req, res) => {
	res.send('Bienvenido<br><a href="movies">Ver peliculas</a>')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

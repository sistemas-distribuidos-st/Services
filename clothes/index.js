const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded());

const clotheList = [
    {id:100,description:'CAMISETA BÁSICA SLIM MANGA LARGA',brand:'Zara',category:'Camisetas',color:'negro',size:'S'},
    {id:101,description:'JEANS STANDARD SLIM FIT',brand:'Zara',category:'Jeans',color:'azul',size:'30'},
    {id:102,description:'ABRIGO PAÑO CONFORT',brand:'Zara',category:'Abrigos',color:'gris',size:'XS'},
    {id:103,description:'SUDADERA BÁSICA CAPUCHA',brand:'Zara',category:'Sudaderas',color:'verde',size:'M'}
]

app.get('/clothes', (req, res) => {
	res.send(clotheList)
})

app.post('/clothes/new', (req, res) => {
    const newPiece = req.body
    clotheList.push(newPiece)
    res.send('Pieza agregada con éxito')
})


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)

})

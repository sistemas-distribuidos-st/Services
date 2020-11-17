const express = require('express')
const app = express()
const port = 3003
const phones = [{ id: 0, brand: "xiaomi", reference: "Redmi Note 9", price: "590000" },
    { id: 1, brand: "Alcatel", reference: "Pop 9", price: "4500000" }
]

app.use(express.json())

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    console.log(req.params)
    var cant = phones.length
    if (req.params.id < cant) {
        var i = phones[req.params.id]
        res.send(i.brand + " - " + i.reference + " - " + i.price)
    } else {
        res.send("No existe")
    }

})

app.post('/phones/add', (req, res) => {
    console.log(req.body)
    var i = req.body
    phones.push(i)
    res.send(req.body.brand + " - " + req.body.reference + " - " + req.body.price)
})

app.delete('/phones/delete/:id', (req, res) => {
    phones.splice(req.params.id, 1)
    res.send("Eliminado")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
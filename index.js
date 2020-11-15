const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/phones/', (req, res) => {
    console.log(req.body)
})

app.get('/phone/:brand', (req, res) => {
    console.log(req.params.brand)
    if (req.params.brand === 'xiaomi') {
        res.send('Redmi Note 9 - $596.000')
    }
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express();

const models = require('./models')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello from root')
})

app.use('/classes', require('./controllers/classesController.js'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('server on')
})
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Accessed')
    res.render('index')
})

app.listen(3000, () => {
    console.log('RUNNING ON PORT 3000')
})
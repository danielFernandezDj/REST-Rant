require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
// app.set('views', __dirname + '../rest-rant/views')

// Controllers & Routes
app.use('/places', require('./controllers/places'))

// The first address
app.get('/', (req, res) => {
    res.render('home')
})

// 404 page
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// To live the server open
app.listen(process.env.PORT)




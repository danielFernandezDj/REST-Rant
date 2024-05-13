// Modules and Globals.
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))

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

// Listen for connection.
app.listen(process.env.PORT)




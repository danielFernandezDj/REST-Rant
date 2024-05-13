const router = require('express').Router()
const places = require('../models/places')

// Post /places
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/public/images/fish.avif'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// Add a new Place page.
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  console.log('Route accessed with id:', req.params.id);
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(404).render('error404')
  } else if (!places[id]) {
    res.status(404).render('error404')
  } else {
    res.render('places/show', { place: places[id], id })
  }
})

module.exports = router

const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'images/thai-food.jpeg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'images/cofee.jpeg'
  }]

  res.render('places/index', { places });
})

// Add a new Place page.
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } else if (!places[id]) {
    res.render('error404')
  } else {
    res.render('places/show', { place: places[id], id })
  }
})



module.exports = router

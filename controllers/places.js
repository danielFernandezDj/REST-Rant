const router = require('express').Router()
const db = require('../models')

// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// INDEX
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

// PLACE
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }

  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', { message })
      }
      else {
        res.render('error404')
      }
    })
})

// SHOW
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// CREATE COMMENT
router.post("/:id/comment", (req, res) => {
  console.log(req.body);

  // Ensure that the stars field is correctly parsed as a number
  req.body.stars = parseFloat(req.body.stars);
  req.body.rant = req.body.rant ? true : false;

  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place
            .save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`);
            })
            .catch((err) => {
              console.log(err);
              res.render("error404");
            });
        })
        .catch((err) => {
          console.log(err);
          res.render("error404");
        });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// UPDATE
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// EDIT 
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      res.render("error404");
    });
});

// Rant
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// DELETE Stub
router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
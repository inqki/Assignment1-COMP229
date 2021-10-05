var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        h1: 'Assignment1' 
});
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express',
                        h1: 'Assignment1' 
});
});

router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'Express',
                        h1: 'Assignment1' 
});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express',
                        h1: 'Assignment1' 
});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express',
                        h1: 'Assignment1' 
});
});

module.exports = router;

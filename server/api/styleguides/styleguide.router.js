'use strict';

var router = require('express').Router();

var Styleguide = require('./styleguide.model');


router.get('/', function (req, res, next) {
  Styleguide.findAll({})
  .then(function (styleguides) {
    res.json(styleguides);
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  console.log("body is ..... ", req.body)
  Styleguide.create(req.body)
  .then(styleguide => res.status(201).json(styleguide))
  .catch(next);
});


module.exports = router;

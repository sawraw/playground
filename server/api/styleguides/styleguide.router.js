'use strict';

var router = require('express').Router();

var Styleguide = require('./styleguide.model');


router.get('/', function (req, res, next) {
  console.log("made it to styleguides~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  Styleguide.findAll({})
  .then(function (styleguides) {
    res.json(styleguides);
  })
  .catch(next);
});

module.exports = router;

'use strict';

var Sequelize = require('sequelize');
var db = require('../../_db');

var Styleguide = db.define('styleguide', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
backdrop: {
    type: Sequelize.STRING,
    allowNull: false
  },
  captions: {
    type: Sequelize.STRING,
    allowNull: false
  },
  titles: {
    type: Sequelize.STRING,
    allowNull: false
  }
}
);

module.exports = Styleguide;

var express = require('express');
var router = express.Router();
var story = require('../../db/models/story')
var bodyParser = require('body-parser');
//var storyController = require('../../db/controllers/story.js');
//var dummyData = require('../../react-client/dummy_data');
router.use(bodyParser.urlencoded({ extended: false }));

///-----------------git the data from db -------------
router.route('/story')
  .get(function(req, res) {
    var authData = story.findAll();
     // TODO: Replace this with stories you've retrieved from the database
     res.json(authData);
  });
  
// Here we use express's route params
router.route('/story/:id')
  .get(function(req, res) {

  });

module.exports = router;

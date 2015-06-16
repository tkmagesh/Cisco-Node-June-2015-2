var express = require('express');
var router = express.Router();

var taskList = [
    "Watch a movie",
    "Plan for dinner",
    "Fix that bug"
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tasks/list', {list : taskList});
});

router.get('/new', function(req, res, next) {
  res.render('tasks/new', {title : 'Add New Task'});
});

module.exports = router;

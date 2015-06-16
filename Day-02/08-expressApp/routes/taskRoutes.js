var express = require('express');
var router = express.Router();

var taskList = [
    {id : 1, name : "Watch a movie", isCompleted : false},
    {id : 2, name : "Plan for dinner", isCompleted : false},
    {id : 3, name : "Fix that bug", isCompleted : false},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('tasks/list', {list : taskList});
});

router.get('/new', function(req, res, next) {
  res.render('tasks/new', {title : 'Add New Task'});
});

router.post('/new', function(req, res, next){
    var newId = taskList.reduce(function(result, task){
        return result > task.id ? result : task.id;
    }) + 1;
    var task = {
        id : newId,
        name : req.body.newTask,
        isCompleted : false
    }
    taskList.push(task);
    res.redirect('/tasks');
});

router.get('/toggle/:taskId', function(req, res, next){
    var taskId = parseInt(req.params.taskId,10);
    var task = taskList.filter(function(t){ return t.id === taskId})[0];
    if (task){
        task.isCompleted = !task.isCompleted;
    }
    res.redirect('/tasks');
});

router.get('/removeCompleted', function(req, res, next){
    var completedTasks = taskList.filter(function(task){
        return task.isCompleted;
    });
    res.render('tasks/confirmRemove',{list : completedTasks});
});

router.post('/removeCompleted', function(req, res, next){
    for(var i=taskList.length-1; i >=0 ; i--){
        if (taskList[i].isCompleted)
            taskList.splice(i,1);
    }
    res.redirect('/tasks');
});

module.exports = router;

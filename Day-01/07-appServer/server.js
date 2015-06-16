var http = require('http');
var dataParser = require('./dataParser');
var staticServer = require('./staticServer');
var calculatorRouter = require('./calculatorRouter');
var employeesHandlers = require('./employeesHandlers');
var notFoundAction = require('./notFoundAction');
var app = require('./app');
var router = require('./router');

router.post('/calculator', calculatorRouter);
router.get('/employees/list', employeesHandlers.list);
router.post('/employees/save', employeesHandlers.save);


console.log(router.getHandlers());
app.use(dataParser);
app.use(staticServer);
app.use(router);
app.use(notFoundAction);

var server = http.createServer(app);
server.listen(8080);
console.log('server listening on port 8080');

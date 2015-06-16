var http = require('http');
var path = require("path");
var dataParser = require('./middlewares/dataParser');
var staticServer = require('./middlewares/staticServer');
var calculatorRouter = require('./handlers/calculatorRouter');
var employeesHandlers = require('./handlers/employeesHandlers');
var notFoundAction = require('./middlewares/notFoundAction');
var app = require('./app');
var router = require('./middlewares/router');

router.post('/calculator', calculatorRouter);
router.get('/employees/list', employeesHandlers.list);
router.post('/employees/save', employeesHandlers.save);

app.use(dataParser);
app.use(staticServer(path.join(__dirname, "/public")));
app.use(router);
app.use(notFoundAction);

var server = http.createServer(app);
server.listen(8080);
console.log('server listening on port 8080');

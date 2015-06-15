var http = require('http');
var dataParser = require('./dataParser');
var staticServer = require('./staticServer');
var calculatorRouter = require('./calculatorRouter');
var notFoundAction = require('./notFoundAction');
var app = require('./app');

app.use(dataParser);
app.use(staticServer);
app.use(calculatorRouter);
app.use(notFoundAction);

var server = http.createServer(app);
server.listen(8080);
console.log('server listening on port 8080');

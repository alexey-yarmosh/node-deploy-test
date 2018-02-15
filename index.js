const http = require('http');
const config = require('config');
const fibonacci = require('./src/fibonacci');

const PORT = config.get('server.port') || 3000;

const serverListener = (req, res) => {
  console.log('User connected!');
  res.end(`Hello World! ${fibonacci(40)}`);
}

const server = http.createServer(serverListener);
server.listen(PORT);

console.log(`Server started on ${PORT}`);

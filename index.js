const http = require('http');
const config = require('config');

const PORT = config.get('server.port') || 3000;

const serverListener = (req, res) => {
  console.log('User connected!');
  res.end('Hello World!');
}

const server = http.createServer(serverListener);
server.listen(PORT);

console.log(`Server started on ${PORT}`);

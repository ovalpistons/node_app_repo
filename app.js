const http = require('http');

//no idea what I'm doing
const hostname = '127.0.0.1'; //'ec2-3-93-191-42.compute-1.amazonaws.com';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Seasons greetings!');
});

//TODO @ovalpistons do something
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require('node:http');
let prompt = require('prompt');

const hostname = '127.0.0.1';
const port = 3000;
let mes
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (mes) {
    res.end('Hello, World!\nJe m\'appelle '+mes);
  } else {
    res.end('Hello, World!\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  prompt.start()
  prompt.get(['name'], function (err, result) {
  // let name = (prompt('Name:'))
  mes = result.name
  console.log ("");
  console.log ("hello " + result.name);
  console.log ("");
})
});
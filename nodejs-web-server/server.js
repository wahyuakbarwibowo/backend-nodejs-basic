const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'text/html');

  const { method, url } = request;

  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end('<h1>Ini adalah halaman homepage</h1>');
    } else {
      response.statusCode = 400;
      response.end('<h1>tidak dapat menerima sembarang request</h1>');
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end('<h1>ini adalah halaman about</h1>');
    } else if (method === 'POST') {
      let body = [];

      request.on('data', (chunk) => {
        body.push(chunk);
      });

      request.on('end', () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 201;
        response.end(`<h1>Hellowww ABout nihhh, ${name}! What you will learn ? hehe</h1>`);
      });
    } else {
      response.statusCode = 400;
      response.end('<h1>tidak dapat menerima sembarang request untuk url about</h1>');
    }
  } else {
    response.statusCode = 404;
    response.end('<h1>not found ya guys ya</h1>');
  }

};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`server running on http://${host}:${port}`);
});
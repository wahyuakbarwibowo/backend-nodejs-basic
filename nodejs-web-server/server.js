const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('X-Powered-By', 'NodeJS');

  const { method, url } = request;

  if (url === '/') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end(JSON.stringify({
        message: 'halaman utama'
      }));
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({
        message: 'tidak menerima request yang diberikan'
      }));
    }
  } else if (url === '/about') {
    if (method === 'GET') {
      response.statusCode = 200;
      response.end(JSON.stringify({
        message: 'halaman tentang'
      }));
    } else if (method === 'POST') {
      let body = [];

      request.on('data', (chunk) => {
        body.push(chunk);
      });

      request.on('end', () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 201;
        response.end(JSON.stringify({
          message: `Hellowww About nihhh, ${name}! What you will learn ? hehe`
        }));
      });
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({
        message: 'tidak dapat menerima sembarang request untuk url about'
      }));
    }
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({
      message: 'not found ya guys ya'
    }));
  }

};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`server running on http://${host}:${port}`);
});
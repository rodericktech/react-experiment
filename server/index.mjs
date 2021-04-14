// Express
import express from 'express';

const router = express.Router();
const nodeApp = express();

// Middleware
nodeApp.use((req, res, next) => {
  console.log('Fancy security middleware. Your bots have been rejected.');
  next();
});

// Routing
nodeApp.use(router);

router.get('/', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello friends. <a href="/about">About</a>');
});

router.get('/about', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('This would be the about page if I had one.');
});

nodeApp.listen({ port: 3021 }, () => {
  console.log('Express is running.')
});

/*
// Code for pure Node HTTP server:
const http = require('http');

const hostname = 'localhost';
const port = 3021;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello my friends.');
});

server.listen(port, hostname, () => {
  console.log(`Pure Node is running at http://${hostname}:${port}/`);
});
 */
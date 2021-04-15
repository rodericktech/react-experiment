// Express
import express from 'express';
import { createConnection } from 'typeorm';
import { getArtists } from "./src/repo/ArtistRepo";
import { getAlbums } from "./src/repo/AlbumRepo";
require("dotenv").config();

const main = async () => {
  const nodeApp = express();
  const router = express.Router();
  await createConnection();

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

  // Get all artists
  router.get("/api/artists", async (req, res, next) => {
    try {
      const artistResult = await
        getArtists();
      if (artistResult && artistResult.entities) {
        /*
        artistResult.entities.forEach((ar) => {
          artists.push(ar.name);
        });
         */
        res.send(artistResult.entities);
      } else if (artistResult && artistResult.messages) {
        res.send(artistResult.messages[0]);
      }
    } catch (ex) {
      console.log(ex);
      res.send(ex.message);
    }
  });

  // Get all albums
  router.get("/api/albums", async (req, res, next) => {
    try {
      const albumResult = await
        getAlbums();
      if (albumResult && albumResult.entities) {
        res.send(albumResult.entities);
      } else if (albumResult && albumResult.messages) {
        res.send(albumResult.messages[0]);
      }
    } catch (ex) {
      console.log(ex);
      res.send(ex.message);
    }
  });
  nodeApp.listen({ port: 3021 }, () => {
    console.log('Express is running.')
  });

};

main();


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
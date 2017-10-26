// when using express server, make sure you serve up your index.html for any GET requests that aren't for any other routes (like `/api` routes)

const path = require('path');
const express = require('express');
const app = express();

// add static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, './browser/index.html')))

// ****** place any routes and middleware here

// ****** either middleware to serve up 404s

// at the end of your server logic (but this should be before any middleware serving up 500 errors for server problems. But if you have middleware serving up 404s, that would go before this)
app.get('*', function(req,res,next) {
  res.sendFile(path.join(__dirname, './browser/index.html'))
})

// ****** or middleware to serve up 500 errors

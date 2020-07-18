const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8000;
const host = 'localhost';

server.listen(port, function() {
  console.log(`Server is running on http://${host}:${port}`);
});

/* folder for public files */
app.use(express.static(__dirname + '/public'));

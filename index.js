const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8080;
const host = 'localhost';

server.listen(port, function() {
  console.log(`Server is running on http://${host}:${port}`);
});

/* folder for public files */
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

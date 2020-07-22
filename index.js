const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8080;
const host = 'localhost';

server.listen(port, function() {
  console.log(`Server is running on http://${host}:${port}`);
});

/* serve the public folder */
app.use(express.static(__dirname + '/public'));

/* serve the font awesome css */
app.use(
    express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'),
);

/* serve the bootstrap files */
app.use(
    express.static(__dirname + '/node_modules/bootstrap/dist/'),
);

/* serve the error page */
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

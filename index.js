/* This file is for starting the server and the serverlogic */

const http = require('http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
  fs.readFile(__dirname + req.url)
      .then((contents) => {
        switch (getFilecontent(req.url)) {
          case 'json':
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(contents);
            return;

          case 'csv':
            res.setHeader('Content-Type', 'text/csv');
            res.writeHead(200);
            res.end(contents);
            return;

          default:
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(contents);
            return;
        }
      })
      .catch((err) => {
        res.writeHead(500);
        res.end(err);
        return;
      });
};

/**
 * Retuns the file extension for a path.
 * If no extension can be found, returns "html".
 * @param {string} path string of a path of a file.
 * @return {string} string of the extension.
 */
function getFilecontent(path) {
  let fileextension;
  const lastindex = path.lastIndexOf('.');
  switch (lastindex) {
    case -1:
      fileextension = 'html';
      break;
    default:
      fileextansion = path.substring(lastindex + 1, path.length);
      break;
  }
  return fileextension;
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

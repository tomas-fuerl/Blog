/* This file is for starting the server and the serverlogic */

const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

let indexFile;

const requestListener = function (req, res) {

    switch (req.url) {
        case "/":
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(indexFile);
            break
        default:
            res.setHeader("Content-Type", "text/html");
            res.writeHead(404);
            res.end("error");
    }

};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });
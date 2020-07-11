const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

let indexFile;

const requestListener = function (req, res) {

    switch (req.url) {
        case "/books.json":
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(books);
            break
        case "/authors":
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(authors);
            break
        default:
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(indexFile);
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
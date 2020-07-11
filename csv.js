const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    /* CSV-Dateityp */
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    /* Anfrage an Serverfolgreich, deswegen code 200 */
    res.writeHead(200);
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
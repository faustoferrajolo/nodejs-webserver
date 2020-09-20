const http = require('http');

http.createServer((req, res) => {

        res.write('Hola Mundo');
        res.end();

    })
    .listen(9000);

console.log('Listening on port 9000');
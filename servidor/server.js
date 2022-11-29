const http = require('http');
const host = 'localhost';
const port = 8000;

function escutador(request, response) {
    if (request.url === '/clientes') {
        response.end('API de Clientes'); //SELECT * FROM clientes
    } else if (request.url === '/veiculos') {
        response.end('API de Veiculos');
    } else {
        response.end("404");
    }
}

let server = http.createServer(escutador);
server.listen(port, host);

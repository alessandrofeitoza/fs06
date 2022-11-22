//importando a biblioteca interna do node para mexer com a web
const http = require('http2');
const rotas = require('./router');

const servidor = 'localhost';
const porta = '8000';

//funcao que será executada assim que chegar uma requisicao
function recepcao(req, res) {

    //testando se a url acessada foi definida no objeto de rotas criado acima
    if (undefined == rotas[req.url]) {
        //caso nao exista a rota, então encerra a request com erro 404
        res.writeHead(404); //gerando codigo de erro 404
        return res.end();
    }

    if (undefined == rotas[req.url][req.method]) {
        res.writeHead(405);
        return res.end();
    }

    console.log(req);

    //finalizando o processo com uma resposta
    let resultado = rotas[req.url][req.method]('dados');

    res.end(JSON.stringify(resultado));
}

//levantando o servidor
http.createServer(recepcao).listen(porta, servidor);




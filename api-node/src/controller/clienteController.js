function listar() {
    let dados = []; // SELECT * FROM tb_veiculos;

    //simulando que estamos buscando dados em um banco de dados
    for (let i = 1; i <= 10; i++) {
        dados.push({
            id: i,
            nome: 'Chiquim',
            email: 'cliente0'+i+'@gmail.com',
            cidade: 'Fortaleza',
        });
    }

    return dados;
}

function cadastrar() {
    return "Cadastrando cliente...";
}

module.exports = {
    listar, 
    cadastrar,
};
function listar() {
    let dados = []; // SELECT * FROM tb_veiculos;

    //simulando que estamos buscando dados em um banco de dados
    for (let i = 1; i <= 10; i++) {
        dados.push({
            id: i,
            marca: 'Chevrolet',
            modelo: 'Celta '+i,
            ano: 2000 + i,
        });
    }

    return dados;
}

function cadastrar(dados) {
    return "Cadastrando veiculo..." + dados; //INSERT INTO...
}

function editar() {
    return "Editando veiculo";
}

function excluir() {
    return "Excluindo veiculo";
}

module.exports = {  
    listar, 
    cadastrar,
    editar,
    excluir,
};
document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaCliente',
        url: 'http://localhost:8080/projeto/clientes',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'Cpf', dado: 'cpf'},
            { titulo: 'Data de Nascimento'},
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/projeto/clientes',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});
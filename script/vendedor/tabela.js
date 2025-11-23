document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaVendedor',
        url: 'http://localhost:8080/projeto/vendedores',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'Cpf', dado: 'cpf'},
            { titulo: 'Data de Nascimento', dado: 'dataNascimento'},
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/projeto/vendedores',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});
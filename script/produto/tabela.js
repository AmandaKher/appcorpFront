document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaProduto',
        url: 'http://localhost:8080/projeto/produtos',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Nome', dado: 'nome' },
            { titulo: 'Tamanho', dado: 'tamanho' },
            { titulo: 'Cor', dado: 'cor' },
            { titulo: 'Preço', dado: 'preco' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/projeto/produtos',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});
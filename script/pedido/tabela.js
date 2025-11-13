document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaPedido',
        url: 'http://localhost:8080/projeto/pedidos',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Data do Pedido' },
            { titulo: 'Produtos' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/projeto/pedidos',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});
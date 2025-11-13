document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formPedido',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Data do Pedido', dado: 'dataPedido', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Produtos', dado: 'produtos', dadoExibicao: 'produto.nome', urlConsulta:'http://localhost:8080/projeto/produtos', tipo: 'relacionamento', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/projeto/pedidos',
        urlEditar: 'http://localhost:8080/projeto/pedidos',
        urlCargaDados: 'http://localhost:8080/projeto/pedidos/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});

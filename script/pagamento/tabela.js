document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idTabela: 'tabelaPagamento',
        url: 'http://localhost:8080/projeto/pagamentos',
        colunas: [
            { titulo: 'ID', dado: 'id' },
            { titulo: 'Valor', dado: 'valor' },
            { titulo: 'Data do Pagamento', dado: 'dataPagamento'},
            { titulo: 'Forma de Pagamento', dado: 'forma' },
        ],
        exibeEditar: true,
        idEnvio: 'id',
        exibeRemover: true,
        urlRemover: 'http://localhost:8080/projeto/pagamentos',
        urlEditar: 'formulario.html?id='
    };
    await appCorporativa.criarTabela(
        parametros
    );
});
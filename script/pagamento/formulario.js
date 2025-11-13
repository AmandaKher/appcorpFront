document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formPagamento',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Valor', dado: 'valor', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Data do Pagamento', dado: 'dataPagamento', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Forma de Pagamento', dado: 'forma', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/projeto/pagamentos',
        urlEditar: 'http://localhost:8080/projeto/pagamentos',
        urlCargaDados: 'http://localhost:8080/projeto/pagamentos/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});

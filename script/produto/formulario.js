document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formProduto',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Tamanho', dado: 'tamanho', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Cor', dado: 'cor', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Preço', dado: 'preco', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/projeto/produtos',
        urlEditar: 'http://localhost:8080/projeto/produtos',
        urlCargaDados: 'http://localhost:8080/projeto/produtos/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});

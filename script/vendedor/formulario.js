document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formVendedor',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Cpf', dado: 'cpf', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Data de Nascimento', dado: 'dataNascimento', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/projeto/vendedores',
        urlEditar: 'http://localhost:8080/projeto/vendedores',
        urlCargaDados: 'http://localhost:8080/projeto/vendedores/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});

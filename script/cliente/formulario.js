document.addEventListener("DOMContentLoaded", async function() {
    let parametros = {
        idFormulario: 'formCliente',
        colunas: [
            { titulo: 'ID', dado: 'id', tipo: 'oculto', obrigatorio: false },
            { titulo: 'Nome', dado: 'nome', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Cpf', dado: 'cpf', tipo: 'textoCurto', obrigatorio: true },
            { titulo: 'Data de Nascimento', dado: 'dataNascimento', tipo: 'textoCurto', obrigatorio: true },
        ],
        urlCadastrar: 'http://localhost:8080/projeto/clientes',
        urlEditar: 'http://localhost:8080/projeto/clientes',
        urlCargaDados: 'http://localhost:8080/projeto/clientes/id=',
    };
    appCorporativa.criarFormulario(
        parametros
    );

});

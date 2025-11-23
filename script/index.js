async function verificarUsuario() {
    const token = localStorage.getItem("tokenAppCorporativa");

    if (!token) {
        console.error("Nenhum token encontrado no localStorage!");
        window.location.href = "login.html"; // caso queira voltar ao login
        return;
    }

    // Decodifica o token JWT para pegar o e-mail
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const email = payload.email;
        console.log("Email extraído:", email);

        // Faz consulta ao backend
        const response = await fetch(
            "http://localhost:8080/projeto/usuarios/pegaPorEmail?email=" + email
        );

        const usuario = await response.json();

        if (!usuario) {
            console.warn("Usuário não encontrado. Indo para cadastro...");
            window.location.href = "cadastro.html?email=" + email;
        } else {
            console.log("Usuário verificado:", usuario);
            // aqui segue normalmente para seu index
        }
    } catch (e) {
        console.error("Erro ao decodificar token:", e);
        window.location.href = "login.html";
    }
}

// Executar assim que a página carregar
verificarUsuario();
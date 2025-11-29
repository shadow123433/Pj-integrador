function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // 🔒 Aqui você define o usuário e a senha do admin:
  const usuarioCorreto = "1234";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    // Salva login e redireciona
    localStorage.setItem("logado", "true");
    window.location.href = "/paginadoadm/index.html";
  } else {
    document.getElementById("mensagem").innerText = "Usuário ou senha incorretos!";
  }
}

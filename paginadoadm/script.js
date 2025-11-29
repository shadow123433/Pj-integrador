// Impede acesso se não estiver logado
if (localStorage.getItem("logado") !== "true") {
  window.location.href = "login.html";
}

// Função para sair
function sair() {
  localStorage.removeItem("logado");
  window.location.href = "login.html";
}

const STORAGE_KEY = "plataforma_uniformes_data_v1";

const dadosPadrao = {
  titulo: "Uniformes Martins",
  comoFunciona: `1. Selecione a escola do seu filho.<br />
2. Veja os uniformes disponíveis.<br />
3. Adicione os uniformes ao carrinho.<br />
4. Preencha as informações de entrega e depois você pode finalizar a compra.<br />
5. Escolha a forma de pagamento que irá aparecer.<br />
6. Se quiser entre em contato com nossa loja pelo Fale conosco.<br />
7. Temos atendimento via WhatsApp.`,
  faleConosco: "Entre em contato conosco pelo e-mail: contato@fituniformes.com.br ou pelo WhatsApp (27) 99999-9999.",
  escolas: {
    "Emir de Macedo Gomes": [
      {
        nome: "Camisas masculinas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Verde"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8BWlpepO5DMKqlhb1hQ1fHt4s_aXhyxyjg&s"
      },
      {
        nome: "Shorts Masculinos",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Verde"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKYUO4fbuMr6oNeKv0wejs-nz9n4zKk_M68tnz1LypYGjtXS0OJZFZg0j5KG4oziV60E&usqp=CAU"
      },
      {
        nome: "Calças Femininas",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Verde"],
        img: "https://elastobor.vtexassets.com/arquivos/ids/221292/CALCA-ELASTOBOR-DE-SEGURANCA-SARJA-TAMANHO-G-VERDE.jpg?v=637582467565370000"
      },
      {
        nome: "Camisas Femininas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preto"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0ndzZX5hCikbTEqsxU_9FU6h1Z2bGOCLwA&s"
      }
    ],

    "Bartouvino Costa": [
      {
        nome: "Camisas masculinas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Vermelho"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8gzOFBhOBPwSHJPFs8Jb7gst3XHXlZObHg&s"
      },
      {
        nome: "Shorts Masculinos",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Vermelho"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8gzOFBhOBPwSHJPFs8Jb7gst3XHXlZObHg&s"
      },
      {
        nome: "Calças Femininas",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Vermelho"],
        img: "https://acdn-us.mitiendanube.com/stores/003/456/057/products/calca-helanca-escolar-infantil-unissex-menino-menina-meiaestacao-uniforme-cor-bordo-jpg-a93fc5c17e2a37ea9e17453679538937-1024-1024.jpg"
      },
      {
        nome: "Camisas Femininas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Vermelho"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8gzOFBhOBPwSHJPFs8Jb7gst3XHXlZObHg&s"
      }
    ],

    "Roberto Moreira": [
      {
        nome: "Camisas masculinas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Azul"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL-Fdx1mpptsMzRcD9-HbIp6TkTLAflpKHEVZfLT87WlhLP-uv1UhuZ3DAc5lsKkeShY&usqp=CAU"
      },
      {
        nome: "Shorts Masculinos",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Azul"],
        img: "https://i.postimg.cc/GpKfDgSd/Uniformes-2023-Foto-Felipe-Reis-1-1024x682.jpg"
      },
      {
        nome: "Calças Femininas",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Azul"],
        img: "https://i.postimg.cc/5yzTNWD4/Captura-de-tela-2025-11-10-080911.png"
      },
      {
        nome: "Camisas Femininas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Azul"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL-Fdx1mpptsMzRcD9-HbIp6TkTLAflpKHEVZfLT87WlhLP-uv1UhuZ3DAc5lsKkeShY&usqp=CAU"
      }
    ],

    "Roberto Calmon": [
      {
        nome: "Camisas masculinas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Azul"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL-Fdx1mpptsMzRcD9-HbIp6TkTLAflpKHEVZfLT87WlhLP-uv1UhuZ3DAc5lsKkeShY&usqp=CAU"
      },
      {
        nome: "Shorts Masculinos",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Azul"],
        img: "https://i.postimg.cc/GpKfDgSd/Uniformes-2023-Foto-Felipe-Reis-1-1024x682.jpg"
      },
      {
        nome: "Calças Femininas",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Azul"],
        img: "https://i.postimg.cc/5yzTNWD4/Captura-de-tela-2025-11-10-080911.png"
      },
      {
        nome: "Camisas Femininas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Azul"],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNL-Fdx1mpptsMzRcD9-HbIp6TkTLAflpKHEVZfLT87WlhLP-uv1UhuZ3DAc5lsKkeShY&usqp=CAU"
      }
    ],

    "IFES Campus Linhares": [
      {
        nome: "Camisas masculinas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Verde"],
        img: "https://kazzauniformes.com.br/wp-content/uploads/2019/10/ifes.jpg"
      },
      {
        nome: "Shorts Masculinos",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preto"],
        img: "https://static.wixstatic.com/media/fb8b21_b58584f40be34966983db14549356dc4~mv2.png"
      },
      {
        nome: "Calças Femininas",
        preco: 20.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Preto"],
        img: "https://static.wixstatic.com/media/fb8b21_c1902238118547dc8e98387e97a78bf4~mv2.png"
      },
      {
        nome: "Camisas Femininas",
        preco: 25.00,
        tamanhos: ["P", "M", "G", "GG"],
        cores: ["Branco", "Verde"],
        img: "https://kazzauniformes.com.br/wp-content/uploads/2019/10/ifes.jpg"
      }
    ]
  }
};

// Dados em memória que podem ser editados
let dados = {};

// Elementos DOM
const tituloSite = document.getElementById("titulo-site");
const textoComoFunciona = document.getElementById("texto-como-funciona");
const escolaSelect = document.getElementById("escola-select");
const btnVerUniformes = document.getElementById("btn-ver-uniformes");
const uniformesSection = document.getElementById("uniformes");
const nomeEscolaSpan = document.getElementById("nome-escola");
const uniformesLista = document.getElementById("uniformes-lista");
const btnAdicionarUniforme = document.getElementById("btn-adicionar-uniforme");
const btnEditarTitulo = document.getElementById("btn-editar-titulo");
const btnEditarComoFunciona = document.getElementById("btn-editar-como-funciona");
const btnSalvar = document.getElementById("btn-salvar");

const toast = document.getElementById("toast");

// MODAIS
const modalUniforme = document.getElementById("modal-uniforme");
const modalUniformeTitulo = document.getElementById("modal-uniforme-titulo");
const modalUniformeNome = document.getElementById("modal-uniforme-nome");
const modalUniformePreco = document.getElementById("modal-uniforme-preco");
const modalUniformeTamanhos = document.getElementById("modal-uniforme-tamanhos");
const modalUniformeCores = document.getElementById("modal-uniforme-cores");
const modalUniformeImg = document.getElementById("modal-uniforme-img");
const modalUniformePreview = document.getElementById("modal-uniforme-preview");
const modalUniformeSalvar = document.getElementById("modal-uniforme-salvar");
const modalUniformeExcluir = document.getElementById("modal-uniforme-excluir");

const modalTexto = document.getElementById("modal-texto");
const modalTextoInput = document.getElementById("modal-texto-input");
const modalTextoSalvar = document.getElementById("modal-texto-salvar");
const modalTextoTitulo = document.getElementById("modal-texto-titulo");

// ⚠️ TODAS AS VARIÁVEIS E FUNÇÕES DE GERENCIAR ESCOLAS FORAM REMOVIDAS

// Funções de utilidade
function salvarDados() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
  mostrarToast("Alterações salvas com sucesso!");
}

function carregarDados() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    dados = JSON.parse(data);
  } else {
    dados = JSON.parse(JSON.stringify(dadosPadrao));
    salvarDados();
  }
}

function mostrarToast(msg) {
  toast.textContent = msg;
  toast.style.display = "block";
  setTimeout(() => toast.style.display = "none", 3000);
}

// Atualiza UI inicial
function atualizarUI() {
  tituloSite.textContent = dados.titulo;
  textoComoFunciona.innerHTML = dados.comoFunciona;

  escolaSelect.innerHTML = `<option value="">Clique aqui e selecione uma escola</option>`;
  Object.keys(dados.escolas).forEach(escola => {
    const opt = document.createElement("option");
    opt.value = escola;
    opt.textContent = escola;
    escolaSelect.appendChild(opt);
  });

  uniformesSection.style.display = "none";
  uniformesLista.innerHTML = "";
  nomeEscolaSpan.textContent = "";
}

// Renderizar uniformes
function renderizarUniformes(escola) {
  nomeEscolaSpan.textContent = escola;
  uniformesLista.innerHTML = "";

  if (!dados.escolas[escola] || dados.escolas[escola].length === 0) {
    uniformesLista.textContent = "Nenhum uniforme disponível para essa escola.";
    return;
  }

  dados.escolas[escola].forEach((uniforme, i) => {
    const div = document.createElement("div");
    div.className = "uniforme";

    const img = document.createElement("img");
    img.src = uniforme.img || "";
    img.alt = uniforme.nome;

    const info = document.createElement("div");
    info.className = "uniforme-info";
    info.innerHTML = `<strong>${uniforme.nome}</strong><br>R$ ${uniforme.preco.toFixed(2)}<br>Tamanhos: ${uniforme.tamanhos.join(", ")}<br>Cores: ${uniforme.cores.join(", ")}`;

    const actions = document.createElement("div");
    actions.className = "item-actions";

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn";
    btnEditar.onclick = () => abrirModalUniforme(escola, i);

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btn btn-danger";
    btnExcluir.onclick = () => {
      if (confirm(`Excluir uniforme "${uniforme.nome}"?`)) {
        dados.escolas[escola].splice(i, 1);
        renderizarUniformes(escola);
      }
    };

    actions.appendChild(btnEditar);
    actions.appendChild(btnExcluir);

    div.appendChild(img);
    div.appendChild(info);
    div.appendChild(actions);

    uniformesLista.appendChild(div);
  });
}

// Abrir modal uniforme
function abrirModalUniforme(escola, index) {
  escolaAtual = escola;
  uniformeAtualIndex = index;

  const uniforme = dados.escolas[escola][index];
  modalUniformeTitulo.textContent = "Editar Uniforme";
  modalUniformeNome.value = uniforme.nome;
  modalUniformePreco.value = uniforme.preco;
  modalUniformeTamanhos.value = uniforme.tamanhos.join(", ");
  modalUniformeCores.value = uniforme.cores.join(", ");
  modalUniformeImg.value = uniforme.img || "";
  atualizarPreviewImagem();

  abrirModal(modalUniforme);
}

// Abrir modal adicionar uniforme
function abrirModalAdicionarUniforme() {
  escolaAtual = escolaSelect.value;
  uniformeAtualIndex = -1;

  modalUniformeTitulo.textContent = "Adicionar Uniforme";
  modalUniformeNome.value = "";
  modalUniformePreco.value = "";
  modalUniformeTamanhos.value = "";
  modalUniformeCores.value = "";
  modalUniformeImg.value = "";
  modalUniformePreview.style.display = "none";

  abrirModal(modalUniforme);
}

// Salvar uniforme modal
function salvarUniformeModal() {
  const nome = modalUniformeNome.value.trim();
  const preco = parseFloat(modalUniformePreco.value);
  const tamanhos = modalUniformeTamanhos.value.split(",").map(t => t.trim()).filter(t => t);
  const cores = modalUniformeCores.value.split(",").map(c => c.trim()).filter(c => c);
  const img = modalUniformeImg.value.trim();

  if (!nome || isNaN(preco) || preco < 0 || tamanhos.length === 0 || cores.length === 0) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const uniformeNovo = { nome, preco, tamanhos, cores, img };

  if (uniformeAtualIndex === -1) {
    if (!dados.escolas[escolaAtual]) {
      dados.escolas[escolaAtual] = [];
    }
    dados.escolas[escolaAtual].push(uniformeNovo);
  } else {
    dados.escolas[escolaAtual][uniformeAtualIndex] = uniformeNovo;
  }

  renderizarUniformes(escolaAtual);
  fecharModal(modalUniforme);
}

// Excluir uniforme modal
function excluirUniformeModal() {
  if (uniformeAtualIndex === -1) {
    fecharModal(modalUniforme);
    return;
  }
  if (confirm("Tem certeza que deseja excluir este uniforme?")) {
    dados.escolas[escolaAtual].splice(uniformeAtualIndex, 1);
    renderizarUniformes(escolaAtual);
    fecharModal(modalUniforme);
  }
}

// Atualiza preview imagem
function atualizarPreviewImagem() {
  const url = modalUniformeImg.value.trim();
  if (url) {
    modalUniformePreview.src = url;
    modalUniformePreview.style.display = "block";
  } else {
    modalUniformePreview.style.display = "none";
  }
}

// Abrir e fechar modais
function abrirModal(modal) {
  modal.style.display = "block";
}

function fecharModal(modal) {
  modal.style.display = "none";
}

document.querySelectorAll(".btn-close").forEach(btn => {
  btn.onclick = () => {
    const modalId = btn.getAttribute("data-close");
    if (modalId) {
      fecharModal(document.getElementById(modalId));
    }
  };
});

// Edição de texto
btnEditarTitulo.onclick = () => {
  modalTextoInput.value = dados.titulo;
  modalTextoTitulo.textContent = "Editar Título do Site";
  modalTextoSalvar.setAttribute("data-editar", "titulo");
  abrirModal(modalTexto);
};

btnEditarComoFunciona.onclick = () => {
  modalTextoInput.value = dados.comoFunciona.replace(/<br\s*\/?>/g, "\n");
  modalTextoTitulo.textContent = "Editar Como Funciona";
  modalTextoSalvar.setAttribute("data-editar", "como-funciona");
  abrirModal(modalTexto);
};

modalTextoSalvar.onclick = () => {
  const tipo = modalTextoSalvar.getAttribute("data-editar");

  if (tipo === "como-funciona") {
    const texto = modalTextoInput.value.trim();
    dados.comoFunciona = texto.replace(/\n/g, "<br>");
    textoComoFunciona.innerHTML = dados.comoFunciona;
  } else if (tipo === "titulo") {
    const novoTitulo = modalTextoInput.value.trim();
    if (novoTitulo) {
      dados.titulo = novoTitulo;
      tituloSite.textContent = novoTitulo;
    }
  }

  salvarDados();
  fecharModal(modalTexto);
  modalTextoSalvar.removeAttribute("data-editar");
};

// Botão Ver Uniformes
btnVerUniformes.onclick = () => {
  const escola = escolaSelect.value;
  if (!escola) {
    alert("Por favor, selecione uma escola.");
    return;
  }
  if (!dados.escolas[escola] || dados.escolas[escola].length === 0) {
    alert("Não há uniformes para essa escola.");
    uniformesSection.style.display = "none";
    return;
  }
  uniformesSection.style.display = "block";
  renderizarUniformes(escola);
};

// Botão Adicionar Uniforme
btnAdicionarUniforme.onclick = () => {
  if (!escolaSelect.value) {
    alert("Selecione uma escola para adicionar uniformes.");
    return;
  }
  abrirModalAdicionarUniforme();
};

modalUniformeSalvar.onclick = salvarUniformeModal;
modalUniformeExcluir.onclick = excluirUniformeModal;
modalUniformeImg.oninput = atualizarPreviewImagem;

// Inicialização
carregarDados();
atualizarUI();

// Cadastro da escola e seus uniformes
const escolas = {
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
      img: "https://static.wixstatic.com/media/fb8b21_b58584f40be34966983db14549356dc4~mv2.png/v1/fill/w_390,h_390,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb8b21_b58584f40be34966983db14549356dc4~mv2.png"
    },
    {
      nome: "Calças Femininas",
      preco: 20.00,
      tamanhos: ["P", "M", "G", "GG"],
      cores: ["Preto"],
      img: "https://static.wixstatic.com/media/fb8b21_c1902238118547dc8e98387e97a78bf4~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
    },
    {
      nome: "Camisas Femininas",
      preco: 25.00,
      tamanhos: ["P", "M", "G", "GG"],
      cores: ["Branco", "Verde"],
      img: "https://kazzauniformes.com.br/wp-content/uploads/2019/10/ifes.jpg"
    }
  ]
};

// Função para carregar as escolas no <select>
function carregarEscolas() {
  const select = document.getElementById("escola");
  // Obtém o elemento <select> onde as escolas serão listadas

  Object.keys(escolas).forEach(nomeEscola => {
    // Itera sobre as chaves do objeto "escolas", que representam o nome de cada escola
    const option = document.createElement("option");
    // Cria um novo elemento <option> para ser adicionado ao <select>

    option.value = nomeEscola;
    // Define o valor da opção como o nome da escola (vai ser usado no código posteriormente)

    option.textContent = nomeEscola;
    // Define o texto visível da opção como o nome da escola

    select.appendChild(option);
    // Adiciona a opção criada ao elemento <select>
  });
}

window.onload = () => {
  carregarEscolas();
  // Chama a função para carregar as escolas assim que a página for carregada
};

// Função para mostrar os uniformes de uma escola
function mostrarUniformes() {
  const escola = document.getElementById("escola").value;
  // Obtém o valor da escola selecionada no <select>

  if (!escola) {
    alert("Por favor, selecione uma escola.");
    return;
    // Se não foi selecionada nenhuma escola, exibe um alerta e sai da função
  }

  const uniformes = escolas[escola];
  // Obtém a lista de uniformes da escola selecionada

  if (!uniformes || uniformes.length === 0) {
    alert("Nenhum uniforme disponível para essa escola.");
    return;
    // Se não houver uniformes disponíveis para a escola, exibe um alerta e sai da função
  }

  document.getElementById("uniformes").style.display = "block";
  // Exibe a seção de uniformes

  document.getElementById("nome-escola").textContent = escola;
  // Exibe o nome da escola na seção de uniformes

  const lista = document.getElementById("uniformes-lista");
  lista.innerHTML = "";
  // Obtém o elemento que vai conter a lista de uniformes e limpa qualquer conteúdo anterior

  uniformes.forEach((u, index) => {
    // Itera sobre a lista de uniformes da escola
    const div = document.createElement("div");
    div.className = "uniforme";
    // Cria um novo <div> para representar cada uniforme e define a classe CSS para estilização

    div.innerHTML = `
      <img src="${u.img}" alt="${u.nome}">
      <!-- Exibe a imagem do uniforme -->
      <div class="uniforme-info">
        <h3>${u.nome}</h3>
        <!-- Exibe o nome do uniforme -->
        <p>Preço: R$ ${u.preco.toFixed(2)}</p>
        <!-- Exibe o preço do uniforme, formatado com duas casas decimais -->
        <p>Tamanhos: ${u.tamanhos.join(", ")}</p>
        <!-- Exibe os tamanhos disponíveis do uniforme, separados por vírgula -->
        <p>Cores: ${u.cores.join(", ")}</p>
        <!-- Exibe as cores disponíveis do uniforme, separadas por vírgula -->
        <button onclick="adicionarCarrinho('${escola}', ${index})">Adicionar ao Carrinho</button>
        <!-- Cria um botão para adicionar o uniforme ao carrinho -->
      </div>
    `;
    lista.appendChild(div);
    // Adiciona o <div> do uniforme à lista de uniformes
  });
}

// Carrinho de compras
const carrinho = [];
// Cria um array para armazenar os itens do carrinho

function adicionarCarrinho(escola, index) {
  const produto = escolas[escola][index];
  // Obtém o produto (uniforme) da escola selecionada com base no índice

  carrinho.push(produto);
  // Adiciona o produto ao carrinho

  mostrarCarrinho();
  // Atualiza a exibição do carrinho
  // Exibe mensagem temporária no canto da tela
  const msg = document.getElementById("mensagem-adicao");
  msg.textContent = "Você adicionou este item ao carrinho!";
  msg.style.display = "block";
  msg.style.opacity = "1";

  // Some suavemente após 2 segundos
  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => msg.style.display = "none", 500);
  }, 2000);
}

function mostrarCarrinho() {
  const container = document.getElementById("itens-carrinho");
  container.innerHTML = "";
  // Obtém o elemento onde os itens do carrinho serão exibidos e limpa qualquer conteúdo anterior

  let total = 0;
  // Cria uma variável para armazenar o total da compra

  carrinho.forEach((item, idx) => {
    // Itera sobre os itens do carrinho
    const div = document.createElement("div");
    div.className = "item-carrinho";
    // Cria um <div> para cada item do carrinho e define a classe CSS para estilização

    div.innerHTML = `
      <span>${item.nome}</span>
      <!-- Exibe o nome do item no carrinho -->
      <span>R$ ${item.preco.toFixed(2)}</span>
      <!-- Exibe o preço do item, formatado com duas casas decimais -->
      <button onclick="removerItemCarrinho(${idx})">Remover</button>
      <!-- Cria um botão para remover o item do carrinho -->
    `;
    container.appendChild(div);
    // Adiciona o item ao contêiner do carrinho

    total += item.preco;
    // Adiciona o preço do item ao total da compra
  });

  document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;
  // Atualiza o total exibido no carrinho

  document.getElementById("carrinho").style.display = "block";
  // Exibe a seção do carrinho
}

function removerItemCarrinho(idx) {
  carrinho.splice(idx, 1);
  // Remove o item do carrinho com base no índice

  mostrarCarrinho();
  // Atualiza a exibição do carrinho após remover o item
}

function irParaCheckout() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
    // Se o carrinho estiver vazio, exibe um alerta e não permite seguir para o checkout
  }
}



function mostrarFormularioPedidos() {
  document.getElementById("wrapperFormulario").classList.add("mostrar");
}

function fecharFormularioPedidos() {
  document.getElementById("wrapperFormulario").classList.remove("mostrar");
}

// Função para enviar o pedido do formulário
function enviarPedido(event) {
  event.preventDefault();
  // Previne o comportamento padrão do formulário (que seria o envio para o servidor)

  const nome = document.getElementById("nomeCliente").value.trim();
  const pedido = document.getElementById("sugestãoTexto").value.trim();
  // Obtém os valores dos campos do formulário e remove espaços em branco extras

  if (!nome || !pedido) {
    alert("Por favor, preencha todos os campos.");
    return;
    // Se algum campo estiver vazio, exibe um alerta e sai da função
  }

  alert(`sugestão enviada com sucesso!\nNome: ${nome}\nE-mail: ${email}\nPedido: ${pedido}`);
  // Exibe um alerta com as informações do pedido enviado

  // Limpa os campos do formulário
  document.getElementById("nomeCliente").value = "";
  document.getElementById("sugestãoTexto").value = "";

  fecharFormularioPedidos();
  // Fecha o formulário após o envio
}
let dadosEntrega = { nome: "", telefone: "", local: "" };

document.getElementById("abrirEntrega").addEventListener("click", () => {
  document.getElementById("modalEntrega").style.display = "flex";
});

function fecharEntrega() {
  document.getElementById("modalEntrega").style.display = "none";
}

function salvarEntrega() {
  const nome = document.getElementById("nomeEntrega").value.trim();
  const telefone = document.getElementById("telefoneEntrega").value.trim();
  const local = document.getElementById("localEntrega").value.trim();

  if (!nome || !telefone || !local) {
    alert("Por favor, preencha todos os campos de entrega.");
    return;
  }

  dadosEntrega = { nome, telefone, local };
  alert("Informações de entrega enviada com sucesso!");
  fecharEntrega();
}



// Seletores principais
const modalPagamento = document.getElementById('modalPagamento');
const fecharModal = document.getElementById('fecharModal');
let formaSelecionada = null;

// Ação do botão "Finalizar Compra"
document.getElementById("finalizarCompra").addEventListener("click", () => {
  // Verifica se os dados de entrega estão preenchidos
  if (!dadosEntrega.nome || !dadosEntrega.telefone || !dadosEntrega.local) {
    alert("⚠️ Por favor, preencha as **INFORMAÇÕES DE ENTREGA** antes de finalizar a compra.");
    return;
  }

  // Abre o modal de formas de pagamento
  modalPagamento.style.display = "flex";
});

// Fechar modal ao clicar no X
fecharModal.addEventListener("click", () => {
  modalPagamento.style.display = "none";
});

// Fechar modal ao clicar fora da caixa
modalPagamento.addEventListener("click", (e) => {
  if (e.target === modalPagamento) {
    modalPagamento.style.display = "none";
  }
});

// Fechar modal com tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalPagamento.style.display = "none";
  }
});

// Quando o usuário escolhe uma forma de pagamento
document.querySelectorAll(".forma-pagamento").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    formaSelecionada = el.getAttribute("data-nome");
    modalPagamento.style.display = "none";

    // Mostra mensagem de sucesso
    
    alert("Compra finalizada com sucesso!");


    // 🧹 Limpa tudo e volta ao início
    carrinho.length = 0;
    mostrarCarrinho();

    dadosEntrega = { nome: "", telefone: "", local: "" };
    document.getElementById("nomeEntrega").value = "";
    document.getElementById("telefoneEntrega").value = "";
    document.getElementById("localEntrega").value = "";

    document.getElementById("uniformes").style.display = "none";
    document.getElementById("carrinho").style.display = "none";
    document.getElementById("escola").value = "";

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      location.reload();
    }, 1000);
  });
});






// ==== Modal de imagem ampliada ====
window.addEventListener("load", () => {
  const modalImagem = document.getElementById("modalImagem");
  const imagemAmpliada = document.getElementById("imagemAmpliada");
  const fecharImagem = document.querySelector(".fechar-imagem");

  // Quando clicar em uma imagem de uniforme
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" && e.target.closest("#uniformes-lista")) {
      imagemAmpliada.src = e.target.src;
      modalImagem.style.display = "flex";
    }
  });

  // Fechar modal ao clicar no X
  fecharImagem.addEventListener("click", () => {
    modalImagem.style.display = "none";
  });

  // Fechar ao clicar fora da imagem
  modalImagem.addEventListener("click", (e) => {
    if (e.target === modalImagem) {
      modalImagem.style.display = "none";
    }
  });
});


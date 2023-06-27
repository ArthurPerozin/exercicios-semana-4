let itensSelecionados = [];

function adicionarItem() {
  const codigo = document.getElementById('codigo').value;
  const quantidade = document.getElementById('quantidade').value;

  const produto = obterProdutoPorCodigo(codigo);

  if (produto) {
    const item = { codigo, produto, quantidade };
    itensSelecionados.push(item);

    const tabelaItens = document.getElementById('lista-itens');
    const novaLinha = tabelaItens.insertRow();
    const colunaCodigo = novaLinha.insertCell();
    const colunaProduto = novaLinha.insertCell();
    const colunaQuantidade = novaLinha.insertCell();

    colunaCodigo.textContent = codigo;
    colunaProduto.textContent = produto.nome;
    colunaQuantidade.textContent = quantidade;

    document.getElementById('codigo').value = '';
    document.getElementById('quantidade').value = '';
  } else {
    alert('Código do alimento inválido!');
  }
}

function limparCampos() {
  document.getElementById('codigo').value = '';
  document.getElementById('quantidade').value = '';
}

function obterProdutoPorCodigo(codigo) {
  const produtos = [
    { codigo: '1', nome: 'Hambúrguer', valor: 10 },
    { codigo: '2', nome: 'Batata Frita', valor: 5 },
    { codigo: '3', nome: 'Refrigerante', valor: 3 }
    // Adicione mais produtos conforme necessário
  ];

  return produtos.find(produto => produto.codigo === codigo);
}

function calcularTotal() {
  let quantidadeTotal = 0;
  let valorTotal = 0;

  for (let i = 0; i < itensSelecionados.length; i++) {
    const item = itensSelecionados[i];
    const quantidade = parseInt(item.quantidade);
    const valor = item.produto.valor;

    quantidadeTotal += quantidade;
    valorTotal += valor * quantidade;
  }

  // Armazenar os resultados em localStorage para serem acessados na página resultado.html
  localStorage.setItem('quantidadeTotal', quantidadeTotal);
  localStorage.setItem('valorTotal', valorTotal.toFixed(2));

  // Redirecionar para a página resultado.html
  window.location.href = 'resultado.html';
}
function exibirResultado() {
  const quantidadeTotal = localStorage.getItem('quantidadeTotal');
  const valorTotal = localStorage.getItem('valorTotal');

  document.getElementById('quantidadeTotal').textContent = `Quantidade total de itens: ${quantidadeTotal}`;
  document.getElementById('valorTotal').textContent = `Valor Total: R$ ${valorTotal}`;
}
function limparCampos() {
  itensSelecionados = []; // Limpar os itens selecionados

  const tabelaItens = document.getElementById('lista-itens');
  tabelaItens.innerHTML = '<tr><th>Código</th><th>Produto</th><th>Quantidade</th>'
}

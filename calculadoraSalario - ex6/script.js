document.addEventListener('DOMContentLoaded', function() {
  // Aguarda o carregamento completo do documento HTML antes de executar o código dentro desta função

  const form = document.getElementById('calc-form');
  // Obtém a referência ao elemento do formulário com o ID 'calc-form'

  const salarioInput = document.getElementById('salario');
  // Obtém a referência ao elemento de entrada do salário com o ID 'salario'

  const errorMessage = document.getElementById('error-message');
  // Obtém a referência ao elemento que exibe mensagens de erro com o ID 'error-message'

  const limparButton = document.getElementById('limpar');
  // Obtém a referência ao botão de limpar com o ID 'limpar'

  form.addEventListener('submit', function(event) {
    // faz callback do evento event quando o botão tipo submit é clicado
    event.preventDefault();
    // Previne o comportamento padrão de recarregar a página ao enviar o formulário
    calcularImpostos();
    // Chama a função calcularImpostos() quando o formulário for enviado
  });

  limparButton.addEventListener('click', function() {
    // Adiciona um ouvinte de evento para o evento de clique no botão de limpar
    salarioInput.value = '';
    // Limpa o valor do campo de entrada do salário
    errorMessage.textContent = '';
    // Limpa o conteúdo do elemento de exibição de mensagens de erro
  });

  function calcularImpostos() {
    // Define a função que será chamada para calcular os impostos
    const salario = parseFloat(salarioInput.value.replace(',', '.'));
    // Obtém o valor do salário do campo de entrada, troca a , por . e transforma a string em um número

    if (isNaN(salario) || salario <= 0) {
      // Verifica se o valor do salário é inválido (não é um número ou menor ou igual a zero)
      errorMessage.textContent = 'Por favor, insira um valor válido para o salário.';
      // Define a mensagem de erro no elemento de exibição de mensagens de erro
      return;
      // Retorna imediatamente para interromper a execução da função
    }

    // Cálculo do Imposto de Renda
    let impostoRenda = 0;
    // Variável para armazenar o valor do imposto de renda inicializada como zero

    if (salario <= 1903.98) {
      impostoRenda = 0;
    } else if (salario <= 2826.65) {
      impostoRenda = (salario * 0.075) - 142.80;
    } else if (salario <= 3751.05) {
      impostoRenda = (salario * 0.15) - 354.80;
    } else if (salario <= 4664.68) {
      impostoRenda = (salario * 0.225) - 636.13;
    } else {
      impostoRenda = (salario * 0.275) - 869.36;
    }
    // Calcula o valor do imposto de renda com base no valor do salário utilizando as faixas e porcentagens especificadas

    function calcularINSS(salarioBruto) {
      // Define a função para calcular o INSS com base no salário bruto
      let valorINSS = 0;
      // Variável para armazenar o valor do INSS inicializada como zero

      if (salarioBruto <= 1751.81) {
        valorINSS = salarioBruto * 0.08;
      } else if (salarioBruto <= 2919.72) {
        valorINSS = salarioBruto * 0.09;
      } else if (salarioBruto <= 5839.45) {
        valorINSS = salarioBruto * 0.11;
      } else {
        valorINSS = 5839.45 * 0.11;
      }
      // Calcula o valor do INSS com base no salário bruto utilizando as faixas e porcentagens especificadas
      // Se o salário bruto estiver acima do último limite de faixa, utiliza o valor máximo

      return valorINSS;
      // Retorna o valor calculado do INSS
    }

    const valorINSS = calcularINSS(salario);
    // Chama a função calcularINSS() para obter o valor do INSS com base no salário

    const fgts = salario * 0.08;
    // Calcula o valor do FGTS como 8% do salário

    const salarioLiquido = salario - impostoRenda - valorINSS;
    // Calcula o valor do salário líquido subtraindo o imposto de renda e o INSS do salário bruto

    const queryParams = `salario=${salario.toFixed(2)}&impostoRenda=${impostoRenda.toFixed(2)}&inss=${valorINSS.toFixed(2)}&fgts=${fgts.toFixed(2)}&salarioLiquido=${salarioLiquido.toFixed(2)}`;
    // Cria uma string com os parâmetros de consulta para os valores calculados arredondados com duas casas decimais

    window.location.href = `resultado.html?${queryParams}`;
    // Redireciona para a página de resultados com os valores calculados passados como parâmetros na URL
  }
});

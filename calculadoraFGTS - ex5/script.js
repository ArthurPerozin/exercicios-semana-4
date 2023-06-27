document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('calc-form');
  const salario = document.getElementById('salario');
  const errorMessage = document.getElementById('error-message');
  const limparButton = document.getElementById('limpar');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    calcularFGTS();
  });

  limparButton.addEventListener('click', function() {
    salario.value = '';
    errorMessage.textContent = '';
  });

  function calcularFGTS() {
    const salarioValue = parseFloat(salario.value.replace(',', '.'));

    if (isNaN(salarioValue) || salarioValue <= 0) {
      errorMessage.textContent = 'Por favor, insira valores válidos para o cálculo.';
      return;
    }

    const fgtsMensal = salarioValue*0.08;
    const fgtsAnual = fgtsMensal*12;
    const queryParams = `fgtsMensal=${fgtsMensal.toFixed(2)}&fgtsAnual=${fgtsAnual.toFixed(2)}`;
    window.location.href = `resultado.html?${queryParams}`;
    
  }
  
});

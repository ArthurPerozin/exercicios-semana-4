document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calc-form');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const errorMessage = document.getElementById('error-message');
    const limparButton = document.getElementById('limpar');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      calcularIMC();
    });
  
    limparButton.addEventListener('click', function() {
      peso.value = '';
      altura.value = '';
      errorMessage.textContent = '';
    });
  
    function calcularIMC() {
      const pesoValue = parseFloat(peso.value.replace(',', '.'));
  
      if (isNaN(pesoValue) || pesoValue <= 0) {
        errorMessage.textContent = 'Por favor, insira um peso válido para o cálculo.';
        return;
      }
  
      const alturaValue = parseFloat(altura.value.replace(',', '.'));
  
      if (isNaN(alturaValue) || alturaValue <= 0) {
        errorMessage.textContent = 'Por favor, insira uma altura válida para o cálculo.';
        return;
      }
  
      const imc = pesoValue / (alturaValue * alturaValue);
  
      let statusIMC = '';
      if (imc < 18.5) {
        statusIMC = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 25) {
        statusIMC = 'Peso ideal';
      } else {
        statusIMC = 'Acima do peso';
      }
  
      const queryParams = `imc=${imc.toFixed(2)}`;
      window.location.href = `resultado.html?${queryParams}`;
    }
  });
  
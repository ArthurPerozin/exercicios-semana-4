document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('calc-form');
  const distancia = document.getElementById('distancia');
  const peso = document.getElementById('peso');
  const errorMessage = document.getElementById('error-message');
  const limparButton = document.getElementById('limpar');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    calcularFrete();
  });

  limparButton.addEventListener('click', function() {
    peso.value = '';
    distancia.value = '';
    errorMessage.textContent = '';
  });

  function calcularFrete() {
    const distanciaValue = parseFloat(distancia.value.replace(',', '.'));
    const pesoValue = parseFloat(peso.value.replace(',', '.'));

    if (isNaN(distanciaValue) || isNaN(pesoValue) || distanciaValue <= 0 || pesoValue <= 0) {
      errorMessage.textContent = 'Por favor, insira valores válidos para a distância e o peso.';
      return;
    }

    const frete = distanciaValue * pesoValue;
    const queryParams = `frete=${frete.toFixed(2)}`;
    window.location.href = `resultado.html?${queryParams}`;
  }
});
document.addEventListener('DOMContentLoaded', function()) {
  const form = document.getElementById('calc-form');
  const n1 = document.getElementById('n1');
  const n2 = document.getElementById('n2');
  const n3 = document.getElementById('n3');
  const errorMessage = document.getElementById('error-message');
  const limparButton = document.getElementById('limpar');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    calcularMedia();
  });

  limparButton.addEventListener('click', function() {
    n1.value = '';
    n2.value = '';
    n3.value = '';
    errorMessage.textContent = '';
  });

  function calcularMedia() {
    const n1Value = parseFloat(n1.value.replace(',', '.'));
    const n2Value = parseFloat(n2.value.replace(',', '.'));
    const n3Value = parseFloat(n3.value.replace(',', '.'));

    if (isNaN(n1Value) || isNaN(n2Value) || isNaN(n3Value) || n1Value <= 0 || n2Value <= 0 || n3Value <= 0) {
      errorMessage.textContent = 'Por favor, insira valores válidos para o cálculo.';
      return;
    }

    const media = (n1Value + n2Value + n3Value) / 3;
    const resultado = (media >= 7) ? 'Aprovado' : 'Reprovado';
    localStorage.setItem('media', media.toFixed(2));
    localStorage.setItem('resultado', resultado);
    window.location.href = 'resultado.html';
  }
});

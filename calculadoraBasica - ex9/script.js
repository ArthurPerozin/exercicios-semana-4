const errorMessage = document.getElementById('error-message');
        const numero1Input = document.getElementById('numero1');
        const numero2Input = document.getElementById('numero2');

        function calcular() {
            const numero1 = parseFloat(numero1Input.value);
            const numero2 = parseFloat(numero2Input.value);
            var operacao = document.getElementById("operacao").value;
            var resultado;

            if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
                errorMessage.textContent = 'Por favor, insira um valor válido para os números.';
                return;
            } else {
                errorMessage.textContent = '';
            }

            if (operacao === "soma") {
                resultado = numero1 + numero2;
            } else if (operacao === "subtracao") {
                resultado = numero1 - numero2;
            } else if (operacao === "multiplicacao") {
                resultado = numero1 * numero2;
            } else if (operacao === "divisao") {
                resultado = numero1 / numero2;
            }

            // Redirecionar para a página "resultado.html" com o resultado como parâmetro
            window.location.href = "resultado.html?resultado=" + resultado;
        }
        
        function limpar() {
            numero1Input.value = '';
            numero2Input.value = '';
            errorMessage.textContent = '';
        }
document.getElementById("feriasForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var nomeFuncionario = document.getElementById("nomeFuncionario").value;
  var dataInicio = document.getElementById("dataInicio").value;
  var dataFim = document.getElementById("dataFim").value;

  var dataHoje = new Date().toLocaleDateString();

  var cartaFerias = `Caro(a) responsável,\n\nGostaria de solicitar minhas férias:\n\nNome do funcionário: ${nomeFuncionario}\nData de início: ${dataInicio}\nData de fim: ${dataFim}\n\nAgradeço a atenção.\n\nAtenciosamente, ${nomeFuncionario}\n\nGerado em ${dataHoje}`;


  window.localStorage.setItem("cartaFerias", cartaFerias);
  window.location.href = "carta.html";
});

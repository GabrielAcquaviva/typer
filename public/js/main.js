var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {
  var conteudo = campo.val();

  var qtCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtCaracteres);

  var qtPalavras = conteudo.split(/\S+/).length - 1;
  $("#contator-palavras").text(qtPalavras);
});


var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function() {
  var cronometroId = setInterval(function() {
    tempoRestante--;
    $("#tempo-digitacao").text(tempoRestante);
    if (tempoRestante < 1) {
      campo.attr("disabled", true);
      clearInterval(cronometroId);
    }
  }, 1000);
});

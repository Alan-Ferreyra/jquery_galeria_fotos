$(document).ready(function () {
  //   console.log(document.querySelector("header button"));
  //   console.log($("header button"));

  //   document
  //     .querySelector("header button")
  //     .addEventListener("click", function () {});

  $("header button").click(function () {
    //     alert("expandir formulario");
    $("form").slideDown();
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    //     console.log("submit");
    //     alert("submit");
    e.preventDefault();
    const enderecoDaNovaImagem = $("#endereco-imagem-nova").val();
    const novoItem = $("<li style='display: none'></li>");
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

    $(`<div class="overlay-imagem-link">
  <a href="${enderecoDaNovaImagem} target="_blank" title=""ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(
      novoItem
    );
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn();
    $("#endereco-imagem-nova").val("");
  });
});

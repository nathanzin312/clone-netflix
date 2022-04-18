let lis = document.querySelectorAll("ul li"); //vai armazenar os elementos li
console.log(lis);

let qtdItens = lis.length; //vai armazernar a quantidade de elemtos li
console.log("Quant. lis = " + qtdItens);

let numDeItens = 5;

let lista1 = document.querySelectorAll("#lista1 li");
let lista2 = document.querySelectorAll("#lista2 li");

let numDeVideos = document.querySelectorAll(".numDeVideos");

numDeVideos[0].textContent = lista1.length;
numDeVideos[1].textContent = lista2.length;

function show(indice, indiceLista) {
  let n = indice;
  numDeItens = numDeItens + indice;
  console.log(n + " " + numDeItens);

  let listaUl = document.querySelector("#lista" + indiceLista);
  //console.log(listaUl)

  let mover = 180;
  let posicaoXDireita = mover;
  let posicaoXEsquerda = -mover;

  if (indice == +1) {
    //console.log('Mover para direita')
    listaUl.scrollBy(posicaoXDireita, 2);
  }
  if (indice == -1) {
    //console.log('Mover para esquerda')
    listaUl.scrollBy(posicaoXEsquerda, 2);
  }
}

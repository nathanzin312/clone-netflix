function show(indice, indiceLista) {
  let listaUl = document.querySelector("#lista" + indiceLista);

  if (indice == +1) {
    //console.log('Mover para direita')
    listaUl.scrollBy(180, 0);
  }
  if (indice == -1) {
    //console.log('Mover para esquerda')
    listaUl.scrollBy(-100, 0);
  }
}

function menu() {
  var e = document
    .getElementsByClassName("sm-menu")[0]
    .classList.toggle("show");
  // e.classList.add(".show");
}

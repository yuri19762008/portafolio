document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Formulario enviado correctamente");
  // Este formulario puede derivar a otro sitio 
});
function mostrarLista() {
  let lista = document.getElementById("lista");
  let display = lista.style.display;
  let boton = document.getElementsByTagName("button")[0];
  if(display=="none" || display==""){
      lista.style.display = "block";
  }else{
      lista.style.display = "none";
  }
}

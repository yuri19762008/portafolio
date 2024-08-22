document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Formulario enviado correctamente");
  // Este formulario puede derivar a otro sitio 
});
document.querySelectorAll(".hidden-section").forEach(function (section) {
  section.addEventListener("mouseover", function () {
    this.querySelector(".hidden-content").style.opacity = "1";
    this.querySelector(".hidden-content").style.visibility = "visible";
  });

  section.addEventListener("mouseout", function () {
    this.querySelector(".hidden-content").style.opacity = "0";
    this.querySelector(".hidden-content").style.visibility = "hidden";
  });
});

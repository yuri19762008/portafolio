document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Formulario enviado correctamente");
  // Aquí puedes añadir la lógica para enviar el formulario por AJAX
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

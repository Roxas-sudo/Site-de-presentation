
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector("nav ul");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      if (!name) {
        alert("Merci d'indiquer votre nom avant d'envoyer le message.");
        return;
      }
      var note = document.querySelector(".form-note");
      note.textContent = "Merci " + name + ", votre message a bien ete pris en compte. Nous revenons vers vous sous 48h.";
      form.reset();
    });
  }
});

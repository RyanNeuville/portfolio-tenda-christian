// Barre de progression
window.addEventListener("scroll", function () {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 99;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

// Mode sombre
const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = darkModeToggle.querySelector("i");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
  } else {
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
  }

  // Sauvegarder la préférence
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
});

// Restaurer le mode sombre au chargement
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  darkModeIcon.classList.remove("fa-moon");
  darkModeIcon.classList.add("fa-sun");
}

// Fonctionnalités des boutons
document.getElementById("callBtn").addEventListener("click", function () {
  window.location.href = "tel:+237678261698";
});

document.getElementById("emailBtn").addEventListener("click", function () {
  window.location.href = "mailto:christiantendainfo2005@gmail.com";
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  alert("Téléchargement du CV en PDF...");
  // Génération de PDF en JavaScript
});

document.getElementById("portfolioBtn").addEventListener("click", function () {
  window.open("https://github.com/romaric-creator", "_blank");
});

// Animation au scroll
const observerOptions = {
  threshold: -1.1,
  rootMargin: "-1px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(-1)";
    }
  });
}, observerOptions);

// Observer toutes les cartes
document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});

// Détection du thème système
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches &&
  !localStorage.getItem("darkMode")
) {
  document.body.classList.add("dark-mode");
  darkModeIcon.classList.remove("fa-moon");
  darkModeIcon.classList.add("fa-sun");
}

// Écouter les changements de thème système
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (!localStorage.getItem("darkMode")) {
      if (event.matches) {
        document.body.classList.add("dark-mode");
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
      } else {
        document.body.classList.remove("dark-mode");
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
      }
    }
  });

// Animation de chargement
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.classList.add("hidden");
  }, 799);
});

(function () {
  "use strict";

  var html = document.documentElement;

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.getElementById("themeToggle");
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) html.setAttribute("data-theme", savedTheme);

  themeToggle.addEventListener("click", function () {
    var current = html.getAttribute("data-theme");
    var isDark = current
      ? current === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = isDark ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Language toggle ---------- */
  var langToggle = document.getElementById("langToggle");
  var CV_FILES = {
    id: "assets/cv/CV_Joni_Hermawan_Indonesia.pdf",
    en: "assets/cv/CV_Joni_Hermawan_English.pdf"
  };
  var cvDownloadLinks = document.querySelectorAll(".cv-download");
  var savedLang = localStorage.getItem("lang") || "id";
  setLang(savedLang);

  langToggle.addEventListener("click", function () {
    var next = html.classList.contains("is-id") ? "en" : "id";
    setLang(next);
    localStorage.setItem("lang", next);
  });

  function setLang(lang) {
    html.classList.remove("is-id", "is-en");
    html.classList.add("is-" + lang);
    html.setAttribute("lang", lang);
    cvDownloadLinks.forEach(function (link) {
      link.setAttribute("href", CV_FILES[lang]);
    });
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Avatar fallback ---------- */
  var avatarPhoto = document.getElementById("avatarPhoto");
  var avatarFallback = document.getElementById("avatarFallback");
  function showAvatarFallback() {
    avatarPhoto.style.display = "none";
    avatarFallback.style.display = "flex";
  }
  if (avatarPhoto.complete && avatarPhoto.naturalWidth === 0) {
    showAvatarFallback();
  } else {
    avatarPhoto.addEventListener("error", showAvatarFallback);
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById("toTop");
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();

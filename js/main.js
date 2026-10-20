/*
  main.js
  Shared UI on every page: mobile navigation, fade-in, footer year.
  There is no light theme. Color lives in css/base.css.
*/

(function () {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const yearEl = document.querySelector("[data-year]");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function ensureFooterCredit() {
    var inner = document.querySelector(".footer-inner");
    if (!inner || inner.querySelector(".footer-made")) return;
    var made = document.createElement("p");
    made.className = "footer-made";
    made.setAttribute("data-i18n", "footer.made");
    made.innerHTML =
      '<span data-i18n="footer.made">' +
      (typeof t === "function" ? t("footer.made") : "Made with") +
      '</span> <span class="footer-heart" aria-hidden="true">❤️</span> <span data-i18n="footer.by">' +
      (typeof t === "function" ? t("footer.by") : "by") +
      "</span>";
    var copy = inner.querySelector("p:last-of-type");
    if (copy) inner.insertBefore(made, copy);
    else inner.appendChild(made);
  }

  ensureFooterCredit();

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    if (!nav || !toggle) return;
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      closeNav();
    });
  }

  /* Fade-in: add .is-visible when a .reveal block enters the viewport. */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const fade = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) {
      fade.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();

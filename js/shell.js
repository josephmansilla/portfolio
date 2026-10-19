var SITE_LINKS = {
  github: "https://github.com/josephmansilla",
  linkedin: "https://www.linkedin.com/in/josephthomansilla",
  substack: "https://substack.com/@josephmansilla",
  youtube: "https://www.youtube.com/@onlybugz",
  twitter: "https://x.com/onlybugs_",
  discord: "https://discord.com/users/873689768309977239",
  email: "mailto:mansillajoseph@protonmail.com",
};

/* Drop the real PDFs in assets/cv/ using these file names. */
var RESUME_FILES = {
  en: "assets/cv/resume-Joseph-Mansilla-en.pdf",
  es: "assets/cv/cv-Joseph-Mansilla-es.pdf",
  pt: "assets/cv/cv-Joseph-Mansilla-pt.pdf",
};

(function () {
  var NAV = [
    { id: "about", href: "about.html", label: "About me" },
    { id: "experience", href: "experience.html", label: "Experience" },
    { id: "projects", href: "projects.html", label: "Projects" },
    { id: "articles", href: "articles.html", label: "Articles" },
    { id: "contact", href: "contact.html", label: "Contact" },
  ];

  if (!document.querySelector('link[rel="icon"]')) {
    var favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "assets/images/jtm.ico";
    document.head.appendChild(favicon);
  }

  var page = document.body.getAttribute("data-page") || "";
  var hidden = (document.body.getAttribute("data-nav-hide") || "")
    .split(/\s+/)
    .filter(Boolean);

  var headerHost = document.getElementById("site-header");
  var footerHost = document.getElementById("site-footer");

  function icon(name) {
    return '<span class="icon-mask icon-' + name + '" aria-hidden="true"></span>';
  }

  function external(href) {
    return href.indexOf("mailto:") === 0 || href.indexOf("assets/") === 0
      ? ""
      : ' rel="noopener noreferrer"';
  }

  function resumeHref() {
    var lang = document.documentElement.lang;
    return RESUME_FILES[lang] || RESUME_FILES.en;
  }

  function socialAnchor(name, label, iconName, href, extra) {
    return (
      '<a href="' +
      href +
      '" aria-label="' +
      label +
      '"' +
      (extra || "") +
      external(href) +
      ">" +
      icon(iconName) +
      "</a>"
    );
  }

  if (headerHost) {
    var items = NAV.filter(function (item) {
      return hidden.indexOf(item.id) === -1;
    })
      .map(function (item) {
        var current = item.id === page ? ' aria-current="page"' : "";
        return (
          "<li><a href=\"" +
          item.href +
          "\" data-i18n=\"nav." +
          item.id +
          "\"" +
          current +
          ">" +
          t("nav." + item.id) +
          "</a></li>"
        );
      })
      .join("");

    headerHost.outerHTML =
      '<header class="site-header">' +
      '<div class="header-inner">' +
      '<div class="header-start">' +
      '<a class="logo" href="index.html" data-i18n-aria="nav.home" aria-label="' +
      t("nav.home") +
      '"></a>' +
      "</div>" +
      '<div class="header-actions">' +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>' +
      "<span></span><span></span><span></span>" +
      '<span class="visually-hidden" data-i18n="nav.menu">' +
      t("nav.menu") +
      "</span>" +
      "</button>" +
      '<nav class="site-nav" id="site-nav" data-nav data-i18n-aria="nav.primary" aria-label="' +
      t("nav.primary") +
      '"><ul>' +
      items +
      "</ul></nav>" +
      '<div class="lang-menu">' +
      '<button class="lang-toggle" type="button" aria-expanded="false" aria-controls="lang-list" data-i18n-aria="nav.language" aria-label="' +
      t("nav.language") +
      '">' +
      icon("language") +
      "</button>" +
      '<ul class="lang-list" id="lang-list" hidden>' +
      '<li><button type="button" data-lang-option="en">English</button></li>' +
      '<li><button type="button" data-lang-option="es">Español</button></li>' +
      '<li><button type="button" data-lang-option="pt">Português</button></li>' +
      "</ul></div>" +
      "</div></div></header>";
  }

  if (footerHost) {
    var social = [
      { name: "github", label: "GitHub" },
      { name: "linkedin", label: "LinkedIn" },
      { name: "twitter", label: "Twitter" },
      { name: "discord", label: "Discord" },
      { name: "substack", label: "Substack" },
      { name: "youtube", label: "YouTube" },
    ]
      .map(function (item) {
        return socialAnchor(item.name, item.label, item.name, SITE_LINKS[item.name]);
      })
      .join("");

    footerHost.outerHTML =
      '<footer class="site-footer">' +
      '<div class="footer-inner">' +
      '<nav class="footer-social" data-i18n-aria="nav.social" aria-label="' +
      t("nav.social") +
      '">' +
      social +
      "</nav>" +
      "<p>© <span data-year></span> Joseph Thomas Mansilla</p>" +
      "</div></footer>";
  }

  var SOCIAL = {
    email: { href: "email", icon: "mail", label: "Email" },
    github: { href: "github", icon: "github", label: "GitHub" },
    linkedin: { href: "linkedin", icon: "linkedin", label: "LinkedIn" },
    youtube: { href: "youtube", icon: "youtube", label: "YouTube" },
    twitter: { href: "twitter", icon: "twitter", label: "Twitter" },
    discord: { href: "discord", icon: "discord", label: "Discord" },
    resume: { href: "resume", icon: "resume", label: "home.resume" },
  };

  document.querySelectorAll("[data-social]").forEach(function (host) {
    var names = (host.getAttribute("data-social") || "email github linkedin")
      .split(/\s+/)
      .filter(Boolean);
    var row = names
      .map(function (name) {
        return SOCIAL[name];
      })
      .filter(Boolean)
      .map(function (item) {
        if (item.href === "resume") {
          return (
            '<a class="icon-btn" data-resume download href="' +
            resumeHref() +
            '" data-i18n-aria="' +
            item.label +
            '" aria-label="' +
            t(item.label) +
            '">' +
            icon(item.icon) +
            "</a>"
          );
        }
        return (
          '<a class="icon-btn" href="' +
          SITE_LINKS[item.href] +
          '" aria-label="' +
          item.label +
          '"' +
          external(SITE_LINKS[item.href]) +
          ">" +
          icon(item.icon) +
          "</a>"
        );
      })
      .join("");
    host.innerHTML = row;
  });

  var langToggle = document.querySelector(".lang-toggle");
  var langList = document.getElementById("lang-list");
  if (langToggle && langList) {
    var saved = "en";
    try {
      saved = localStorage.getItem("lang") || "en";
    } catch (e) {
      saved = "en";
    }
    if (saved !== "en" && saved !== "es" && saved !== "pt") saved = "en";
    document.documentElement.lang = saved;

    function markLang(code) {
      langList.querySelectorAll("[data-lang-option]").forEach(function (button) {
        var on = button.getAttribute("data-lang-option") === code;
        if (on) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
    }

    function closeLang() {
      langList.hidden = true;
      langToggle.setAttribute("aria-expanded", "false");
    }

    markLang(saved);
    document.querySelectorAll("[data-resume]").forEach(function (link) {
      link.setAttribute("href", RESUME_FILES[saved] || RESUME_FILES.en);
    });

    langToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var open = langList.hidden;
      langList.hidden = !open;
      langToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    langList.addEventListener("click", function (event) {
      var button = event.target.closest("[data-lang-option]");
      if (!button) return;
      var next = button.getAttribute("data-lang-option");
      document.documentElement.lang = next;
      markLang(next);
      document.querySelectorAll("[data-resume]").forEach(function (link) {
        link.setAttribute("href", RESUME_FILES[next] || RESUME_FILES.en);
      });
      try {
        localStorage.setItem("lang", next);
      } catch (e) {
        /* private mode */
      }
      closeLang();
      document.dispatchEvent(new CustomEvent("langchange"));
    });

    document.addEventListener("click", function (event) {
      if (langList.hidden) return;
      if (langList.contains(event.target) || langToggle.contains(event.target)) return;
      closeLang();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeLang();
    });
  }

  if (typeof applyI18n === "function") applyI18n();
})();

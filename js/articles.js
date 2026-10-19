/*
  articles.js
  Pieces that live somewhere else (Substack or any URL).

  Replace SUBSTACK_URL with your profile.
  Each item's `url` is where the title link goes. Nothing is imported
  from Substack automatically.
*/

const SUBSTACK_URL =
  typeof SITE_LINKS !== "undefined" ? SITE_LINKS.substack : "https://substack.com";

const ARTICLES = [
  {
    id: "a1",
    title: {
      en: "Current Placeholder",
      es: "Marcador de posición",
      pt: "Marcador de posição",
    },
    date: "19/10/2026",
    excerpt: {
      en: "A short placeholder.",
      es: "Un texto breve de relleno.",
      pt: "Um texto curto de preenchimento.",
    },
    url: "https://substack.com/@josephmansilla",
  },
];

function renderArticles() {
  const list = document.querySelector("[data-article-list]");
  const profile = document.querySelector("[data-substack]");
  if (profile) profile.setAttribute("href", SUBSTACK_URL);
  if (!list) return;

  list.innerHTML = ARTICLES.map(function (article) {
    return (
      '<a class="article-card" href="' +
      escapeHtml(article.url) +
      '" rel="noopener noreferrer">' +
      '<p class="kicker">' +
      escapeHtml(article.date) +
      "</p>" +
      "<h3>" +
      escapeHtml(L(article.title)) +
      "</h3>" +
      "<p>" +
      escapeHtml(L(article.excerpt)) +
      "</p>" +
      "</a>"
    );
  }).join("");
}

renderArticles();
document.addEventListener("langchange", renderArticles);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

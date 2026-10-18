/*
  articles.js
  Pieces that live somewhere else (Substack or any URL).

  Replace SUBSTACK_URL with your profile.
  Each item's `url` is where the title link goes. Nothing is imported
  from Substack automatically.
*/

const SUBSTACK_URL = "https://substack.com";

const ARTICLES = [
  {
    id: "a1",
    title: "Notes on keeping a system easy to change (placeholder)",
    date: "2026",
    excerpt: "A short placeholder. Point this at a real Substack post when you publish one.",
    url: "https://substack.com",
  },
  {
    id: "a2",
    title: "What I look for in a readable codebase (placeholder)",
    date: "2026",
    excerpt: "Another placeholder card. The click always leaves this site.",
    url: "https://substack.com",
  },
];

(function renderArticles() {
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
      escapeHtml(article.title) +
      "</h3>" +
      "<p>" +
      escapeHtml(article.excerpt) +
      "</p>" +
      "</a>"
    );
  }).join("");
})();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/*
  experience.js
  (placeholder) Timeline data and rendering.

  Edit EXPERIENCE below. Each item needs:
  id, type ("work" | "education" | "course"), title, org, location, start, end, bullets
*/

const EXPERIENCE = [
  {
    id: "edu-1",
    type: "education",
    title: "Systems Engineering (in progress)",
    org: "University — placeholder",
    location: "Buenos Aires, Argentina",
    start: "2023",
    end: "Present",
    bullets: [
      "Coursework in algorithms, databases, and software architecture.",
      "Replace this org name with your university.",
    ],
  },
  {
    id: "work-1",
    type: "work",
    title: "Junior developer intern (placeholder)",
    org: "Example Studio",
    location: "Remote",
    start: "2025",
    end: "Present",
    bullets: [
      "Supported a small web product with HTML, CSS, and JavaScript.",
      "Practiced code reviews and writing clear documentation.",
    ],
  },
  {
    id: "course-1",
    type: "course",
    title: "Web development course (placeholder)",
    org: "Online platform",
    location: "Remote",
    start: "2024",
    end: "2024",
    bullets: ["Completed a project-based introduction to semantic HTML and CSS layout."],
  },
  {
    id: "course-2",
    type: "course",
    title: "Introduction to system design (placeholder)",
    org: "Self-paced",
    location: "Buenos Aires",
    start: "2025",
    end: "2025",
    bullets: ["Studied how to split a system into services, data stores, and APIs."],
  },
];

(function renderExperience() {
  const list = document.querySelector("[data-experience-list]");
  if (!list) return;

  list.innerHTML = EXPERIENCE.map(function (item) {
    const bullets = item.bullets
      .map(function (line) {
        return "<li>" + escapeHtml(line) + "</li>";
      })
      .join("");

    return (
      '<li class="timeline-item">' +
      '<article class="timeline-card">' +
      '<span class="badge">' +
      escapeHtml(item.type) +
      "</span>" +
      "<h3>" +
      escapeHtml(item.title) +
      "</h3>" +
      '<p class="timeline-meta">' +
      "<span>" +
      escapeHtml(item.org) +
      "</span>" +
      "<span>" +
      escapeHtml(item.location) +
      "</span>" +
      "<span>" +
      escapeHtml(item.start) +
      " – " +
      escapeHtml(item.end) +
      "</span>" +
      "</p>" +
      "<ul>" +
      bullets +
      "</ul>" +
      "</article>" +
      "</li>"
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

/*
  experience.js
  (placeholder) Education, work, and courses.

  Edit EXPERIENCE. type is "education", "work", or "course".
  Courses stay hidden until this array has at least one course.
  There is no per-card type badge: the section heading is the label.
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
    id: "edu-2",
    type: "education",
    title: "Technical secondary school (placeholder)",
    org: "School — placeholder",
    location: "Buenos Aires, Argentina",
    start: "2018",
    end: "2022",
    bullets: ["Placeholder. Replace with your real school and focus."],
  },
  {
    id: "edu-3",
    type: "education",
    title: "Mathematics and physics track (placeholder)",
    org: "School — placeholder",
    location: "Buenos Aires, Argentina",
    start: "2018",
    end: "2022",
    bullets: ["Placeholder for a second education entry."],
  },
  {
    id: "edu-4",
    type: "education",
    title: "English studies (placeholder)",
    org: "Institute — placeholder",
    location: "Buenos Aires, Argentina",
    start: "2016",
    end: "2021",
    bullets: ["Placeholder. Swap in the real program when you have it."],
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
    id: "work-2",
    type: "work",
    title: "Teaching assistant (placeholder)",
    org: "University — placeholder",
    location: "Buenos Aires, Argentina",
    start: "2025",
    end: "Present",
    bullets: ["Placeholder for a second work entry."],
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function experienceCard(item) {
  const bullets = item.bullets
    .map(function (line) {
      return "<li>" + escapeHtml(line) + "</li>";
    })
    .join("");

  return (
    '<li class="timeline-item">' +
    '<article class="timeline-card">' +
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
}

(function renderExperience() {
  const lists = document.querySelectorAll("[data-experience-list]");
  if (!lists.length) return;

  lists.forEach(function (list) {
    const type = list.getAttribute("data-experience-list");
    const items = EXPERIENCE.filter(function (item) {
      return item.type === type;
    });
    const block = list.closest("[data-experience-block]");

    if (!items.length) {
      if (block) block.hidden = true;
      return;
    }

    if (block) block.hidden = false;
    list.innerHTML = items.map(experienceCard).join("");
  });
})();

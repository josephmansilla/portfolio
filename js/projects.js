/*
  projects.js
  (placeholder) About chips, project cards, and the project detail page.

  TECH_STACK feeds about.html.
  PROJECTS feeds projects.html. Each card links to project.html?id=...
  `details` is the longer text shown only on the detail page.
*/

const TECH_STACK = ["HTML", "CSS", "JavaScript", "Git", "SQL", "Python"];

const PROJECTS = [
  {
    id: "p1",
    title: "Campus study planner (placeholder)",
    description: "A static planner that groups weekly tasks by course and deadline.",
    details: [
      "This is placeholder copy for the project page. Replace it with what you actually built, who it was for, and what you learned.",
      "The planner groups a week of tasks by course so a deadline does not get lost in a single flat list. The interface is static HTML styled with CSS Grid.",
    ],
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/josephmansilla",
    demo: "",
    image: "assets/images/placeholder-avatar.svg",
  },
  {
    id: "p2",
    title: "Library inventory notes (placeholder)",
    description: "Simple CRUD-style notes UI for tracking books and loan status.",
    details: [
      "Placeholder detail. Describe the data you stored and how a reader would add or return a book.",
      "The interesting part to write about is the shape of the records: title, status, and who has the copy.",
    ],
    techs: ["JavaScript", "SQL"],
    github: "https://github.com/josephmansilla",
    demo: "",
    image: "assets/images/placeholder-avatar.svg",
  },
  {
    id: "p3",
    title: "CLI file organizer (placeholder)",
    description: "A small Python script that sorts downloads into folders by type.",
    details: [
      "Placeholder detail. Explain the rules the script uses, for example images in one folder and documents in another.",
      "Mention how you tested it on a sample folder before pointing it at real downloads.",
    ],
    techs: ["Python", "Git"],
    github: "https://github.com/josephmansilla",
    demo: "",
    image: "assets/images/placeholder-avatar.svg",
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

(function renderTechStack() {
  const list = document.querySelector("[data-tech-stack]");
  if (!list) return;
  list.innerHTML = TECH_STACK.map(function (tech) {
    return '<li class="chip">' + escapeHtml(tech) + "</li>";
  }).join("");
})();

(function renderProjects() {
  const grid = document.querySelector("[data-project-grid]");
  const filters = document.querySelector("[data-project-filters]");
  if (!grid || !filters) return;

  let active = "All";
  const techs = ["All"].concat(
    Array.from(
      new Set(
        PROJECTS.reduce(function (all, project) {
          return all.concat(project.techs);
        }, [])
      )
    )
  );

  function cardHtml(project) {
    return (
      '<a class="project-card" href="project.html?id=' +
      encodeURIComponent(project.id) +
      '">' +
      '<img src="' +
      escapeHtml(project.image) +
      '" alt="" width="48" height="48" />' +
      "<h3>" +
      escapeHtml(project.title) +
      "</h3>" +
      "<p>" +
      escapeHtml(project.description) +
      "</p>" +
      '<ul class="chip-list">' +
      project.techs
        .map(function (tech) {
          return '<li class="chip">' + escapeHtml(tech) + "</li>";
        })
        .join("") +
      "</ul>" +
      "</a>"
    );
  }

  function paintGrid() {
    const visible = PROJECTS.filter(function (project) {
      return active === "All" || project.techs.indexOf(active) !== -1;
    });
    grid.innerHTML = visible.map(cardHtml).join("");
  }

  function paintFilters() {
    filters.innerHTML = techs
      .map(function (tech) {
        const pressed = tech === active ? "true" : "false";
        return (
          '<button type="button" class="filter-btn" data-filter="' +
          escapeHtml(tech) +
          '" aria-pressed="' +
          pressed +
          '">' +
          escapeHtml(tech) +
          "</button>"
        );
      })
      .join("");
  }

  filters.addEventListener("click", function (event) {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    active = button.getAttribute("data-filter");
    paintFilters();
    paintGrid();
  });

  paintFilters();
  paintGrid();
})();

(function renderProjectDetail() {
  const root = document.querySelector("[data-project-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find(function (item) {
    return item.id === id;
  });

  if (!project) {
    root.innerHTML =
      "<h1>Project not found</h1>" +
      '<p class="muted">That id is not in the projects list.</p>' +
      '<p><a href="projects.html">Back to projects</a></p>';
    return;
  }

  document.title = project.title + " — Joseph Thomas Mansilla";

  const paragraphs = (project.details || [])
    .map(function (paragraph) {
      return "<p>" + escapeHtml(paragraph) + "</p>";
    })
    .join("");

  const links = [];
  if (project.github) {
    links.push(
      '<a href="' + escapeHtml(project.github) + '" rel="noopener noreferrer">GitHub</a>'
    );
  }
  if (project.demo) {
    links.push(
      '<a href="' + escapeHtml(project.demo) + '" rel="noopener noreferrer">Demo</a>'
    );
  }

  root.innerHTML =
    '<article class="detail">' +
    '<p><a href="projects.html">Projects</a></p>' +
    "<h1>" +
    escapeHtml(project.title) +
    "</h1>" +
    "<p class=\"lede\">" +
    escapeHtml(project.description) +
    "</p>" +
    paragraphs +
    '<ul class="chip-list">' +
    project.techs
      .map(function (tech) {
        return '<li class="chip">' + escapeHtml(tech) + "</li>";
      })
      .join("") +
    "</ul>" +
    '<p class="project-links">' +
    links.join("") +
    "</p>" +
    "</article>";
})();

/*
  projects.js
  (placeholder) Project cards, About tech chips, and the technology filter.

  TECH_STACK is the single source of truth for the About section chips.
  PROJECTS drives the card grid. github and demo can be full URLs or "".
*/

const TECH_STACK = ["HTML", "CSS", "JavaScript", "Git", "SQL", "Python"];

const PROJECTS = [
  {
    id: "p1",
    title: "Campus study planner (placeholder)",
    description: "A static planner that groups weekly tasks by course and deadline.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/josephmansilla",
    demo: "",
    image: "assets/images/placeholder-avatar.svg",
  },
  {
    id: "p2",
    title: "Library inventory notes (placeholder)",
    description: "Simple CRUD-style notes UI for tracking books and loan status.",
    techs: ["JavaScript", "SQL"],
    github: "https://github.com/josephmansilla",
    demo: "",
    image: "assets/images/placeholder-avatar.svg",
  },
  {
    id: "p3",
    title: "CLI file organizer (placeholder)",
    description: "A small Python script that sorts downloads into folders by type.",
    techs: ["Python", "Git"],
    github: "https://github.com/josephmansilla",
    demo: "",
    image: "assets/images/placeholder-avatar.svg",
  },
];

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
    const demoLink = project.demo
      ? '<a href="' +
        escapeHtml(project.demo) +
        '" rel="noopener noreferrer">Demo</a>'
      : "";
    const githubLink = project.github
      ? '<a href="' +
        escapeHtml(project.github) +
        '" rel="noopener noreferrer">GitHub</a>'
      : "";

    return (
      '<article class="project-card">' +
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
      '<p class="project-links">' +
      githubLink +
      demoLink +
      "</p>" +
      "</article>"
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

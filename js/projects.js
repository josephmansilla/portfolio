/*
  projects.js
  (placeholder) About chips, project cards, and the project detail page.

  TECH_STACK is the programming list on About (not spoken languages).
  PROJECTS feeds projects.html. Each card links to project.html?id=...
  `details` is the longer text shown only on the detail page.
*/

/* Programming languages. Spoken languages live in about.html. */
const TECH_STACK = ["Java", "JavaScript", "SQL", "Go", "Scala", "Ruby", "Haskell", "Python"];

const TECHNOLOGIES = [
  "Spring",
  "Hibernate",
  "React",
  "Microsoft SQL Server",
  "MongoDB",
  "MySQL",
  "Express.js",
  "AWS",
  "Oracle Cloud",
  "Docker", 
  "Docker Compose",
];


const PROJECTS = [
  {
    id: "p1",
    title: "Operating System from Scratch",
    description: "This integrator project was developed throughout UTN's Operating Systems class, focusing on the simulation of a distributed operating system.",
    details: [
      "Its goal is to apply key concepts of process scheduling, memory management, and input/output (I/O), while implementing a distributed architecture with multiple modules communicating via HTTP, using multithreading and concurrency.",
      "Led the development of the Memory module, responsible for resource allocation and management for each process, ensuring optimal performance based on predefined metrics and functional requirements.",
    ],
    techs: ["Go","Multithreading", "Concurrency", "Git"],
    github: "https://github.com/josephmansilla/tp-sistemas-operativos-1c-2025",
    demo: "",
    video: "https://www.youtube.com/watch?v=twMAzy64x6Q",
    start: "Apr 2025",
    end: "Jul 2025",
    image: "assets/images/boca-gopher.png",
  },
  {
    id: "p2",
    title: "Full-Stack Incident Management Web Application",
    description: "MetaMapa is a project developed as an integrator project for UTN's System Design class. It is a microservices-based distributed platform for collaborative mapping management designed to enhance collective intelligence. Developed with Java 17 and Spring.",
    details: [
      "Developed backend using Java and Spring, and built the frontend with HTML, CSS, JavaScript, and Thymeleaf.",
      "Designed a scalable microservices architecture with RESTful APIs to enable efficient communication between services and support platform scalability.",
      "Deployed the app with AWS, orchestrating Docker containers for each microservice in a production environment.",
    ],
    techs: [ "Java", "SpringBoot", "SQL","MySQL", "Maven", "CSS", "HTML", "JavaScript", "AWS", "Docker", "Hibernate", "Git"],
    github: "https://github.com/josephmansilla/tp-dsi-full-stack-app-2025",
    demo: "",
    video: "",
    start: "Apr 2025",
    end: "Dec 2025",
    image: "assets/images/metamapa.webp",
  },
  {
    id: "p3",
    title: "Travel Database & Business Intelligence Platform",
    description: "This project implements a comprehensive Business Intelligence system for a travel agency offering tourism services developed as an integrator project for UTN's dababase class.",
    details: [
      "Designed and implemented a relational database in 3NF, modeling domain and migrating from denormalized tables.",
      "Designed a star-schema and analytical views to support Business Intelligence reporting and decision-making.",
      "Transactional Setup: Downloads a denormalized SQL table with over 700,000 records and executes the initial creation script to generate the core domain Entity-Relationship Diagram (ERD).",
      "BI & BA Generation: Runs the subsequent script to build the star schema tables and analytical views required for Business Intelligence and Business Analysis objectives."
    ],
    techs: ["SQL", "T-SQL", "Microsoft SQL Server"],
    github: "https://github.com/josephmansilla/tp-agencia-viajes-BI-bbdd-1c-2026",
    demo: "",
    video: "",
    start: "Mar 2026",
    end: "Jul 2026",
    image: "assets/images/octopus.webp",
  },
  {
    id: "p4",
    title: "Full-Stack Medical Appointment Platform",
    description: "This project is an end-to-end software application developed as an integrator project for UTN's Software Engineering class. It covers the entire application lifecycle—from core domain modeling and database architecture to front-end development, containerization, cloud deployment, and automated testing.",
    details: [
      "Methodology & Core Domain: Developed using an iterative and incremental process, grounded in a refined Object-Oriented Programming (OOP) domain model.",
      "Backend & API Architecture: Powered by a self-documented RESTful API featuring robust concurrency control and race condition management.",
      "Database & Persistence: Utilizes MongoDB for scalable NoSQL data persistence.",
      "Testing & Quality Assurance: Includes a full suite of unit and integration tests, along with End-to-End (E2E) test automation implemented with Playwright.",
      "Frontend & User Experience: Built as a React Single Page Application (SPA) designed with an intuitive UX and strict accessibility standards (WCAG/ARIA compliance).",
      "DevOps & Cloud Infrastructure: Containerized with Docker, orchestrated via Portainer and Nginx, and deployed on Oracle Cloud Infrastructure (OCI).",
    ],
    techs: ["JavaScript", "React", "CSS", "HTML", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Git", "Swagger", "Nginx", "Oracle Cloud", "Docker", "Docker Compose", "Portainer"],
    github: "https://github.com/josephmansilla/tp-sweet-medical-dds-1c-2026",
    demo: "https://sweet-medical-2026-g1.duckdns.org/",
    video: "",
    start: "Apr 2026",
    end: "Jul 2026",
    image: "assets/images/sweetmedical.webp",
  },
  
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dateRange(project) {
  if (project.start && project.end) return project.start + " – " + project.end;
  return project.start || project.end || "";
}

function youtubeId(url) {
  if (!url) return "";
  const match = String(url).match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

function chipList(items) {
  return items
    .map(function (tech) {
      return '<li class="chip">' + escapeHtml(tech) + "</li>";
    })
    .join("");
}

(function renderTechStack() {
  const techStack = document.querySelector("[data-tech-stack]");
  const technologies = document.querySelector("[data-technologies]");
  if (techStack) techStack.innerHTML = chipList(TECH_STACK);
  if (technologies) technologies.innerHTML = chipList(TECHNOLOGIES);
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
      '<div class="card-media">' +
      '<img src="' +
      escapeHtml(project.image) +
      '" alt="" width="48" height="48" />' +
      "<p class=\"project-dates\">" +
      escapeHtml(dateRange(project)) +
      "</p>" +
      "</div>" +
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
      '<a href="' + escapeHtml(project.github) + '" rel="noopener noreferrer">Source code</a>'
    );
  }
  if (project.demo) {
    links.push(
      '<a class="try-link" href="' +
        escapeHtml(project.demo) +
        '" rel="noopener noreferrer"><span class="icon-mask icon-arcade" aria-hidden="true"></span>Try it out</a>'
    );
  }

  const videoId = youtubeId(project.video);
  const videoHtml = videoId
    ? '<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/' +
      escapeHtml(videoId) +
      '" title="' +
      escapeHtml(project.title) +
      ' video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    : "";

  root.innerHTML =
    '<article class="detail">' +
    '<p><a href="projects.html">Projects</a></p>' +
    '<div class="detail-media">' +
    '<img src="' +
    escapeHtml(project.image) +
    '" alt="" width="72" height="72" />' +
    "<p class=\"project-dates\">" +
    escapeHtml(dateRange(project)) +
    "</p>" +
    "</div>" +
    "<h1>" +
    escapeHtml(project.title) +
    "</h1>" +
    videoHtml +
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

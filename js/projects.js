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
  "SpringBoot",
  "React",
  "Hibernate",
  "Microsoft SQL Server",
  "MySQL",
  "MongoDB",
  "Express.js",
  "Maven",
  "AWS",
  "Oracle Cloud",
  "Docker", 
  "Docker Compose",
  "Portainer",
  "Nginx",
];


const PROJECTS = [
  {
    id: "p1",
    title: {
      en: "Operating System from Scratch",
      es: "Sistema operativo desde cero",
      pt: "Sistema operacional do zero",
    },
    description: {
      en: "This integrator project was developed throughout UTN's Operating Systems class, focusing on the simulation of a distributed operating system.",
      es: "Este proyecto integrador se desarrolló a lo largo de la materia Sistemas Operativos de la UTN y se centra en la simulación de un sistema operativo distribuido.",
      pt: "Este projeto integrador foi desenvolvido ao longo da disciplina de Sistemas Operacionais da UTN e se concentra na simulação de um sistema operacional distribuído.",
    },
    details: {
      en: [
        "Its goal is to apply key concepts of process scheduling, memory management, and input/output (I/O), while implementing a distributed architecture with multiple modules communicating via HTTP, using multithreading and concurrency.",
        "Led the development of the Memory module, responsible for resource allocation and management for each process, ensuring optimal performance based on predefined metrics and functional requirements.",
      ],
      es: [
        "Su objetivo es aplicar conceptos de planificación de procesos, administración de memoria y entrada/salida, con una arquitectura distribuida de varios módulos que se comunican por HTTP, usando multihilos y concurrencia.",
        "Lideré el desarrollo del módulo de Memoria, encargado de asignar y administrar los recursos de cada proceso para cumplir las métricas y los requisitos funcionales.",
      ],
      pt: [
        "O objetivo é aplicar conceitos de escalonamento de processos, gerenciamento de memória e entrada/saída, com uma arquitetura distribuída de vários módulos que se comunicam por HTTP, usando multithreading e concorrência.",
        "Liderei o desenvolvimento do módulo de Memória, responsável por alocar e gerenciar os recursos de cada processo para cumprir as métricas e os requisitos funcionais.",
      ],
    },
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
    title: {
      en: "Travel Database & Business Intelligence Platform",
      es: "Base de datos de viajes y plataforma de inteligencia de negocios",
      pt: "Banco de dados de viagens e plataforma de inteligência de negócios",
    },
    description: {
      en: "This project implements a comprehensive Business Intelligence system for a travel agency offering tourism services developed as an integrator project for UTN's dababase class.",
      es: "Este proyecto implementa un sistema de inteligencia de negocios para una agencia de viajes, desarrollado como proyecto integrador de la materia de bases de datos de la UTN.",
      pt: "Este projeto implementa um sistema de inteligência de negócios para uma agência de viagens, desenvolvido como projeto integrador da disciplina de banco de dados da UTN.",
    },
    details: {
      en: [
        "Designed and implemented a relational database in 3NF, modeling domain and migrating from denormalized tables.",
        "Designed a star-schema and analytical views to support Business Intelligence reporting and decision-making.",
        "Transactional Setup: Downloads a denormalized SQL table with over 700,000 records and executes the initial creation script to generate the core domain Entity-Relationship Diagram (ERD).",
        "BI & BA Generation: Runs the subsequent script to build the star schema tables and analytical views required for Business Intelligence and Business Analysis objectives."
      ],
      es: [
        "Diseñé e implementé una base relacional en 3FN, modelando el dominio y migrando desde tablas desnormalizadas.",
        "Diseñé un esquema estrella y vistas analíticas para reportes de inteligencia de negocios y toma de decisiones.",
        "Carga transaccional: descarga una tabla SQL desnormalizada de más de 700.000 registros y ejecuta el script inicial para generar el diagrama entidad-relación del dominio.",
        "Generación de BI y BA: ejecuta el script siguiente para armar las tablas del esquema estrella y las vistas analíticas."
      ],
      pt: [
        "Projetei e implementei um banco relacional em 3FN, modelando o domínio e migrando a partir de tabelas desnormalizadas.",
        "Projetei um esquema estrela e visões analíticas para relatórios de inteligência de negócios e tomada de decisão.",
        "Carga transacional: baixa uma tabela SQL desnormalizada com mais de 700.000 registros e executa o script inicial para gerar o diagrama entidade-relacionamento do domínio.",
        "Geração de BI e BA: executa o script seguinte para montar as tabelas do esquema estrela e as visões analíticas."
      ],
    },
    techs: ["SQL", "T-SQL", "Microsoft SQL Server"],
    github: "https://github.com/josephmansilla/tp-agencia-viajes-BI-bbdd-1c-2026",
    demo: "",
    video: "",
    start: "Mar 2026",
    end: "Jul 2026",
    image: "assets/images/octopus.webp",
  },
  {
    id: "p3",
    title: {
      en: "Full-Stack Incident Management Web Application",
      es: "Aplicación web full-stack de gestión de incidentes",
      pt: "Aplicação web full-stack de gestão de incidentes",
    },
    description: {
      en: "MetaMapa is a project developed as an integrator project for UTN's System Design class. It is a microservices-based distributed platform for collaborative mapping management designed to enhance collective intelligence. Developed with Java 17 and Spring.",
      es: "MetaMapa es el proyecto integrador de la materia Diseño de Sistemas de la UTN. Es una plataforma distribuida de microservicios para la gestión colaborativa de mapas, pensada para mejorar la inteligencia colectiva. Desarrollada con Java 17 y Spring.",
      pt: "MetaMapa é o projeto integrador da disciplina de Projeto de Sistemas da UTN. É uma plataforma distribuída de microsserviços para a gestão colaborativa de mapas, pensada para melhorar a inteligência coletiva. Desenvolvida com Java 17 e Spring.",
    },
    details: {
      en: [
        "Developed backend using Java and Spring, and built the frontend with HTML, CSS, JavaScript, and Thymeleaf.",
        "Designed a scalable microservices architecture with RESTful APIs to enable efficient communication between services and support platform scalability.",
        "Deployed the app with AWS, orchestrating Docker containers for each microservice in a production environment.",
      ],
      es: [
        "Desarrollé el backend con Java y Spring, y el frontend con HTML, CSS, JavaScript y Thymeleaf.",
        "Diseñé una arquitectura de microservicios escalable con APIs REST para que los servicios se comuniquen y la plataforma pueda crecer.",
        "Desplegué la aplicación en AWS, orquestando un contenedor Docker por microservicio en un entorno de producción.",
      ],
      pt: [
        "Desenvolvi o backend com Java e Spring, e o frontend com HTML, CSS, JavaScript e Thymeleaf.",
        "Projetei uma arquitetura de microsserviços escalável com APIs REST para a comunicação entre serviços e o crescimento da plataforma.",
        "Publiquei a aplicação na AWS, orquestrando um contêiner Docker por microsserviço em um ambiente de produção.",
      ],
    },
    techs: [ "Java", "SpringBoot", "SQL","MySQL", "Maven", "CSS", "HTML", "JavaScript", "AWS", "Docker", "Hibernate", "Git"],
    github: "https://github.com/josephmansilla/tp-dsi-full-stack-app-2025",
    demo: "",
    video: "",
    start: "Apr 2025",
    end: "Dec 2025",
    image: "assets/images/metamapa.webp",
  },
  {
    id: "p4",
    title: {
      en: "Full-Stack Medical Appointment Platform",
      es: "Plataforma full-stack de turnos médicos",
      pt: "Plataforma full-stack de consultas médicas",
    },
    description: {
      en: "This project is an end-to-end software application developed as an integrator project for UTN's Software Engineering class. Covering the entire application lifecycle: core domain modeling and database architecture to front-end development, containerization, cloud deployment, and automated testing.",
      es: "Aplicación de punta a punta desarrollada como proyecto integrador de Ingeniería de Software de la UTN. Cubre el ciclo completo: modelo de dominio y base de datos, frontend, contenedores, despliegue en la nube y pruebas automáticas.",
      pt: "Aplicação de ponta a ponta desenvolvida como projeto integrador de Engenharia de Software da UTN. Cobre o ciclo completo: modelo de domínio e banco de dados, frontend, contêineres, publicação na nuvem e testes automáticos.",
    },
    details: {
      en: [
        "Methodology & Core Domain: Developed using an iterative and incremental process, grounded in a refined Object-Oriented Programming (OOP) domain model.",
        "Backend & API Architecture: Powered by a self-documented RESTful API featuring robust concurrency control and race condition management.",
        "Database & Persistence: Utilizes MongoDB for scalable NoSQL data persistence.",
        "Testing & Quality Assurance: Includes a full suite of unit and integration tests, along with End-to-End (E2E) test automation implemented with Playwright.",
        "Frontend & User Experience: Built as a React Single Page Application (SPA) designed with an intuitive UX and strict accessibility standards (WCAG/ARIA compliance).",
        "DevOps & Cloud Infrastructure: Containerized with Docker, orchestrated via Portainer and Nginx, and deployed on Oracle Cloud Infrastructure (OCI).",
      ],
      es: [
        "Metodología y dominio: proceso iterativo e incremental, apoyado en un modelo de dominio orientado a objetos.",
        "Backend y API: una API REST autodocumentada con control de concurrencia y de condiciones de carrera.",
        "Base de datos: MongoDB para persistencia NoSQL escalable.",
        "Pruebas: suite de tests unitarios y de integración, más automatización end-to-end con Playwright.",
        "Frontend: SPA en React, con una experiencia clara y criterios de accesibilidad WCAG/ARIA.",
        "DevOps: contenedores Docker, orquestados con Portainer y Nginx, desplegados en Oracle Cloud Infrastructure (OCI).",
      ],
      pt: [
        "Metodologia e domínio: processo iterativo e incremental, apoiado em um modelo de domínio orientado a objetos.",
        "Backend e API: uma API REST autodocumentada com controle de concorrência e de condições de corrida.",
        "Banco de dados: MongoDB para persistência NoSQL escalável.",
        "Testes: suíte de testes unitários e de integração, mais automação end-to-end com Playwright.",
        "Frontend: SPA em React, com uma experiência clara e critérios de acessibilidade WCAG/ARIA.",
        "DevOps: contêineres Docker, orquestrados com Portainer e Nginx, publicados na Oracle Cloud Infrastructure (OCI).",
      ],
    },
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

var MONTHS = {
  Jan: { en: "Jan", es: "Ene", pt: "Jan" },
  Feb: { en: "Feb", es: "Feb", pt: "Fev" },
  Mar: { en: "Mar", es: "Mar", pt: "Mar" },
  Apr: { en: "Apr", es: "Abr", pt: "Abr" },
  May: { en: "May", es: "May", pt: "Mai" },
  Jun: { en: "Jun", es: "Jun", pt: "Jun" },
  Jul: { en: "Jul", es: "Jul", pt: "Jul" },
  Aug: { en: "Aug", es: "Ago", pt: "Ago" },
  Sep: { en: "Sep", es: "Sep", pt: "Set" },
  Oct: { en: "Oct", es: "Oct", pt: "Out" },
  Nov: { en: "Nov", es: "Nov", pt: "Nov" },
  Dec: { en: "Dec", es: "Dic", pt: "Dez" },
};

function localizeDate(value) {
  if (!value) return "";
  return String(value).replace(/^[A-Za-z]{3}/, function (month) {
    return MONTHS[month] ? L(MONTHS[month]) : month;
  });
}

function dateRange(project) {
  var start = localizeDate(project.start);
  var end = localizeDate(project.end);
  if (start && end) return start + " – " + end;
  return start || end || "";
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
      escapeHtml(L(project.title)) +
      "</h3>" +
      "<p>" +
      escapeHtml(L(project.description)) +
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
          escapeHtml(tech === "All" ? t("projects.all") : tech) +
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
  document.addEventListener("langchange", function () {
    paintFilters();
    paintGrid();
  });
})();

function backLink() {
  return (
    '<p><a class="back-link" href="projects.html"><span class="icon-mask icon-arrow-left" aria-hidden="true"></span>' +
    escapeHtml(t("projects.back")) +
    "</a></p>"
  );
}

function renderProjectDetail() {
  const root = document.querySelector("[data-project-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find(function (item) {
    return item.id === id;
  });

  if (!project) {
    document.title = t("projects.notFound") + " — Joseph Thomas Mansilla";
    root.innerHTML =
      "<h1>" +
      escapeHtml(t("projects.notFound")) +
      "</h1>" +
      '<p class="muted">' +
      escapeHtml(t("projects.notFoundBody")) +
      "</p>" +
      backLink();
    return;
  }

  var title = L(project.title);
  document.title = title + " — Joseph Thomas Mansilla";

  const paragraphs = (L(project.details) || [])
    .map(function (paragraph) {
      return "<p>" + escapeHtml(paragraph) + "</p>";
    })
    .join("");

  const links = [];
  if (project.github) {
    links.push(
      '<a href="' + escapeHtml(project.github) + '" rel="noopener noreferrer">' + escapeHtml(t("projects.source")) + "</a>"
    );
  }
  if (project.demo) {
    links.push(
      '<a class="try-link" href="' +
        escapeHtml(project.demo) +
        '" rel="noopener noreferrer"><span class="icon-mask icon-arcade" aria-hidden="true"></span>' + escapeHtml(t("projects.try")) + "</a>"
    );
  }

  const videoId = youtubeId(project.video);
  const videoHtml = videoId
    ? '<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/' +
      escapeHtml(videoId) +
      '" title="' +
      escapeHtml(title) +
      ' video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    : "";

  root.innerHTML =
    '<article class="detail">' +
    backLink() +
    '<div class="detail-media">' +
    '<img src="' +
    escapeHtml(project.image) +
    '" alt="" width="72" height="72" />' +
    "<p class=\"project-dates\">" +
    escapeHtml(dateRange(project)) +
    "</p>" +
    "</div>" +
    "<h1>" +
    escapeHtml(title) +
    "</h1>" +
    videoHtml +
    "<p class=\"lede\">" +
    escapeHtml(L(project.description)) +
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
}

renderProjectDetail();
document.addEventListener("langchange", renderProjectDetail);

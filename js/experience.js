const EXPERIENCE = [
  {
    id: "edu-1",
    type: "education",
    title: {
      en: "Information Systems Engineering",
      es: "Ingeniería en Sistemas de Información",
      pt: "Engenharia de Sistemas de Informação",
    },
    org: "UTN FRBA",
    location: "Buenos Aires, Argentina",
    start: "2023",
    end: "Current",
    image: "assets/images/education/utn.webp",
    bullets: {
      en: [
        "Current GPA: 7.54/10.",
        "Currently in my fourth year of studies.",
      ],
      es: [
        "Promedio actual: 7.54/10.",
        "Actualmente en cuarto año.",
      ],
      pt: [
        "Média atual: 7.54/10.",
        "Atualmente no quarto ano.",
      ],
    },
  },
  {
    id: "edu-2",
    type: "education",
    title: {
      en: "Bilingual High School Diploma in Social Sciences",
      es: "Bachiller bilingüe en Ciencias Sociales con honores",
      pt: "Ensino médio bilíngue em Ciências Sociais com honras",
    },
    org: "Glasgow College",
    location: "Buenos Aires, Argentina",
    start: "2018",
    end: "2022",
    image: "assets/images/education/glasgow.webp",
    bullets: {
      en: [
        "Graduated with honors: top 3 of the class.",
        "Final GPA: 9.03/10.",
      ],
      es: [
        "Egresado con honores: top 3 de la clase.",
        "Promedio final: 9.03/10.",
      ],
      pt: [
        "Formado com honras: top 3 da turma.",
        "Média final: 9.03/10.",
      ],
    },
  },
  {
    id: "edu-3",
    type: "education",
    title: "International General Certificate of Secondary Education",
    org: "Cambridge University",
    location: "Buenos Aires, Argentina",
    start: "2020",
    end: "2022",
    image: "assets/images/education/cambridge.webp",
    bullets: {
      en: ["Syllabus: Business Studies, First Language English, Literature in English, Biology, First Language Spanish, Mathematics, Biology, Environmental Managment",
        "Passed with merit."],
      es: ["Currículum: Business Studies, First Language English, Literature in English, Biology, First Language Spanish, Mathematics, Biology, Environmental Managment",
        "Aprobado con mérito."],
      pt: ["Currículo: Business Studies, First Language English, Literatura em Inglês, Biologia, Primeiro Idioma Espanhol, Matemática, Biologia, Gestão Ambiental",
        "Aprovado com mérito."],
    },
  },
  {
    id: "edu-4",
    type: "education",
    title: "First Certificate in English",
    org: "Cambridge University",
    location: "Buenos Aires, Argentina",
    start: "2021",
    end: "",
    image: "assets/images/education/cambridge.webp",
    bullets: {
      en: ["C1 Level: Advanced.", "Score: 185/190."],
      es: ["Nivel C1: Advanced.", "Puntaje: 185/190."],
      pt: ["Nível C1: Advanced.", "Pontuação: 185/190."],
    },
  },
  {
    id: "work-1",
    type: "work",
    title: {
      en: "Programming Paradigms' Teaching Assistant",
      es: "Ayudante ad honorem — Paradigmas de Programación",
      pt: "Monitor voluntário ad honorem — Paradigmas de Programação",
    },
    org: "UTN FRBA",
    location: "Buenos Aires, Argentina",
    start: "2025",
    end: "Present",
    bullets: {
      en: [
        "Collaborated in the design, preparation, and delivery of course materials, prog. assignments, and exams.",
        "Mentored students in understanding and applying core programming concepts through practical exercises, fostering critical thinking and problem-solving skills.",
      ],
      es: [
        "Colaboré en el diseño, preparación y presentación de material didáctico, trabajos prácticos y evaluaciones.",
        "Guié a estudiantes en la comprensión y aplicación de los conceptos fundamentales de programación mediante ejercicios prácticos, promoviendo el pensamiento crítico y la resolución de problemas.",
      ],
      pt: [
        "Colaborei no planejamento e desenvolvimento de materiais didáticos, exercícios e avaliações da disciplina.",
        "Orientei estudantes na compreensão e aplicação dos principais conceitos de programação por meio de exercícios práticos, incentivando o pensamento crítico e o desenvolvimento de habilidades de resolução de problemas.",
      ],
    },
  },
  {
    id: "work-2",
    type: "work",
    title: {
      en: "IT Consultant",
      es: "Consultor IT",
      pt: "Consultor de TI",
    },
    org: "Pinturerías Casa Seca",
    location: "Buenos Aires, Argentina",
    start: "2021",
    end: "2023",
    bullets: {
      en: [
        "Designed and developed the company's first relational databases, applying normalization principles and industry best practices, significantly reducing the time required for employees to register and process sales.",
        "Worked extensively with spreadsheets, Power BI, databases, and Python to support data analysis, reporting, and business intelligence initiatives.",
      ],
      es: [
        "Diseñé e implementé la primera base de datos de la empresa aplicando principios de normalización, optimizando el proceso de registro y gestión de ventas.",
        "Desarrollé soluciones de análisis de datos usando Power BI y Python para generar reportes e indicadores.",
      ],
      pt: [
        "Projetei e implementei o primeiro banco de dados da empresa, aplicando princípios de normalização para otimizar os processos de registro e gestão de vendas.",
        "Desenvolvi soluções de análise de dados utilizando Power BI e Python para gerar relatórios e indicadores.",
      ],
    },
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dateWord(value) {
  if (value === "Current") return t("time.current");
  if (value === "Present") return t("time.present");
  return value;
}

function formatDates(item) {
  const start = String(item.start || "").trim();
  const end = String(item.end || "").trim();
  if (start && end) return escapeHtml(dateWord(start)) + " – " + escapeHtml(dateWord(end));
  return escapeHtml(dateWord(start || end));
}

function experienceCard(item) {
  const bullets = L(item.bullets)
    .map(function (line) {
      return "<li>" + escapeHtml(line) + "</li>";
    })
    .join("");

  const logo = item.image
    ? '<img class="timeline-logo" src="' +
      escapeHtml(item.image) +
      '" alt="" width="44" height="44" />'
    : "";

  return (
    '<li class="timeline-item">' +
    '<article class="timeline-card' +
    (logo ? " has-logo" : "") +
    '">' +
    logo +
    "<div>" +
    "<h3>" +
    escapeHtml(L(item.title)) +
    "</h3>" +
    '<p class="timeline-meta">' +
    '<span class="timeline-org">' +
    escapeHtml(item.org) +
    "</span>" +
    "<span>" +
    escapeHtml(item.location) +
    "</span>" +
    "<span>" +
    formatDates(item) +
    "</span>" +
    "</p>" +
    "<ul>" +
    bullets +
    "</ul>" +
    "</div>" +
    "</article>" +
    "</li>"
  );
}

function renderExperience() {
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
}

renderExperience();
document.addEventListener("langchange", renderExperience);

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
        "I've been studying here since 2023.",
        "My GPA is 7.54/10, and I'm in my fourth year.",
      ],
      es: [
        "Estudio acá desde 2023.",
        "Mi promedio es 7,54/10 y estoy en cuarto año.",
      ],
      pt: [
        "Estudo aqui desde 2023.",
        "Minha média é 7,54/10 e estou no quarto ano.",
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
        "I graduated with honors, in the top 3 of my class.",
        "My final GPA was 9.03/10.",
      ],
      es: [
        "Me egresé con honores, entre los tres mejores promedios de mi clase.",
        "Mi promedio final fue 9,03/10.",
      ],
      pt: [
        "Me formei com honras, entre os três melhores da minha turma.",
        "Minha média final foi 9,03/10.",
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
      en: ["I hold this Cambridge IGCSE; I passed with merit."],
      es: ["Tengo este IGCSE de Cambridge; lo aprobé con mérito."],
      pt: ["Tenho este IGCSE de Cambridge; fui aprovado com mérito."],
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
      en: ["I hold a Cambridge First Certificate in English (C1).", "My score was 185/190."],
      es: ["Tengo el First Certificate in English de Cambridge (C1).", "Mi puntaje fue 185/190."],
      pt: ["Tenho o First Certificate in English de Cambridge (C1).", "Minha pontuação foi 185/190."],
    },
  },
  {
    id: "work-1",
    type: "work",
    title: {
      en: "Teaching Assistant — Programming Paradigms",
      es: "Ayudante de cátedra — Paradigmas de Programación",
      pt: "Monitor — Paradigmas de Programação",
    },
    org: "UTN FRBA",
    location: "Buenos Aires, Argentina",
    start: "2025",
    end: "Present",
    bullets: {
      en: [
        "I am a teaching assistant for Programming Paradigms at UTN FRBA.",
        "I help design course materials, assignments, and exams.",
        "I mentor students on core programming concepts through practical exercises.",
      ],
      es: [
        "Soy ayudante de cátedra en Paradigmas de Programación en la UTN FRBA.",
        "Ayudo a armar el material, los trabajos prácticos y las evaluaciones.",
        "Acompaño a estudiantes con los conceptos de programación en ejercicios prácticos.",
      ],
      pt: [
        "Sou monitor de Paradigmas de Programação na UTN FRBA.",
        "Ajudo a montar o material, os exercícios e as avaliações.",
        "Acompanho estudantes nos conceitos de programação com exercícios práticos.",
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
        "I designed and built the company's first relational databases with normalization, which cut down the time staff spent registering and processing sales.",
        "I worked with spreadsheets, Power BI, databases, and Python for reporting and analysis.",
      ],
      es: [
        "Diseñé e implementé la primera base de datos relacional de la empresa con normalización, y el registro y la gestión de ventas tardaron menos.",
        "Trabajé con planillas, Power BI, bases de datos y Python para reportes y análisis.",
      ],
      pt: [
        "Projetei e implementei o primeiro banco relacional da empresa com normalização, e o registro e a gestão de vendas ficaram mais rápidos.",
        "Trabalhei com planilhas, Power BI, bancos de dados e Python para relatórios e análise.",
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

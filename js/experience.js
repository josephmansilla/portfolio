const EXPERIENCE = [
  {
    id: "edu-1",
    type: "education",
    title: "Information Systems Engineering",
    org: "UTN FRBA",
    location: "Buenos Aires, Argentina",
    start: "2023",
    end: "Current",
    image: "assets/images/education/utn.webp",
    bullets: [
      "Current GPA: 7.54/10.",
      "Currently in my fourth year of studies.",
    ],
  },
  {
    id: "edu-2",
    type: "education",
    title: "Bilingual High School Diploma in Social Sciences",
    org: "Glasgow College",
    location: "Buenos Aires, Argentina",
    start: "2018",
    end: "2022",
    image: "assets/images/education/glasgow.webp",
    bullets: ["Graduated with honors: top 3 of the class.",
      "Final GPA: 9.03/10.",
    ],
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
    bullets: ["Passed with merits."],
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
    bullets: ["C1 Level: Advanced.", "Score: 185/190."],
  },
  {
    id: "work-1",
    type: "work",
    title: "Programming Paradigms' Teaching Assistant",
    org: "UTN FBRA",
    location: "Buenos Aires, Argentina",
    start: "2025",
    end: "Present",
    bullets: [
      "Collaborated in the design, preparation, and delivery of course materials, prog. assignments, and exams.",
      "Mentored students in understanding and applying core programming concepts through practical exercises, fostering critical thinking and problem-solving skills.",
    ],
  },
  {
    id: "work-2",
    type: "work",
    title: "IT Consultant",
    org: "Pinturerías Casa Seca",
    location: "Buenos Aires, Argentina",
    start: "2021",
    end: "2023",
    bullets: [
      "Designed and developed the company's first relational databases, applying normalization principles and industry best practices, significantly reducing the time required for employees to register and process sales.",
      "Worked extensively with spreadsheets, Power BI, databases, and Python to support data analysis, reporting, and business intelligence initiatives.",
    ],
  },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatDates(item) {
  const start = String(item.start || "").trim();
  const end = String(item.end || "").trim();
  if (start && end) return escapeHtml(start) + " – " + escapeHtml(end);
  return escapeHtml(start || end);
}

function experienceCard(item) {
  const bullets = item.bullets
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
    escapeHtml(item.title) +
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

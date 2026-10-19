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
    title: "Information Systems Engineering",
    org: "UTN FRBA",
    location: "Buenos Aires, Argentina",
    start: "2023",
    end: "Current",
    bullets: [
      
    ],
  },
  {
    id: "edu-2",
    type: "education",
    title: "Bilingual High School Diploma in Social Sciences with Honors",
    org: "Glasgow College",
    location: "Buenos Aires, Argentina",
    start: "2018",
    end: "2022",
    bullets: ["Graduated with honors: top 3 of the class"],
  },
  {
    id: "edu-3",
    type: "education",
    title: "International General Certificate of Secondary Education",
    org: "Cambridge University",
    location: "Buenos Aires, Argentina",
    start: "2021",
    end: "2022",
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
    bullets: ["C1 Level: Advanced", "Score: 185/190"],
  },
  {
    id: "work-1",
    type: "work",
    title: "Teaching Assistant for Programming Paradimgs Course",
    org: "UTN FBRA",
    location: "Buenos Aires, Argentina",
    start: "2025",
    end: "Present",
    bullets: [
      "Collaborated in the design, preparation, and delivery of course materials, prog. assignments, and exams.",
      "Mentored students in understanding and applying core programming concepts through practical exercises, fostering critical thinking and problem-solving skills",
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

/*
  i18n.js
  English, Spanish, and Portuguese copy for the static pages.
  Experience and project prose live next to that data and use L().
  shell.js sets document.documentElement.lang before this file's
  applyI18n() runs, and dispatches "langchange" when it changes.
*/

var I18N = {
  en: {
    meta: {
      home: "Joseph Thomas Mansilla | Systems Engineering | UTN FRBA, Buenos Aires",
      homeDesc: "Joseph Thomas Mansilla, Information Systems Engineering student at UTN FRBA in Buenos Aires, Argentina.",
      about: "About — Joseph Thomas Mansilla",
      aboutDesc: "About Joseph Thomas Mansilla, Information Systems Engineering student at UTN FRBA in Buenos Aires.",
      experience: "Experience — Joseph Thomas Mansilla",
      experienceDesc: "Joseph Thomas Mansilla studies Information Systems Engineering at UTN FRBA in Buenos Aires. Glasgow College, Cambridge, and teaching assistant for Programming Paradigms.",
      projects: "Projects — Joseph Thomas Mansilla",
      projectsDesc: "Projects by Joseph Thomas Mansilla, Information Systems Engineering student at UTN FRBA in Buenos Aires.",
      articles: "Articles — Joseph Thomas Mansilla",
      articlesDesc: "Articles by Joseph Thomas Mansilla, Information Systems Engineering student at UTN FRBA in Buenos Aires.",
      contact: "Contact — Joseph Thomas Mansilla",
      contactDesc: "Contact Joseph Thomas Mansilla, Information Systems Engineering student at UTN FRBA in Buenos Aires.",
      game: "Breakout — Joseph Thomas Mansilla",
      gameDesc: "Breakout, a mini-game on the portfolio of Joseph Thomas Mansilla, systems engineering student in Buenos Aires.",
    },
    nav: {
      home: "Home",
      menu: "Menu",
      primary: "Primary",
      language: "Language",
      social: "Social",
      skip: "Skip to content",
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      articles: "Articles",
      contact: "Contact",
    },
    home: {
      place: "Buenos Aires, Argentina",
      lede: "Systems Engineering Student",
      bio: "Learning to become better.",
      projects: "Projects",
      contact: "Contact",
      resume: "Download resume",
    },
    about: {
      kicker: "About",
      title: "About me",
      bio1: "Born in the United States, raised in Buenos Aires. Currently 22 years old and studying systems engineering at UTN in Buenos Aires.",
      bio2: "Passionate about software engineering, with a strong interest in system design, architecture, networking and infrastructure.",
      bio3: "I enjoy learning and being up to date with tech, movies, music and books.",
      stack: "Tech Stack",
      technologies: "Technologies",
      languages: "Languages",
      spanish: "Spanish",
      english: "English",
      portuguese: "Portuguese",
      native: "Native",
      advanced: "Advanced",
      basic: "Basic",
    },
    experience: {
      kicker: "Path",
      title: "Experience",
      intro: "Joseph Thomas Mansilla studies Information Systems Engineering at UTN FRBA in Buenos Aires, since 2023. He graduated from Glasgow College and holds Cambridge certificates. He is a teaching assistant for Programming Paradigms at UTN FRBA.",
      education: "Education",
      courses: "Courses",
      work: "Work",
    },
    time: {
      current: "Current",
      present: "Present",
    },
    projects: {
      kicker: "Work",
      title: "Projects",
      all: "All",
      loading: "Loading project…",
      back: "Go back",
      source: "Source code",
      try: "Try it out",
      more: "more",
      notFound: "Project not found",
      notFoundBody: "That id is not in the projects list.",
    },
    articles: {
      kicker: "Writing",
      title: "Articles",
      placeholderTitle: "Current Placeholder",
      placeholderExcerpt: "A short placeholder.",
    },
    contact: {
      kicker: "Hello",
      title: "Contact",
      intro: "Send a message through the form, or reach me directly.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email.",
      emailInvalid: "Please enter a valid email address.",
      messageShort: "Please write at least 10 characters.",
      check: "Check the highlighted fields and try again.",
      unconfigured: "Formspree is not configured yet. Replace FORMSPREE_ID in js/contact.js.",
      sending: "Sending…",
      thanks: "Thanks. Your message was sent.",
      fail: "Something went wrong. Please email me directly.",
    },
    footer: {
      made: "Made with",
      by: "by",
    },
    game: {
      kicker: "Play",
      intro: "Destroy every brick with the ball. Keep it alive with the paddle.",
      score: "Score",
      lives: "Lives",
      restart: "Restart",
      canvas: "Breakout game canvas. Move the paddle with the arrow keys, A and D, the mouse, or touch.",
      hint: "Keyboard: Left/Right arrows or A/D. Mouse and touch: drag across the canvas. The game pauses when this tab is hidden.",
      won: "You cleared the board",
      lost: "Game over",
      again: "Press Restart to play again",
    },
  },
  es: {
    meta: {
      home: "Joseph Thomas Mansilla | Ingeniería en Sistemas | UTN FRBA, Buenos Aires",
      homeDesc: "Joseph Thomas Mansilla, estudiante de Ingeniería en Sistemas de Información en la UTN FRBA, Buenos Aires, Argentina.",
      about: "Sobre mí — Joseph Thomas Mansilla",
      aboutDesc: "Sobre Joseph Thomas Mansilla, estudiante de Ingeniería en Sistemas de Información en la UTN FRBA, Buenos Aires.",
      experience: "Experiencia — Joseph Thomas Mansilla",
      experienceDesc: "Joseph Thomas Mansilla estudia Ingeniería en Sistemas de Información en la UTN FRBA, Buenos Aires. Glasgow College, Cambridge y ayudante de Paradigmas de Programación.",
      projects: "Proyectos — Joseph Thomas Mansilla",
      projectsDesc: "Proyectos de Joseph Thomas Mansilla, estudiante de Ingeniería en Sistemas de Información en la UTN FRBA, Buenos Aires.",
      articles: "Artículos — Joseph Thomas Mansilla",
      articlesDesc: "Artículos de Joseph Thomas Mansilla, estudiante de Ingeniería en Sistemas de Información en la UTN FRBA, Buenos Aires.",
      contact: "Contacto — Joseph Thomas Mansilla",
      contactDesc: "Contacto de Joseph Thomas Mansilla, estudiante de Ingeniería en Sistemas de Información en la UTN FRBA, Buenos Aires.",
      game: "Breakout — Joseph Thomas Mansilla",
      gameDesc: "Breakout, un minijuego del portafolio de Joseph Thomas Mansilla, estudiante de Ingeniería en Sistemas en Buenos Aires.",
    },
    nav: {
      home: "Inicio",
      menu: "Menú",
      primary: "Principal",
      language: "Idioma",
      social: "Redes",
      skip: "Saltar al contenido",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      articles: "Artículos",
      contact: "Contacto",
    },
    home: {
      place: "Buenos Aires, Argentina",
      lede: "Estudiante de Ingeniería en Sistemas",
      bio: "Aprendiendo a ser mejor.",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Descargar CV",
    },
    about: {
      kicker: "Sobre",
      title: "Sobre mí",
      bio1: "Nacido en Estados Unidos y criado en Buenos Aires. Estudiante de 22 años de Ingeniería en Sistemas de Información en la UTN.",
      bio2: "Apasionado por la ingeniería de software, con interés en el diseño de sistemas, su arquitectura, redes de datos e infraestructura de sistemas.",
      bio3: "Siempre busco poner a la persona primero. Disfruto aprender y mantenerme al día con la tecnología, el cine, la música y los libros.",
      stack: "Stack tecnológico",
      technologies: "Tecnologías",
      languages: "Idiomas",
      spanish: "Español",
      english: "Inglés",
      portuguese: "Portugués",
      native: "Nativo",
      advanced: "Avanzado",
      basic: "Básico",
    },
    experience: {
      kicker: "Recorrido",
      title: "Experiencia",
      intro: "Joseph Thomas Mansilla estudia Ingeniería en Sistemas de Información en la UTN FRBA, en Buenos Aires, desde 2023. Egresó del Glasgow College y tiene certificados de Cambridge. Es ayudante de Paradigmas de Programación en la UTN FRBA.",
      education: "Educación",
      courses: "Cursos",
      work: "Trabajo",
    },
    time: {
      current: "Actualidad",
      present: "Presente",
    },
    projects: {
      kicker: "Trabajo",
      title: "Proyectos",
      all: "Todos",
      loading: "Cargando proyecto…",
      back: "Volver",
      source: "Código fuente",
      try: "Probar",
      more: "más",
      notFound: "Proyecto no encontrado",
      notFoundBody: "Ese id no está en la lista de proyectos.",
    },
    articles: {
      kicker: "Escritos",
      title: "Artículos",
      placeholderTitle: "Marcador de posición",
      placeholderExcerpt: "Un texto breve de relleno.",
    },
    contact: {
      kicker: "Hola",
      title: "Contacto",
      intro: "Envíame un mensaje con el formulario, o escribinme directo.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar mensaje",
      nameRequired: "Ingresá tu nombre.",
      emailRequired: "Ingresá tu email.",
      emailInvalid: "Ingresá un email válido.",
      messageShort: "Escribí al menos 10 caracteres.",
      check: "Revisá los campos marcados e intentá de nuevo.",
      unconfigured: "Formspree todavía no está configurado. Reemplazá FORMSPREE_ID en js/contact.js.",
      sending: "Enviando…",
      thanks: "Gracias. Tu mensaje fue enviado.",
      fail: "Algo salió mal. Escribime por email.",
    },
    footer: {
      made: "Hecho con",
      by: "por",
    },
    game: {
      kicker: "Jugar",
      intro: "Destruí todos los ladrillos con la pelota. Mantenela en juego con la paleta.",
      score: "Puntaje",
      lives: "Vidas",
      restart: "Reiniciar",
      canvas: "Juego Breakout. Mové la paleta con las flechas, A y D, el mouse o el tacto.",
      hint: "Teclado: flechas izquierda/derecha o A/D. Mouse y tacto: arrastrá sobre el tablero. El juego se pausa cuando esta pestaña está oculta.",
      won: "Limpiaste el tablero",
      lost: "Fin del juego",
      again: "Presioná Reiniciar para volver a jugar",
    },
  },
  pt: {
    meta: {
      home: "Joseph Thomas Mansilla | Engenharia de Sistemas | UTN FRBA, Buenos Aires",
      homeDesc: "Joseph Thomas Mansilla, estudante de Engenharia de Sistemas de Informação na UTN FRBA, em Buenos Aires, Argentina.",
      about: "Sobre mim — Joseph Thomas Mansilla",
      aboutDesc: "Sobre Joseph Thomas Mansilla, estudante de Engenharia de Sistemas de Informação na UTN FRBA, em Buenos Aires.",
      experience: "Experiência — Joseph Thomas Mansilla",
      experienceDesc: "Joseph Thomas Mansilla estuda Engenharia de Sistemas de Informação na UTN FRBA, em Buenos Aires. Glasgow College, Cambridge e monitor de Paradigmas de Programação.",
      projects: "Projetos — Joseph Thomas Mansilla",
      projectsDesc: "Projetos de Joseph Thomas Mansilla, estudante de Engenharia de Sistemas de Informação na UTN FRBA, em Buenos Aires.",
      articles: "Artigos — Joseph Thomas Mansilla",
      articlesDesc: "Artigos de Joseph Thomas Mansilla, estudante de Engenharia de Sistemas de Informação na UTN FRBA, em Buenos Aires.",
      contact: "Contato — Joseph Thomas Mansilla",
      contactDesc: "Contato de Joseph Thomas Mansilla, estudante de Engenharia de Sistemas de Informação na UTN FRBA, em Buenos Aires.",
      game: "Breakout — Joseph Thomas Mansilla",
      gameDesc: "Breakout, um minijogo do portfólio de Joseph Thomas Mansilla, estudante de Engenharia de Sistemas em Buenos Aires.",
    },
    nav: {
      home: "Início",
      menu: "Menu",
      primary: "Principal",
      language: "Idioma",
      social: "Redes",
      skip: "Pular para o conteúdo",
      about: "Sobre mim",
      experience: "Experiência",
      projects: "Projetos",
      articles: "Artigos",
      contact: "Contato",
    },
    home: {
      place: "Buenos Aires, Argentina",
      lede: "Estudante de Engenharia de Sistemas",
      bio: "Aprendendo a ser melhor.",
      projects: "Projetos",
      contact: "Contato",
      resume: "Baixar currículo",
    },
    about: {
      kicker: "Sobre",
      title: "Sobre mim",
      bio1: "Nascido nos Estados Unidos e criado em Buenos Aires. Estudante de 22 anos de Engenharia de Sistemas de Informação na UTN.",
      bio2: "Apaixonado por engenharia de software, com interesse em design de sistemas, arquitetura, redes de dados e infraestrutura de sistemas.",
      bio3: "Sempre busco colocar as pessoas em primeiro lugar. Gosto de aprender e me manter atualizado com tecnologia, filmes, música e livros.",
      stack: "Stack tecnológico",
      technologies: "Tecnologias",
      languages: "Idiomas",
      spanish: "Espanhol",
      english: "Inglês",
      portuguese: "Português",
      native: "Nativo",
      advanced: "Avançado",
      basic: "Básico",
    },
    experience: {
      kicker: "Trajetória",
      title: "Experiência",
      intro: "Joseph Thomas Mansilla estuda Engenharia de Sistemas de Informação na UTN FRBA, em Buenos Aires, desde 2023. Formou-se no Glasgow College e tem certificados de Cambridge. É monitor de Paradigmas de Programação na UTN FRBA.",
      education: "Educação",
      courses: "Cursos",
      work: "Trabalho",
    },
    time: {
      current: "Atual",
      present: "Presente",
    },
    projects: {
      kicker: "Trabalho",
      title: "Projetos",
      all: "Todos",
      loading: "Carregando projeto…",
      back: "Voltar",
      source: "Código-fonte",
      try: "Experimentar",
      more: "mais",
      notFound: "Projeto não encontrado",
      notFoundBody: "Esse id não está na lista de projetos.",
    },
    articles: {
      kicker: "Escrita",
      title: "Artigos",
      placeholderTitle: "Marcador de posição",
      placeholderExcerpt: "Um texto curto de preenchimento.",
    },
    contact: {
      kicker: "Olá",
      title: "Contato",
      intro: "Envie uma mensagem pelo formulário ou fale comigo direto.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar mensagem",
      nameRequired: "Informe seu nome.",
      emailRequired: "Informe seu email.",
      emailInvalid: "Informe um email válido.",
      messageShort: "Escreva pelo menos 10 caracteres.",
      check: "Revise os campos marcados e tente de novo.",
      unconfigured: "O Formspree ainda não está configurado. Substitua FORMSPREE_ID em js/contact.js.",
      sending: "Enviando…",
      thanks: "Obrigado. Sua mensagem foi enviada.",
      fail: "Algo deu errado. Escreva para mim por email.",
    },
    footer: {
      made: "Feito com",
      by: "por",
    },
    game: {
      kicker: "Jogar",
      intro: "Destrua todos os tijolos com a bola. Mantenha-a em jogo com a raquete.",
      score: "Pontos",
      lives: "Vidas",
      restart: "Reiniciar",
      canvas: "Jogo Breakout. Mova a raquete com as setas, A e D, o mouse ou o toque.",
      hint: "Teclado: setas esquerda/direita ou A/D. Mouse e toque: arraste sobre o tabuleiro. O jogo pausa quando esta aba fica oculta.",
      won: "Você limpou o tabuleiro",
      lost: "Fim de jogo",
      again: "Pressione Reiniciar para jogar de novo",
    },
  },
};

function currentLang() {
  var lang = document.documentElement.lang;
  if (lang !== "en" && lang !== "es" && lang !== "pt") return "es";
  return lang;
}

function t(key) {
  var parts = String(key).split(".");
  var lang = currentLang();
  var node = I18N[lang] || I18N.en;
  var fallback = I18N.en;
  var i;
  for (i = 0; i < parts.length; i += 1) {
    if (node && Object.prototype.hasOwnProperty.call(node, parts[i])) {
      node = node[parts[i]];
    } else {
      node = null;
    }
    if (fallback && Object.prototype.hasOwnProperty.call(fallback, parts[i])) {
      fallback = fallback[parts[i]];
    } else {
      fallback = null;
    }
  }
  if (typeof node === "string") return node;
  if (typeof fallback === "string") return fallback;
  return key;
}

/* Pick the active language from { en, es, pt }. Plain strings pass through. */
function L(value) {
  if (
    value &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    (Object.prototype.hasOwnProperty.call(value, "en") ||
      Object.prototype.hasOwnProperty.call(value, "es") ||
      Object.prototype.hasOwnProperty.call(value, "pt"))
  ) {
    var lang = currentLang();
    if (value[lang] != null && value[lang] !== "") return value[lang];
    return value.en;
  }
  return value;
}

var OG_LOCALES = { es: "es_AR", en: "en_US", pt: "pt_BR" };

function setMeta(selector, content) {
  if (!content) return;
  var el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
}

function syncHeadMeta() {
  if (!document.body) return;
  var descKey = document.body.getAttribute("data-i18n-desc");
  var desc = descKey ? t(descKey) : "";
  setMeta('meta[name="description"]', desc);
  setMeta('meta[property="og:title"]', document.title);
  setMeta('meta[name="twitter:title"]', document.title);
  setMeta('meta[property="og:description"]', desc);
  setMeta('meta[name="twitter:description"]', desc);
  setMeta('meta[property="og:locale"]', OG_LOCALES[currentLang()] || "es_AR");
}

function applyI18n(root) {
  var scope = root || document;
  scope.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  scope.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
  if (!root && document.body) {
    var titleKey = document.body.getAttribute("data-i18n-title");
    if (titleKey) document.title = t(titleKey);
    syncHeadMeta();
  }
}

document.addEventListener("langchange", function () {
  applyI18n();
});

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
      home: "JTM | Dev Portfolio",
      about: "JTM | About Me",
      experience: "JTM | Experience",
      projects: "JTM | Projects",
      articles: "JTM | Articles",
      contact: "JTM | Contact",
      game: "JTM | Breakout",
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
      home: "JTM | Portafolio",
      about: "JTM | Sobre mí",
      experience: "JTM | Experiencia",
      projects: "JTM | Proyectos",
      articles: "JTM | Artículos",
      contact: "JTM | Contacto",
      game: "JTM | Breakout",
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
      home: "JTM | Portfólio",
      about: "JTM | Sobre mim",
      experience: "JTM | Experiência",
      projects: "JTM | Projetos",
      articles: "JTM | Artigos",
      contact: "JTM | Contato",
      game: "JTM | Breakout",
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
  if (lang !== "en" && lang !== "es" && lang !== "pt") return "en";
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
  }
}

document.addEventListener("langchange", function () {
  applyI18n();
});

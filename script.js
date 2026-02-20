const form = document.getElementById("form-Contato");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    const modal = document.getElementById("sucesso-modal");
    if (modal) {
      modal.classList.add("active");
      setTimeout(() => modal.classList.remove("active"), 2500);
    }

    form.reset();
  });
}

// evita formulário voltar preenchido ao navegar
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    const form = document.getElementById("form-Contato");
    if (form) form.reset();
  }
});

// ================= I18N =================
const translations = {
  pt: {
    // MENU
    "menu.home": "Início",
    "menu.skills": "Especialidade",
    "menu.about": "Sobre",
    "menu.projects": "Projetos",
    "menu.contact": "Contatos",

    // HERO
    "hero.title": "CRIANDO EXPERIÊNCIA NA WEB",
    "hero.text": "O desenvolvimento web une lógica, criatividade e estratégia. Através de um design bem estruturado, código limpo, performance otimizada e foco na experiência do usuário, surgem experiências digitais que conectam ideias, pessoas e resultados de forma eficiente e inteligente, transformando sonhos em soluções reais.",
    "hero.contact": "Entre em contato",

    // ESPECIALIDADES
    "skills.title": "CONHECIMENTOS & PRÁTICAS",

    "skills.web.title": "Website",
    "skills.web.text": "Websites pensados para oferecer boa estrutura, responsividade e organização visual. Os projetos são baseados em estudos acadêmicos e aplicações práticas realizadas durante a formação.",

    "skills.shop.title": "Loja online",
    "skills.shop.text": "Projetos de lojas online focados em navegação intuitiva, organização de produtos e clareza das informações. As soluções são desenvolvidas a partir de estudos e projetos práticos.",

    "skills.blog.title": "Blog",
    "skills.blog.text": "Estruturas de blog desenvolvidas para facilitar a leitura e a organização do conteúdo. Os projetos priorizam clareza, hierarquia visual e boa experiência para o usuário.",

    "skills.certificates": "Certificados",

    // SOBRE
    "about.title": "MUITO PRAZER",
    "about.subtitle": "SOU WILBE DE SOUZA.",
    "about.text": "Sou um desenvolvedor web recém-formado, movido pela curiosidade e pela vontade constante de evoluir. Gosto de construir interfaces bem organizadas, funcionais e com atenção aos detalhes, busco unir estética e usabilidade. Tenho interesse especial em inteligência artificial, área que encaro como ferramenta para criar soluções mais inteligentes e eficientes. Sou dedicado, aprendo rápido e levo a sério cada projeto, e atualmente estou em busca da minha primeira oportunidade profissional na área.",

    // PORTFÓLIO
    "portfolio.title": "MEU PORTFÓLIO.",
    "portfolio.project1": "Loja de Periféricos",
    "portfolio.project2": "Site de Filmes",
    "portfolio.project3": "Projeto 3",

    // FORMULÁRIO
    "menu.cv": "Currículo",

    "contact.title": "DEIXE UM COMENTÁRIO.",
    "contact.name": "Seu nome:",
    "contact.email": "Seu e-mail:",
    "contact.phone": "Seu Celular (Opcional):",
    "contact.message": "Sua mensagem",
    "contact.send": "Enviar",

    // BOTÕES
    "buttons.resume": "Currículo",

    //PAGINA CURRICULO
    "cv.title": "Meu Currículo",
    "cv.back": "Voltar",
    "cv.open": "Abrir currículo",

    // PAGINA CERTIFICADOS
    "cert.title": "Certificados",
    "cert.back": "Voltar",
    "cert.degree": "Superior de Tecnologia em Desenvolvimento Web",
    "cert.logic1": "Introdução a Lógica de Programação",
    "cert.logic2": "Lógica de Programação & Algoritmos II",
    "cert.algorithms": "Algoritmos e Lógica de Programação - Completo",
    "cert.html1": "Fundamentos de HTML5",
    "cert.html2": "HTML5 Módulo Avançado",
    "cert.css1": "Fundamentos em CSS",
    "cert.css2": "CSS Módulo Avançado",
    "cert.js": "JavaScript, jQuery e Ajax",

  },

  en: {
    // MENU
    "menu.home": "Home",
    "menu.skills": "Skills",
    "menu.about": "About",
    "menu.projects": "Projects",
    "menu.contact": "Contact",

    // HERO
    "hero.title": "CREATING WEB EXPERIENCES",
    "hero.text": "Web development combines logic, creativity, and strategy. Through well-structured design, clean code, optimized performance, and a strong focus on user experience, digital solutions emerge that connect ideas, people, and results efficiently, turning ideas into real solutions.",
    "hero.contact": "Contact me",

    // ESPECIALIDADES
    "skills.title": "SKILLS & PRACTICES",

    "skills.web.title": "Website",
    "skills.web.text": "Websites designed to provide solid structure, responsiveness, and visual organization. Projects are based on academic studies and practical applications developed during training.",

    "skills.shop.title": "Online Store",
    "skills.shop.text": "Online store projects focused on intuitive navigation, product organization, and information clarity. Solutions are developed through study and hands-on projects.",

    "skills.blog.title": "Blog",
    "skills.blog.text": "Blog structures developed to improve readability and content organization. Projects prioritize clarity, visual hierarchy, and a good user experience.",

    "skills.certificates": "Certificates",

    // SOBRE
    "about.title": "NICE TO MEET YOU",
    "about.subtitle": "I'M WILBE DE SOUZA.",
    "about.text": "I am a newly graduated web developer, driven by curiosity and a constant desire to grow. I enjoy building well-organized, functional interfaces with attention to detail, combining aesthetics and usability. I have a strong interest in artificial intelligence as a tool to create smarter and more efficient solutions. I am dedicated, learn quickly, and take every project seriously. Currently, I am seeking my first professional opportunity in the field.",

    // PORTFÓLIO
    "portfolio.title": "MY PORTFOLIO.",
    "portfolio.project1": "Peripheral Store",
    "portfolio.project2": "Movie Website",
    "portfolio.project3": "Project 3",

    // FORMULÁRIO
    "contact.title": "LEAVE A COMMENT.",
    "contact.name": "Your name:",
    "contact.email": "Your email:",
    "contact.phone": "Phone number (optional):",
    "contact.message": "Your message",
    "contact.send": "Send",

    // BOTÕES
    "menu.cv": "Resume",

    //PAGINA CURRICULO
    "cv.title": "My Resume",
    "cv.back": "Back",
    "cv.open": "Open resume",

    // PAGINA CERTIFICADO
    "cert.title": "Certificates",
    "cert.back": "Back",
    "cert.degree": "Higher Degree in Web Development Technology",
    "cert.logic1": "Introduction to Programming Logic",
    "cert.logic2": "Programming Logic & Algorithms II",
    "cert.algorithms": "Algorithms and Programming Logic - Complete",
    "cert.html1": "HTML5 Fundamentals",
    "cert.html2": "Advanced HTML5 Module",
    "cert.css1": "CSS Fundamentals",
    "cert.css2": "Advanced CSS Module",
    "cert.js": "JavaScript, jQuery and Ajax",

  }
};

const flags = {
  pt: "img/Icons-BR.png",
  en: "img/Icons-EUA.png",
};

document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  const currentFlag = document.getElementById("current-flag");

  function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    if (currentFlag) {
      currentFlag.src = lang === "pt"
        ? "img/Icons-EUA.png"
        : "img/Icons-BR.png";
    }
  }

  // 🔥 aplica idioma salvo EM QUALQUER PÁGINA
  const savedLang = localStorage.getItem("lang") || "pt";
  setLanguage(savedLang);

  // Só adiciona clique se o botão existir
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const currentLang = localStorage.getItem("lang") || "pt";
      const newLang = currentLang === "pt" ? "en" : "pt";
      setLanguage(newLang);
    });
  }
});

/*efeito no header*/
const menuLinks = document.querySelectorAll('.menu-desktop a[href^="#"]');

if (menuLinks.length > 0) {
  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const id = this.getAttribute("href");
      const section = document.querySelector(id);

      if (!section) return;

      section.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  });
}



window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (!header) return; // ← proteção

  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});


/*botão lua/sol (mudando cor do site)*/

function setTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light", isLight);
  localStorage.setItem("theme", theme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = isLight
        ? "bi bi-moon-fill"
        : "bi bi-sun-fill";
    }
  }
}

/* aplica tema salvo ao carregar qualquer página */
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

/* adiciona clique só se o botão existir */
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");
    setTheme(isLight ? "dark" : "light");
  });
}


/*tradução do curriculo*/
// ===== CURRÍCULO DINÂMICO POR IDIOMA =====
document.addEventListener("DOMContentLoaded", () => {

  const currentLang = localStorage.getItem("lang") || "pt";

  const pdfPath = currentLang === "pt"
    ? "assets/pdf/wilbe-souza-resume-pt.pdf"
    : "assets/pdf/wilbe-souza-resume-en.pdf";

  // ===== Página curriculo.html =====
  const iframe = document.getElementById("cv-frame");
  const downloadBtn = document.getElementById("cv-download");

  if (iframe) iframe.src = pdfPath;
  if (downloadBtn) downloadBtn.href = pdfPath;

  // ===== Botão mobile do INDEX =====
  const mobileBtn = document.getElementById("cv-mobile");
  if (mobileBtn) mobileBtn.href = pdfPath;

  document.documentElement.lang = currentLang === "pt"
    ? "pt-br"
    : "en";
});
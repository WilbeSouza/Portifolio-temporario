const cards = document.querySelectorAll('.card-certificado img');
const modal = document.getElementById('modal');
const fechar = document.querySelector('.fechar');

const page = document.getElementById('page');
const frontImg = document.getElementById('modalImgFront');
const backImg = document.getElementById('modalImgBack');

cards.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';

        frontImg.src = img.src;
        backImg.src = img.dataset.back || img.src;

        page.classList.remove('virada');
    });
});

// virar folha
page.addEventListener('click', () => {
    page.classList.toggle('virada');
});

// fechar
fechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// clicar fora fecha
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
modal.addEventListener('click', (e) => {
    if (!e.target.closest('.page')) {
        modal.style.display = 'none';
    }
});


/*EFEITO SHRINK*/
// efeito shrink no topo certificado
window.addEventListener("scroll", () => {
  const topo = document.querySelector(".topo-certificado");
  if (!topo) return;

  if (window.scrollY > 50) {
    topo.classList.add("shrink");
  } else {
    topo.classList.remove("shrink");
  }
});

// ===== CERTIFICADOS MULTI IDIOMA =====
document.addEventListener("DOMContentLoaded", () => {

    const lang = localStorage.getItem("lang") || "pt";
    const imgs = document.querySelectorAll(".card-certificado img");

    imgs.forEach(img => {

        let front = null;
        let back = null;

        if (lang === "en") {
            front = img.getAttribute("data-front-en");
            back  = img.getAttribute("data-back-en");
        } else {
            front = img.getAttribute("data-front-pt");
            back  = img.getAttribute("data-back-pt");
        }

        // Segurança extra
        if (front) {
            img.src = front;
        }

        if (back) {
            img.setAttribute("data-back", back);
        } else if (front) {
            img.setAttribute("data-back", front);
        }

    });

});


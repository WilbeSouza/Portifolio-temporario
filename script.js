const form = document.getElementById("formContato");
const comentarios = document.getElementById("comentarios");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // evita reload

  const nome = form.nome.value;
  const mensagem = form.mensagem.value;

  const comentario = document.createElement("div");
  comentario.classList.add("comentario");

  comentario.innerHTML = `
    <h4>${nome}</h4>
    <p>${mensagem}</p>
  `;

  comentarios.prepend(comentario);

  // envia para o Formspree
  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  form.reset();
});

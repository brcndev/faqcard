const perguntas = document.querySelectorAll('.perguntas button');

function ativarPerguntas(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls);


  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute("aria-expanded", ativa)
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPerguntas);
}

perguntas.forEach(eventoPerguntas);




























/*const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

*/
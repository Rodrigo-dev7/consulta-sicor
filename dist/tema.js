"use strict";

(() => {
  const raiz = document.documentElement;
  const sistema = window.matchMedia("(prefers-color-scheme: dark)");
  const chave = "consulta-sicor-tema";
  let escolha;

  try {
    const salvo = localStorage.getItem(chave);
    if (salvo === "claro" || salvo === "escuro") escolha = salvo;
  } catch {
    // A preferência do sistema continua disponível sem armazenamento local.
  }

  const temaAtual = () => escolha ?? (sistema.matches ? "escuro" : "claro");
  raiz.dataset.tema = temaAtual();

  document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("#alternar-tema");
    function aplicarTema() {
      const tema = temaAtual();
      raiz.dataset.tema = tema;
      botao.setAttribute("aria-pressed", String(tema === "escuro"));
    }

    aplicarTema();
    botao.hidden = false;
    sistema.addEventListener("change", aplicarTema);
    botao.addEventListener("click", () => {
      escolha = temaAtual() === "escuro" ? "claro" : "escuro";
      aplicarTema();
      try {
        localStorage.setItem(chave, escolha);
      } catch {
        // A escolha se aplica à página mesmo com armazenamento bloqueado.
      }
    });
  });
})();

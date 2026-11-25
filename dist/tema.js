"use strict";

(() => {
  const raiz = document.documentElement;
  const chave = "consulta-sicor-tema";
  let tema = "claro";

  try {
    if (localStorage.getItem(chave) === "escuro") tema = "escuro";
  } catch {
    // O tema claro é o padrão quando o navegador bloqueia o armazenamento.
  }

  raiz.dataset.tema = tema;

  document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("#alternar-tema");
    function aplicarTema() {
      raiz.dataset.tema = tema;
      botao.setAttribute("aria-pressed", String(tema === "escuro"));
    }

    aplicarTema();
    botao.hidden = false;
    botao.addEventListener("click", () => {
      tema = tema === "escuro" ? "claro" : "escuro";
      aplicarTema();
      try {
        localStorage.setItem(chave, tema);
      } catch {
        // A escolha se aplica à página mesmo com armazenamento bloqueado.
      }
    });
  });
})();

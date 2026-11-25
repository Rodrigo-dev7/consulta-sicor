"use strict";

const busca = document.querySelector("#busca");
const limpar = document.querySelector("#limpar");
const temas = document.querySelector("#temas");
const lista = document.querySelector("#lista");
const contagem = document.querySelector("#contagem");
const vazio = document.querySelector("#vazio");
const modelo = document.querySelector("#modelo-critica");
let temaAtivo = "";

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .toLocaleLowerCase("pt-BR")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function copiarResposta(resposta, feedback) {
  try {
    await navigator.clipboard.writeText(resposta.textContent);
    feedback.textContent = "Resposta copiada.";
  } catch {
    const selecao = window.getSelection();
    const trecho = document.createRange();
    trecho.selectNodeContents(resposta);
    selecao.removeAllRanges();
    selecao.addRange(trecho);
    feedback.textContent = "Resposta selecionada. Use o comando Copiar do navegador.";
  }
}

const fichas = criticas.map((critica) => {
  const ficha = modelo.content.firstElementChild.cloneNode(true);
  const resposta = ficha.querySelector(".resposta");
  ficha.querySelector(".critica-tema").textContent = critica.category;
  ficha.querySelector(".critica-mensagem").textContent = critica.message;
  ficha.querySelector(".critica-sumario").textContent = critica.summary;
  ficha.querySelector(".orientacao").textContent = critica.guidance;
  ficha.querySelector(".modelo-resposta").hidden = !critica.reply;
  ficha.querySelector(".sem-resposta").hidden = Boolean(critica.reply);
  resposta.textContent = critica.reply;
  ficha.querySelector(".copiar").addEventListener("click", () => {
    copiarResposta(resposta, ficha.querySelector(".feedback"));
  });
  lista.append(ficha);
  return {
    ficha,
    tema: critica.category,
    mensagem: normalizar(critica.message),
    texto: normalizar([critica.message, critica.category, critica.summary, critica.guidance, critica.reply].join(" ")),
  };
});

const totalPorTema = new Map([["", fichas.length]]);
for (const { tema } of fichas) {
  totalPorTema.set(tema, (totalPorTema.get(tema) ?? 0) + 1);
}

const botoes = [...totalPorTema].map(([tema, total]) => {
  const botao = document.createElement("button");
  const numero = document.createElement("span");
  botao.type = "button";
  botao.className = "tema";
  botao.textContent = tema || "Todos os temas";
  numero.className = "tema-contagem";
  numero.textContent = total;
  numero.setAttribute("aria-hidden", "true");
  botao.append(numero);
  botao.addEventListener("click", () => {
    temaAtivo = tema;
    atualizarResultados();
  });
  temas.append(botao);
  return { botao, tema };
});

function atualizarResultados() {
  const consulta = normalizar(busca.value).replace(/^sicor\b\s*/, "");
  const termos = consulta ? consulta.split(" ") : [];
  let visiveis = 0;
  for (const { ficha, tema, mensagem, texto } of fichas) {
    const complemento = consulta.startsWith(`${mensagem} `) ? consulta.slice(mensagem.length + 1) : "";
    const mensagemComReferencia = /^\d/.test(complemento);
    const encontrouTexto = mensagemComReferencia || termos.every((termo) => texto.includes(termo));
    const corresponde = (!temaAtivo || tema === temaAtivo) && encontrouTexto;
    ficha.hidden = !corresponde;
    visiveis += Number(corresponde);
  }
  for (const { botao, tema } of botoes) {
    botao.setAttribute("aria-pressed", String(tema === temaAtivo));
  }
  contagem.textContent = visiveis === 1 ? "1 crítica encontrada" : `${visiveis} críticas encontradas`;
  vazio.hidden = visiveis !== 0;
  limpar.hidden = busca.value.length === 0;
}

busca.addEventListener("input", atualizarResultados);
limpar.addEventListener("click", () => {
  busca.value = "";
  atualizarResultados();
  busca.focus();
});
atualizarResultados();

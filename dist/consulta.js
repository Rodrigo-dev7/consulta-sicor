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

function criarTela({ file, alt, caption, width, height }) {
  const figura = document.createElement("figure");
  figura.className = "tela-orientacao";
  const imagem = document.createElement("img");
  imagem.src = file;
  imagem.alt = alt;
  imagem.width = width;
  imagem.height = height;
  imagem.loading = "lazy";
  const legenda = document.createElement("figcaption");
  const descricao = document.createElement("span");
  descricao.textContent = caption;
  const ampliar = document.createElement("a");
  ampliar.href = file;
  ampliar.target = "_blank";
  ampliar.rel = "noopener noreferrer";
  ampliar.textContent = "Ampliar imagem";
  ampliar.setAttribute("aria-label", `Ampliar imagem de ${caption} (abre em nova aba)`);
  legenda.append(descricao, ampliar);
  figura.append(imagem, legenda);
  return figura;
}

const fichas = criticas.map((critica) => {
  const ficha = modelo.content.firstElementChild.cloneNode(true);
  const resposta = ficha.querySelector(".resposta");
  const textoBusca = normalizar([critica.message, critica.category, critica.summary, critica.guidance, critica.reply].join(" "));
  ficha.querySelector(".critica-tema").textContent = critica.category;
  ficha.querySelector(".critica-mensagem").textContent = critica.message;
  ficha.querySelector(".critica-sumario").textContent = critica.summary;
  const orientacao = ficha.querySelector(".orientacao");
  if (critica.messageScreen) {
    orientacao.append(criarTela({
      ...critica.messageScreen,
      alt: `Mensagem do SICOR · ${critica.message}`,
      caption: "Mensagem exibida pelo SICOR",
    }));
  }
  const telas = critica.screens ?? (critica.screen ? [critica.screen] : []);
  for (const [index, texto] of critica.guidance.split("\n\n").entries()) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = texto;
    orientacao.append(paragrafo);
    for (const tela of telas.filter((item) => item.afterParagraph === index + 1)) {
      orientacao.append(criarTela(tela));
    }
  }
  if (/\bzarc\b/.test(textoBusca)) {
    const referencia = document.createElement("p");
    const link = document.createElement("a");
    link.href = "https://mapa-indicadores.agricultura.gov.br/publico/extensions/Zarc/Zarc.html";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Consultar o painel do ZARC";
    link.setAttribute("aria-label", "Consultar o painel do ZARC (abre em nova aba)");
    referencia.append(link);
    orientacao.append(referencia);
  }
  ficha.querySelector(".modelo-resposta").hidden = !critica.reply;
  const semResposta = ficha.querySelector(".sem-resposta");
  semResposta.hidden = !critica.replyNote;
  semResposta.textContent = critica.replyNote ?? "";
  resposta.textContent = critica.reply;
  ficha.querySelector(".copiar").addEventListener("click", () => {
    copiarResposta(resposta, ficha.querySelector(".feedback"));
  });
  lista.append(ficha);
  return {
    ficha,
    tema: critica.category,
    mensagem: normalizar(critica.message),
    texto: textoBusca,
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

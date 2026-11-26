# Consulta de críticas do SICOR

Protótipo de consulta às mensagens de validação exibidas pelo SICOR durante o envio dos dados ou o fechamento de uma operação. O catálogo foi montado com base nos documentos *Mapeamento de críticas de preenchimento do SICOR* e *Validação CAR × Glebas*.

## Como usar

1. Clone ou baixe este repositório.
2. Abra `dist/index.html` no navegador. O site funciona com HTML, CSS e JavaScript, sem instalação de dependências.
3. Cole a mensagem do SICOR ou digite um termo como `ZARC`, `Proagro` ou `colheita`. Use o filtro por tema para refinar os resultados.
4. Abra uma crítica para ler a orientação do mapeamento. Quando houver um modelo de resposta, use o botão **Copiar resposta**.

## Conteúdo do protótipo

O catálogo reúne 24 críticas e 21 modelos de resposta. As orientações refletem os documentos de referência, e os identificadores dos exemplos foram substituídos por campos genéricos. O botão **SICOR Notícias** abre a página do Banco Central em uma nova aba. A busca funciona com os dados locais do catálogo. [SICOR Notícias](https://www.bcb.gov.br/estabilidadefinanceira/sicornoticias)

## Estrutura do projeto

| Arquivo | Função |
| --- | --- |
| `dist/index.html` | Página de consulta. |
| `dist/estilos.css` | Estilos e layout para telas de diferentes tamanhos. |
| `dist/consulta.js` | Busca, filtros e cópia de respostas. |
| `dist/criticas.js` | Mensagens, temas, orientações e modelos de resposta. |

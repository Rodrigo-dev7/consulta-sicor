const criticas = [
  {
    "id": 1,
    "category": "Operação e envio",
    "message": "Prazo da operação fora do limite",
    "summary": "Primeiro reembolso na aba Dados das fontes.",
    "guidance": "A crítica ocorre devido a data do primeiro reembolso na aba “dados das fontes” estar muito próxima ao desembolso (fechamento da operação)",
    "reply": "Prezado(a), boa tarde!\n\nA crítica apresentada ocorre devido a uma divergência de informações, gentileza verificar a data inserida no primeiro reembolso na aba “Dados das fontes”, e prosseguir com o ajuste.\n\nAtenciosamente,"
  },
  {
    "id": 2,
    "category": "Operação e envio",
    "message": "Mensagem rejeitada pelo SPB",
    "summary": "Reenvio do contrato após instabilidade.",
    "guidance": "A crítica ocorre devido à instabilidade momentânea, recomendamos que orientem a unidade a retornar o contrato para elaborado e realize novo envio ao SICOR para posterior fechamento do contrato.\n\nEm caso de persistência da falha após a orientação abaixo, devemos encaminhar tarefa ao COICC para análise.",
    "reply": "Prezado(a), boa tarde!\n\nA crítica apresentada ocorre devido a uma instabilidade momentânea do sistema. Dessa forma, recomendamos retornar o contrato para o status Elaborado e realizar um novo envio ao SICOR. Após o processamento, será possível prosseguir com o fechamento do contrato.\n\nAtenciosamente,"
  },
  {
    "id": 3,
    "category": "Operação e envio",
    "message": "Duplicidade de cédula",
    "summary": "Referência BACEN duplicada e encaminhamento ao COICC.",
    "guidance": "A crítica ocorre devido a duplicidade de referência bacen no SICOR, em virtude de várias tentativas de envio ao sicor e fechamento do contrato, a crítica é emitida. Com isso, deve-se registrar tarefa ao COICC solicitando o fechamento do contrato, mencionando no teor da tarefa o número do contrato, o sequencial da operação do contrato, o número da referência bacen exibida na crítica e a matrícula do usuário solicitante.\n\nSegue exemplo:\n\nContrato: [número do contrato]\n\nOperação: [sequencial]\n\nReferência BACEN: [referência exibida]\n\nMatrícula: FXXXXX /ou CXXXXX",
    "reply": ""
  },
  {
    "id": 4,
    "category": "Áreas e coordenadas",
    "message": "Existe sobreposição com gleba cadastrada",
    "summary": "Interpretação da referência BACEN e dos indicadores S e N.",
    "guidance": "A crítica ocorre porque o SICOR identificou uma sobreposição entre as coordenadas geodésicas informadas na operação. Para interpretar corretamente a mensagem de retorno, devemos observar os seguintes pontos:\n\nReferência BACEN: [referência exibida] (número inicial apresentado).\n\nN: indica que a referência está vinculada a outro cliente.\n\nS: indica que a referência está vinculada ao próprio cliente.\n\n[raiz do CNPJ]: corresponde à raiz do CNPJ da instituição financeira à qual a referência BACEN está vinculada. Nesse caso, consulte a raiz do CNPJ no navegador para identificar a instituição financeira responsável.\n\nNota: O caso acima é exemplar, as informações irão variar conforme o caso.\n\nEssas informações são necessárias para compreender a crítica apresentada pelo SICOR e dar continuidade à análise.",
    "reply": "Prezado(a), boa tarde!\n\nInformamos que o SICOR realiza críticas de sobreposição de áreas com o objetivo de evitar o descumprimento das normas legais e infralegais vigentes.\n\nA crítica apresentada ocorre porque o SICOR identificou uma sobreposição de glebas vinculadas a outro cliente, junto a outra instituição financeira ([instituição financeira]).\n\nDiante do exposto, orientamos que a unidade entre em contato com o cliente e/ou com o projetista responsável, a fim de realizar as devidas verificações e adotar as providências necessárias para a regularização da pendência.\n\nAtenciosamente,"
  },
  {
    "id": 5,
    "category": "Proagro e seguro",
    "message": "Contratação de seguro é obrigatória",
    "summary": "Conferência do seguro na aba Garantias da proposta.",
    "screen": {
      "file": "telas/garantias-seguro.png",
      "alt": "A aba Garantias e o campo Adesão ao PROAGRO estão destacados. A lista mostra as opções Não se aplica, Outro seguro, Proagro + e Proagro tradicional.",
      "caption": "Aba Garantias · Campo Adesão ao PROAGRO",
      "width": 1060,
      "height": 201,
      "afterParagraph": 1
    },
    "guidance": "A crítica ocorre porque o SICOR identificou que a operação não contém informações referentes ao seguro do financiamento. Em determinadas modalidades de crédito rural, a adesão ao Proagro ou a contratação de outro seguro é obrigatória, conforme as regras aplicáveis à operação.\n\nAs informações referentes ao seguro são recuperadas da proposta deferida. Dessa forma, orientamos verificar, na aba Garantias, se o campo referente ao seguro está preenchido corretamente ou se consta a opção “Não se aplica”.\n\nCaso esteja selecionada a opção “Não se aplica” e a unidade necessite incluir as informações do seguro, o ajuste deverá ser realizado mediante a elaboração de uma Proposta Operacional Administrativa (POA), conforme disposto no normativo 3102-03-25 – Proposta Operacional Administrativa (POA).\n\nNota: Importante verificar se para a cultura utilizada há zoneamento vigente, pois se há Zarc, é obrigatório ter seguro. De acordo com o normativo 3102-42-02 - Enquadramento, item 5 O empreendimento de custeio agrícola de até R$ 200.000,00 (duzentos mil reais), cuja lavoura esteja compreendida no Zarc, financiado com participação de recursos controlados, deve ser integralmente enquadrado no Proagro, observadas as condições estabelecidas nos itens 18 e 19.",
    "reply": "Prezado(a), boa tarde!\n\nA crítica ocorre devido à ausência de informações sobre o seguro do financiamento no SICOR. Orientamos verificar, na proposta deferida, na aba Garantias, se o campo referente ao seguro está preenchido corretamente ou se consta “Não se aplica”. Caso seja necessário incluir as informações, o ajuste deverá ser realizado por meio de POA, conforme o normativo 3102-03-25.\n\nAtenciosamente,"
  },
  {
    "id": 6,
    "category": "Empreendimento",
    "message": "Código de zoneamento indevido para empreendimento: há Portaria ZARC para UF/produto.",
    "summary": "Revisão do código de zoneamento para a cultura e o município.",
    "guidance": "A crítica ocorre porque o usuário inseriu um código de empreendimento como “não zoneado”, sendo que para aquele Município/UF existe zoneamento vigente.",
    "reply": "Prezado(a), boa tarde!\n\nInformamos que a crítica ocorre porque foi informado o código de empreendimento “Não Zoneado”, embora exista zoneamento agrícola vigente para o município/UF em questão, conforme portaria do ZARC aplicável ao produto informado.\n\nDessa forma, é necessário revisar o código de zoneamento cadastrado e adequá-lo às regras vigentes para o município e a cultura agrícola do empreendimento, informando que a cultura é zoneada.\n\nAtenciosamente,"
  },
  {
    "id": 7,
    "category": "Empreendimento",
    "message": "Tipo de solo inexistente no ZARC (empreendimento, município e máxima data de portaria).",
    "summary": "Conferência do tipo de solo previsto para o empreendimento.",
    "guidance": "A crítica ocorre porque o usuário inseriu um tipo de solo que não está disponível no ZARC para o empreendimento utilizado. Para validação, acessar site do Zarc, e verificar qual tipo de solo é válido.",
    "reply": "Prezado(a), boa tarde!\n\nInformamos que a crítica ocorre porque foi informado o código de tipo de solo que não está enquadrado no site do Zarc no Mapa.\n\nDessa forma, orientamos consultar o zarc vigente para a cultura e rever o preenchimento do tipo de solo.\n\nAtenciosamente,"
  },
  {
    "id": 8,
    "category": "Empreendimento",
    "message": "Data de emissão maior ou igual à data de início da colheita",
    "summary": "Conferência da data de colheita em relação à safra e à emissão.",
    "screen": {
      "file": "telas/empreendimentos-colheita.png",
      "alt": "Campos com as datas de início e fim de plantio e colheita. O rótulo Data Início Colheita está destacado em amarelo.",
      "caption": "Aba Empreendimentos · Campo Data Início Colheita",
      "width": 589,
      "height": 64,
      "afterParagraph": 1
    },
    "guidance": "A crítica é gerada com base na “data início colheita”, da aba empreendimentos. A data deve estar dentro do período da safra, bem como posterior a data de emissão do contrato.",
    "reply": "Prezado(a), boa tarde!\n\nOrientamos verificar a data de início da colheita na aba Empreendimentos, garantindo que esteja dentro do período da safra e seja posterior à data de emissão do contrato.\n\nAtenciosamente,"
  },
  {
    "id": 9,
    "category": "Áreas e coordenadas",
    "message": "Limite PC + RP por área ultrapassado, para o produto informado",
    "summary": "Comparação da área do empreendimento com as coordenadas geodésicas.",
    "guidance": "A crítica ocorre porque a área informada pelo usuário nas Coordenadas Geodésicas é superior ou inferior à área cadastrada no empreendimento.\n\nPara validação, verificar se a área informada no empreendimento está compatível com a área delimitada pelas Coordenadas Geodésicas.",
    "reply": "Prezado(a), boa tarde!\n\nOrientamos verificar a área informada nas Coordenadas Geodésicas e a área cadastrada no empreendimento. Gentileza validar e ajustar as informações, se necessário.\n\nAtenciosamente,"
  },
  {
    "id": 10,
    "category": "Conformidade socioambiental",
    "message": "Gleba ou CAR informados sobrepõem Unidade de Conservação",
    "summary": "Verificação das condições de exceção e do indicador aplicável.",
    "guidance": "A crítica ocorre porque o usuário não inseriu o indicador de conformidade na operação do contrato.\n\nPara validação, verificar junto ao usuário se é o caso de inserir o indicador na operação conforme retorno abaixo.",
    "reply": "Prezado, boa tarde!\n\nConforme disposto no normativo 3102-03-27 – Impedimentos Sociais, Ambientais e Climáticos (Conformidade Socioambiental) e Críticas SICOR, o processo poderá prosseguir, desde que atendidas as condições previstas na Tabela 2, item 8 Sobreposição do CAR dos imóveis beneficiados com o crédito, garantidor ou destinado ao suporte forrageiro/apascentamento de animais à Proposta com UNIDADE DE CONSERVAÇÃO OU FLORESTAS PÚBLICAS NÃO DESTINADA.\n\n4 Atendendo às situações de exceção normativamente previstas, diante das evidências apresentadas, a unidade responsável pela instrução deve explicitar a situação de exceção no parecer da proposta, devendo ser marcado, no SINC, o indicador correspondente ao campo de \"conformidade Unidade de Conservação\" ou \"conformidade Floresta Pública\", atestando que foi verificada a situação de exceção e a operação está conforme a regulamentação vigente.\n\n5 Caso não atenda às situações de exceção normativamente previstas, a operação não deve ser enviada ao SICOR, cabendo a devolução do processo ao proponente\n\nAtenciosamente,"
  },
  {
    "id": 11,
    "category": "Conformidade socioambiental",
    "message": "Não aderente ao MCR MCR2-9-18",
    "summary": "Indicadores de conformidade e supressão de vegetação nativa.",
    "screen": {
      "file": "telas/sinc-conformidades.png",
      "alt": "Lista Domínio de Conformidades do SINC com opções de cumprimento do MCR 2-9-18, alíneas a, b, c e d.",
      "caption": "SINC · Domínio de Conformidades",
      "width": 1881,
      "height": 510,
      "afterParagraph": 2
    },
    "guidance": "A crítica ocorre porque o usuário não inseriu o indicador de conformidade na operação do contrato.\n\nNo SINC, constam novos indicadores de conformidades que possibilitam o prosseguimento do contrato. Cabe ao usuário identificar a opção aplicável ao caso do cliente e realizar o devido apontamento.",
    "reply": "Prezado, boa tarde!\n\nConforme disposto no normativo 3102-03-27 – Impedimentos Sociais, Ambientais e Climáticos (Conformidade Socioambiental) e Críticas SICOR, o processo poderá prosseguir, desde que atendidas as condições previstas na Tabela 2, item 4, Nota 12: O item supressão da vegetação nativa não poderá constar no projeto/orçamento de financiamento, nem como contrapartida de recursos próprios, podendo ser financiados os demais itens necessários ao empreendimento.\n\nAtenciosamente,"
  },
  {
    "id": 12,
    "category": "Conformidade socioambiental",
    "message": "Gleba ou CAR informados sobrepõem embargo do IBAMA",
    "summary": "Condições para retificação do CAR e uso do indicador IBAMA.",
    "guidance": "A crítica ocorre porque a Gleba ou o CAR informado sobrepõem embargo do IBAMA, e não consta na operação o indicador de conformidade IBAMA.\n\nA unidade deve rever o preenchimento da operação, conforme retorno abaixo.",
    "reply": "Prezado, boa tarde!\n\nConforme disposto no normativo 3102-03-27 – Impedimentos Sociais, Ambientais e Climáticos (Conformidade Socioambiental) e Críticas SICOR, o processo poderá prosseguir, desde que atendidas as condições previstas na Tabela 2, item 3 Embargos, conforme segue:\n\nNos casos em que forem atendidas as condições do item 5 anterior e o SICOR apresentar a crítica de \"Gleba ou CAR informados sobrepõem embargo do IBAMA\", o processo poderá prosseguir, utilizando o seguinte procedimento:\n\n6.1 Retificação do CAR para excluir a área do Embargo que não esteja em nome do proprietário do CAR;\n\n6.2 Utilizar o indicador de conformidade IBAMA; e\n\n6.3 arquivar todas as evidências e justificativas do cliente no dossiê da operação, em pasta compactada como item documental \"Certificação Socioambiental\".\n\nNota: Caso tenha sido registrado o indicador de conformidade IBAMA na operação, torna-se obrigatório o envio do código SNCR.\n\nAtenciosamente,"
  },
  {
    "id": 13,
    "category": "Proagro e seguro",
    "message": "Enquadramento superior ao permitido pelo Proagro",
    "summary": "Conferência do limite do beneficiário no ano agrícola.",
    "guidance": "O SICOR retorna a crítica acima quando o BACEN identifica que o cliente já financiou valor superior a R$ 200.000,00 no mesmo ano agrícola com cobertura do Proagro.\n\nPara validação, orientamos emitir o extrato do SICOR no SINC e pesquisar por operações dentro do ano agrícola que possuam adesão ao Proagro. Caso sejam identificadas, deve-se realizar a soma dos valores para verificação do limite.\n\nAno agrícola: entre 01/07 de um ano e 30/06 do ano subsequente, todas as operações nesse intervalo entram no mesmo cálculo de limite, mesmo que ocorram em anos diferentes no calendário.\n\nNota: Em nenhuma hipótese pode ser ultrapassado o limite de enquadramento no Proagro estabelecido nos itens 18 e 19.",
    "reply": "Prezado, boa tarde!\n\nConforme disposto em normativo 3102-42-02 – Enquadramento, o limite de Enquadramento de recursos no Proagro com o mesmo beneficiário é de R$ 200.000,00 (duzentos mil reais) para custeio, por ano agrícola, independentemente da quantidade de empreendimentos amparados em um ou mais agentes do programa, observado o disposto no item 19 seguinte.\n\n19 Para apuração do limite de enquadramento no Proagro considera-se a soma dos valores nominais enquadrados no mesmo ano agrícola, observado que, no caso de mais de um mutuário na operação, o respectivo valor aplica-se integral e solidariamente a cada um.\n\nAtenciosamente,"
  },
  {
    "id": 14,
    "category": "Conformidade socioambiental",
    "message": "Gleba ou CAR informados sobrepõem terra indígena",
    "summary": "Condições previstas para prosseguimento da operação.",
    "guidance": "A crítica ocorre porque a Gleba ou o CAR informado sobrepõem terra indígena.",
    "reply": "Prezado, boa tarde!\n\nConforme disposto no normativo 3102-03-27 - Impedimentos Sociais, Ambientais e Climáticos (Conformidade Socioambiental) e Críticas SICOR: Caso a consulta identifique sobreposição, cabe a devolução do processo ao proponente, salvo no caso de operações de crédito com população indígena ou o proponente apresente a Declaração de Reconhecimento de Limites- DRL, conforme a Instrução Normativa Funai nº 30, de 09/08/2023, em conjunto com o CAR ajustado do imóvel rural.\n\nAtenciosamente,"
  },
  {
    "id": 15,
    "category": "Empreendimento",
    "message": "A Receita Bruta Esperada informada ao Sicor está fora dos limites admitidos",
    "summary": "Preenchimento da RBE com base na totalidade do empreendimento.",
    "guidance": "A receita a que se refere este campo deve ser aquela que vai ser obtida integralmente pelo empreendimento. Portanto, a RBE deve considerar a obtenção de receitas provenientes de todos os recursos aplicados no empreendimento, tanto os do financiamento quanto os próprios, quando houver.",
    "reply": "Prezado, boa tarde!\n\nConforme disposto no normativo 3102-32-05, item 48 e 48.1, a receita a que se refere este campo deve ser aquela que vai ser obtida com a totalidade do empreendimento. Portanto, a RBE deve considerar a obtenção de receitas provenientes de todos os recursos aplicados no empreendimento, tanto os do financiamento quanto os próprios, quando houver.\n\nGentileza preencher o campo com a soma do valor financiado + renda líquida, e recursos próprios, se houver.\n\nAtenciosamente,"
  },
  {
    "id": 16,
    "category": "Cadastro e sistemas",
    "message": "DAP inexistente ou inválida",
    "summary": "Divergências de DAP ou CAF entre os sistemas.",
    "guidance": "A crítica ocorre em razão de inconsistências identificadas entre as informações da DAP/CAF informada na operação. Dentre as opções podem ser:\n\n- Data de emissão do extrato CAF diverge da data de emissão do S400 e S035.\n\n- Data de atualização em menos de 10 dias úteis.\n\n- Nome do proprietário diverge entre os sistemas.\n\n- Número da CAF S035 ou S400 diverge do n° origem no extrato CAF.\n\nNota: O retorno encaminhado ao usuário é com base na situação da ocorrência, abaixo segue o mais comum entre as causas identificadas.",
    "reply": "Prezado, boa tarde!\n\nEm análise, identificamos que houve atualização no documento DAP (Declaração de Aptidão ao Pronaf)/CAF há menos de 10 dias úteis.\n\nEsclarecemos que, após qualquer atualização na documentação, existe um prazo de até 10 dias úteis para a replicação das informações entre os sistemas do Banco.\n\nDessa forma, orientamos aguardar o prazo mencionado e, posteriormente, realizar uma nova tentativa.\n\nAtenciosamente,"
  },
  {
    "id": 17,
    "category": "Cadastro e sistemas",
    "message": "Base de dados do CAR provida pelo SFB está indisponível. Favor entrar em contato com o SFB.",
    "summary": "Indisponibilidade do Serviço Florestal Brasileiro.",
    "guidance": "A crítica ocorre devido indisponibilidade do Sistema do Serviço Florestal Brasileiro  (SFB). A orientação é tentar novamente dentro de alguns minutos, uma vez que a falha é externa.",
    "reply": "Prezado, boa tarde!\n\nA crítica apresentada ocorre em razão da indisponibilidade do sistema do Serviço Florestal Brasileiro (SFB). Por se tratar de uma instabilidade em sistema externo ao Banco, orientamos aguardar alguns minutos e realizar uma nova tentativa.\n\nAtenciosamente,"
  },
  {
    "id": 18,
    "category": "Proagro e seguro",
    "message": "A GRM deve corresponder a 40% do valor financiado, limitada ao valor de R$9.000,00, por unidade familiar e ano agrícola.",
    "summary": "Conferência da Garantia da Renda Mínima na aba Empreendimento.",
    "guidance": "A crítica ocorre, pois, o usuário inseriu um valor acima do limite de 40% (R$ 9.000,00) na aba empreendimento, no campo da GRM.\n\nConforme disposto em norma, 3102-42-10 - Subprograma PROAGRO MAIS:\n\nNota 1:  Nas propostas de Custeio, o cálculo da parcela de Garantia da Renda Mínima (GRM) é efetuado automaticamente pela Planilha de Custeio Agrícola.\n \nNota 2: Na renovação de operações de custeio no âmbito do Planta Nordeste, o cálculo da parcela  de Garantia da Renda Mínima (GRM) deverá ser efetuado por meio da  \"Planilha para Cálculo da Parcela de Garantia de Renda Mínima (GRM) PROAGRO MAIS\", disponível na página do Ambiente de Concessão de Crédito (INTRA/Negócios/Processos/Proposta de Crédito/ Utilitários para Elaboração de Propostas).",
    "reply": "Prezado, boa tarde!\n\nDe acordo com o normativo 3102-42-10, informamos que a GRM deve corresponder a 40% (quarenta por cento) do total do valor financiado, limitada ao valor de R$9.000,00 (nove mil reais).\n\nGentileza verificar.\n\nAtenciosamente,"
  },
  {
    "id": 19,
    "category": "Empreendimento",
    "message": "Sistema de produção com tipo de cultivo inválido",
    "summary": "Revisão do código e da obrigatoriedade do campo.",
    "guidance": "A crítica apresentada ocorre em razão da inserção de um código inválido na aba “Empreendimento”, especificamente no campo “Sistema de Produção”. Como orientação, recomenda-se que, nos campos em que não houver aplicabilidade, seja selecionada a opção “0 – Não se aplica”, a fim de evitar críticas indevidas decorrentes do preenchimento incorreto.\n\nImportante: A opção “0 – Não se aplica” deve ser utilizada exclusivamente nos campos cuja informação não seja obrigatória, ou seja, quando não houver exigência de preenchimento para a atividade ou característica do empreendimento. Como exemplo, no campo referente ao gotejamento, caso a cultura seja irrigada e essa informação seja obrigatória, não deverá ser selecionada a opção “Não se aplica”, pois isso poderá gerar inconsistências no preenchimento.\n\nDessa forma, cabe ao analista responsável avaliar criteriosamente as características do empreendimento e a obrigatoriedade de cada informação antes de efetuar o preenchimento, evitando inconsistências e críticas decorrentes de seleções inadequadas.",
    "reply": "Prezado, boa tarde!\n\nConforme análise, identificamos que foi inserido código indevido no sistema de produção. Orientamos revisar o preenchimento dos campos em que não houver aplicabilidade, seja selecionada a opção “0 – Não se aplica”, a fim de evitar críticas decorrentes do preenchimento incorreto.\n\nGentileza realizar os ajustes necessários e efetuar uma nova tentativa.\n\nAtenciosamente,"
  },
  {
    "id": 20,
    "category": "Áreas e coordenadas",
    "message": "Gleba deve ser polígono fechado: o primeiro e o último ponto devem ser iguais",
    "summary": "Conferência dos pontos inicial e final da gleba.",
    "guidance": "A crítica apresentada ocorre, pois, o primeiro e último ponto das coordenadas geodésicas não estão iguais, deve-se orientar ao usuário verificar e ajustar os pontos.",
    "reply": "Prezado, boa tarde!\n\nConforme análise, identificamos que as coordenadas do primeiro e do último ponto das glebas estão divergentes. Para o correto fechamento do polígono, orientamos que o último ponto seja repetido exatamente igual ao primeiro. Gentileza realizar os ajustes necessários e, posteriormente, efetuar uma nova tentativa.\n\nAtenciosamente,"
  }
];

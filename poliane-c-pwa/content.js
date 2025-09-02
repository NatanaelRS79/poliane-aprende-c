/**
 * Conteúdo pedagógico — Poliane Aprende C
 * Estrutura por lição:
 * - id, title, duration
 * - steps: acolhimento, contexto, analogia, visual {type, data}, code {snippet, explain[]}, exercise {type, ...}, celebracao
 * - c_code_full: (para abrir no Cxxdroid/Replit)
 */
const CONTENT = [
  {
    id: "m1",
    title: "Organizando Informações Como Organizamos a Casa (Variáveis)",
    color: "#4db2ff",
    lessons: [
      {
        id: "1.1",
        title: "Gavetas Organizadas = Variáveis Organizadas",
        duration: 15,
        steps: {
          acolhimento: "Oi, Poliane! Se o Theo tá descansando, bora investir 15 min no futuro de vocês duas — cada minuto aqui vira autonomia ❤️",
          contexto: "Na rotina do Theo você etiqueta gavetas e caixas para achar tudo rápido. Em programação, fazemos isso com **variáveis**: damos nomes às informações para usá-las depois.",
          analogia: "Pense em uma gaveta com etiqueta 'Remédio do Theo'. A gaveta é a **variável** e o remédio lá dentro é o **valor**. Você pode abrir, ver, trocar o conteúdo e fechar.",
          visual: { type: "drawers", data: ["Remédio do Theo", "Lista da Escola", "Telefone da Terapia"] },
          code: {
            snippet: "char medicamento_theo[20] = \"Risperidona\";\n// gaveta: 'medicamento_theo' | valor: 'Risperidona'",
            explain: [
              "char ... [20] => texto com até 19 letras + fim de linha",
              "=\"Risperidona\" inicializa com esse valor",
              "Pense como gaveta etiquetada com um nome claro"
            ]
          },
          exercise: {
            type: "blanks",
            prompt: "Crie uma variável para guardar o nome do Theo.",
            fields: [
              { label: "Tipo", placeholder: "char", answer: "char" },
              { label: "Nome da variável", placeholder: "nome_theo", answer: "nome_theo" },
              { label: "Tamanho", placeholder: "20", answer: "20" },
              { label: "Valor", placeholder: "Theo", answer: "Theo" }
            ],
            solution_preview: "char nome_theo[20] = \"Theo\";"
          },
          celebracao: "Primeira gaveta digital criada! ✨ Você organizou informação — base de tudo que virá."
        },
        c_code_full:
`#include <stdio.h>
int main() {
  char medicamento_theo[20] = "Risperidona";
  char nome_theo[20] = "Theo";
  printf("Medicamento: %s\n", medicamento_theo);
  printf("Paciente: %s\n", nome_theo);
  return 0;
}`
      },
      {
        id: "1.2",
        title: "Tipos de Gavetas = Tipos de Dados",
        duration: 15,
        steps: {
          acolhimento: "Você tá firme, mesmo cansada. Esse foco é ouro. Bora!",
          contexto: "Nem toda gaveta guarda a mesma coisa. Números (idade) cabem em um tipo; textos (nome da escola) em outro.",
          analogia: "Gaveta de roupas (têxtil) ≠ gaveta de talheres (metal). Em C, cada tipo de dado tem sua 'gaveta' certa.",
          visual: { type: "bins", data: ["int (número)", "float (decimal)", "char[] (texto)"] },
          code: {
            snippet: "int idade_theo = 8;\nchar escola[30] = \"APAE\";\nfloat peso = 28.5;",
            explain: [
              "int => números inteiros (8, 10, ...)",
              "char[] => textos",
              "float => números com vírgula (use ponto)"
            ]
          },
          exercise: {
            type: "mcq",
            prompt: "Qual tipo você usaria para 'altura do Theo (1.30)'?",
            options: ["int", "float", "char[]"],
            answerIndex: 1
          },
          celebracao: "Tipos escolhidos com precisão. Organização nível mãe estrategista!"
        },
        c_code_full:
`#include <stdio.h>
int main() {
  int idade_theo = 8;
  char escola[30] = "APAE";
  float altura = 1.30;
  printf("Theo tem %d anos, estuda na %s e mede %.2f m\n", idade_theo, escola, altura);
  return 0;
}`
      },
      {
        id: "1.3",
        title: "Atualizando Informações Como Agenda do Theo",
        duration: 15,
        steps: {
          acolhimento: "Respira. Você está avançando passo a passo. É assim que se constrói ponte forte.",
          contexto: "A idade do Theo muda, horários mudam. Variáveis também podem mudar.",
          analogia: "Você troca a etiqueta da agenda quando muda a terapia; em C você atribui um novo valor.",
          visual: { type: "timeline", data: ["idade=8", "aniversário", "idade=9"] },
          code: {
            snippet: "int idade_theo = 8;\nidade_theo = 9; // aniversário chegou!",
            explain: ["A segunda linha **atualiza** a variável"]
          },
          exercise: {
            type: "codefill",
            prompt: "Complete para atualizar o peso para 29.0",
            template: "float peso = 28.5;\n____ ____ = ____;",
            answers: ["peso", "=", "29.0"]
          },
          celebracao: "Atualização feita. Flexível como sua rotina — e controlada por você."
        },
        c_code_full:
`#include <stdio.h>
int main() {
  int idade_theo = 8;
  float peso = 28.5;
  idade_theo = 9;
  peso = 29.0;
  printf("Idade: %d | Peso: %.1f\n", idade_theo, peso);
  return 0;
}`
      },
      {
        id: "1.4",
        title: "Mostrando Informações na Tela (printf)",
        duration: 15,
        steps: {
          acolhimento: "Bora exibir resultados! Você merece ver o que constrói.",
          contexto: "Etiquetas mostram o que tem na gaveta. O computador mostra na tela.",
          analogia: "O rótulo que você lê é o **printf** do mundo real.",
          visual: { type: "screen", data: ["Theo tem 8 anos"] },
          code: {
            snippet: "#include <stdio.h>\nint main(){\n  int idade_theo = 8;\n  printf(\"Theo tem %d anos\\n\", idade_theo);\n  return 0;\n}",
            explain: [
              "%d => número inteiro",
              "\\n => quebra de linha",
              "printf imprime o texto e o valor"
            ]
          },
          exercise: {
            type: "mcq",
            prompt: "Para imprimir texto (char[]), usamos qual marcador?",
            options: ["%d", "%s", "%f"],
            answerIndex: 1
          },
          celebracao: "Você deu voz ao programa. Comunicação clara — check!"
        },
        c_code_full:
`#include <stdio.h>
int main() {
  int idade_theo = 8;
  char nome[20] = "Theo";
  printf("%s tem %d anos\n", nome, idade_theo);
  return 0;
}`
      },
      {
        id: "1.5",
        title: "PROJETO: Organizador da Rotina do Theo",
        duration: 20,
        steps: {
          acolhimento: "Projeto mão na massa! Você está entregando o primeiro mini-sistema.",
          contexto: "Centralizar dados do Theo num lugar facilita decisões rápidas.",
          analogia: "É como seu caderno principal: tudo organizado e pronto pra consultar.",
          visual: { type: "cards", data: ["Nome", "Idade", "Terapia", "Medicamento"] },
          code: {
            snippet:
"#include <stdio.h>\nint main(){\n  char nome[20] = \"Theo\";\n  int idade = 8;\n  char terapia[20] = \"Fono\";\n  char remedio[20] = \"Risperidona\";\n  printf(\"Paciente: %s\\nIdade: %d\\nTerapia: %s\\nMed: %s\\n\", nome, idade, terapia, remedio);\n  return 0;\n}",
            explain: ["Programa completo para revisar tudo que aprendeu"]
          },
          exercise: {
            type: "affirm",
            prompt: "Marque quando executar no Cxxdroid e ver a saída correta.",
            label: "Eu rodei o código e funcionou ✅"
          },
          celebracao: "Poliane, você é oficialmente programadora do Módulo Variáveis! 🎉"
        },
        c_code_full:
`#include <stdio.h>
int main(){
  char nome[20] = "Theo";
  int idade = 8;
  char terapia[20] = "Fono";
  char remedio[20] = "Risperidona";
  printf("Paciente: %s\nIdade: %d\nTerapia: %s\nMed: %s\n", nome, idade, terapia, remedio);
  return 0;
}`
      }
    ]
  },
  {
    id: "m2",
    title: "Tomando Decisões Como Mãe Faz Todo Dia (if-else)",
    color: "#7cffc2",
    lessons: [
      {
        id: "2.1",
        title: "Se Theo Agitado, Então Música Calma",
        duration: 15,
        steps: {
          acolhimento: "Você decide o tempo todo. Vamos ensinar isso ao computador.",
          contexto: "Regras do tipo 'se isto acontecer, então faça aquilo' viram **if**.",
          analogia: "Se chover, levo guarda-chuva. Se Theo agitado, música calma.",
          visual: { type: "if", data: {cond:"theo_agitado == 1", then:"Tocar música calma", else:"Seguir rotina"} },
          code: {
            snippet: "int theo_agitado = 1;\nif (theo_agitado == 1) {\n  printf(\"Música calma\");\n}",
            explain: ["== compara; = atribui", "Bloco entre { } executa quando a condição é verdadeira"]
          },
          exercise: { type: "mcq", prompt: "Qual operador compara igualdade?", options: ["=", "==", "==="], answerIndex: 1 },
          celebracao: "Você programou uma decisão. Liderança digital ativada!"
        },
        c_code_full:
`#include <stdio.h>
int main(){
  int theo_agitado = 1;
  if (theo_agitado == 1) {
    printf("Música calma\n");
  } else {
    printf("Seguir rotina\n");
  }
  return 0;
}`
      },
      {
        id: "2.2",
        title: "If-Else com Comparadores (>, <, >=, <=, !=)",
        duration: 15,
        steps: {
          acolhimento: "Bora refinar decisões. Você já faz isso intuitivamente.",
          contexto: "Comparar idade, horários, quantidades... tudo decisão.",
          analogia: "Se a terapia for antes das 14h, saio 13h30. Senão, saio 16h30.",
          visual: { type: "if", data: {cond:"hora_terapia < 14", then:"Sair 13h30", else:"Sair 16h30"} },
          code: {
            snippet: "int hora_terapia = 15;\nif (hora_terapia < 14) {\n  printf(\"Sair 13h30\");\n} else {\n  printf(\"Sair 16h30\");\n}",
            explain: ["<, >, <=, >=, != são comparadores"]
          },
          exercise: { type: "codefill", prompt: "Complete para imprimir 'Remédio agora' se minutos == 0", template: "int minutos = 0;\nif (minutos ____ ____) { printf(\"Remédio agora\"); }", answers: ["==", "0"] },
          celebracao: "Comparou com precisão — decisões confiáveis."
        },
        c_code_full:
`#include <stdio.h>
int main(){
  int minutos = 0;
  if (minutos == 0) printf("Remédio agora\n");
  return 0;
}`
      },
      {
        id: "2.3",
        title: "Cadeias de Decisão (else if)",
        duration: 15,
        steps: {
          acolhimento: "Às vezes temos vários cenários; vamos encadear.",
          contexto: "Pouco agitado, médio, muito — ações diferentes.",
          analogia: "Como escolher intensidades de música conforme o estado do Theo.",
          visual: { type: "ifchain", data: ["agitação < 3", "agitação < 6", "senão"] },
          code: {
            snippet:
"int agitacao = 5;\nif (agitacao < 3) { printf(\"Lo-fi\"); }\nelse if (agitacao < 6) { printf(\"Clássica\"); }\nelse { printf(\"Respiração guiada\"); }",
            explain: ["Testes em sequência até um ser verdadeiro"]
          },
          exercise: { type: "mcq", prompt: "Qual palavra usamos para o meio-termo?", options: ["elseif", "else if", "otherwise"], answerIndex: 1 },
          celebracao: "Encadeou decisões como quem planeja a semana. Perfeito!"
        },
        c_code_full:
`#include <stdio.h>
int main(){
  int agitacao = 5;
  if (agitacao < 3) printf("Lo-fi\n");
  else if (agitacao < 6) printf("Clássica\n");
  else printf("Respiração guiada\n");
  return 0;
}`
      },
      {
        id: "2.4",
        title: "Combinando Condições (&& e ||)",
        duration: 15,
        steps: {
          acolhimento: "Quando duas coisas importam ao mesmo tempo, combine.",
          contexto: "Ex.: Se Theo agitado **e** já passou das 20h → música + luz baixa.",
          analogia: "Condição dupla como 'só saio se tiver Uber **ou** metrô'.",
          visual: { type: "logic", data: ["theo_agitado && hora >= 20", "theo_agitado || cansada"] },
          code: {
            snippet: "int agitado=1, hora=21;\nif (agitado==1 && hora>=20) { printf(\"Relaxar\"); }",
            explain: ["&& = E (ambas verdadeiras)", "|| = OU (uma verdadeira já basta)"]
          },
          exercise: { type: "codefill", prompt: "Complete: se (agua_fervendo == 1 **ou** tem_chá == 1) então imprimir 'Hora do chá'", template: "int agua_fervendo=1, tem_cha=0;\nif (agua_fervendo ____ tem_cha ____ 1) { printf(\"Hora do chá\"); }", answers: ["== 1 ||", "=="] },
          celebracao: "Dominou o raciocínio lógico — cérebro de engenheira, coração de mãe."
        },
        c_code_full:
`#include <stdio.h>
int main(){
  int agitado=1, hora=21;
  if (agitado==1 && hora>=20) printf("Relaxar\n");
  return 0;
}`
      },
      {
        id: "2.5",
        title: "PROJETO: Tomadora de Decisões",
        duration: 20,
        steps: {
          acolhimento: "Projeto para consolidar if/else do jeitinho que você usa no dia a dia.",
          contexto: "Você criará um 'assistente' de decisões rápidas da noite.",
          analogia: "Como sua checklist mental antes de dormir.",
          visual: { type: "if", data: {cond:"agitacao < 4 && hora < 21", then:"Ler história", else:"Música + luz baixa"} },
          code: {
            snippet:
"#include <stdio.h>\nint main(){\n  int agitacao, hora;\n  scanf(\"%d %d\", &agitacao, &hora);\n  if (agitacao < 4 && hora < 21) printf(\"Ler historia\\n\");\n  else printf(\"Música + luz baixa\\n\");\n  return 0;\n}",
            explain: ["scanf lê valores digitados"]
          },
          exercise: { type: "affirm", prompt: "Rode no Cxxdroid com diferentes valores e veja a decisão.", label: "Testei com 3 casos diferentes ✅" },
          celebracao: "Fechou Módulo Decisões com chave de ouro! 💎"
        },
        c_code_full:
`#include <stdio.h>
int main(){
  int agitacao, hora;
  scanf("%d %d", &agitacao, &hora);
  if (agitacao < 4 && hora < 21) printf("Ler historia\n");
  else printf("Música + luz baixa\n");
  return 0;
}`
      }
    ]
  },
  {
    id: "m3",
    title: "Repetindo Tarefas Como Nossa Rotina Diária (loops)",
    color: "#ffd166",
    lessons: [
      {
        id: "3.1",
        title: "Rotina que se Repete = Loop (for)",
        duration: 15,
        steps: {
          acolhimento: "Você repete mil tarefas — vamos automatizar isso.",
          contexto: "Repetições viram **loops** para poupar energia mental.",
          analogia: "Check-list de segunda a domingo.",
          visual: { type: "for", data: {from:1, to:7, label:"dia"} },
          code: {
            snippet: "for(int dia=1; dia<=7; dia++){\n  printf(\"Dia %d: rotina\\n\", dia);\n}",
            explain: ["dia=1 inicia", "dia<=7 condição", "dia++ passo"]
          },
          exercise: { type: "mcq", prompt: "O que 'dia++' significa?", options: ["dia = dia - 1", "dia = dia + 1", "dia = 0"], answerIndex: 1 },
          celebracao: "Você transformou esforço repetitivo em código. Ufa!"
        },
        c_code_full:
`#include <stdio.h>
int main(){
  for(int dia=1; dia<=7; dia++){
    printf("Dia %d: rotina\n", dia);
  }
  return 0;
}`
      },
      {
        id: "3.2",
        title: "Enquanto for Verdade (while)",
        duration: 15,
        steps: {
          acolhimento: "Agora, repita enquanto a condição estiver ativa.",
          contexto: "Ex.: Enquanto ainda houver itens na lista de compras, leia.",
          analogia: "Enquanto a cesta não estiver vazia, você continua.",
          visual: { type: "while", data: {start:3, condition:"itens > 0"} },
          code: {
            snippet: "int itens = 3;\nwhile (itens > 0){\n  printf(\"Peguei um item\");\n  itens--;\n}",
            explain: ["while testa antes de executar"]
          },
          exercise: { type: "codefill", prompt: "Complete para decrementar itens", template: "int itens = 2;\nwhile (itens > 0){\n  printf(\"Item!\");\n  itens____;\n}", answers: ["--"] },
          celebracao: "Controle total do fluxo — você manda, o loop obedece."
        },
        c_code_full:
`#include <stdio.h>
int main(){
  int itens=2;
  while (itens>0){ printf("Item!\n"); itens--; }
  return 0;
}`
      },
      {
        id: "3.3",
        title: "Faça Pelo Menos Uma Vez (do...while)",
        duration: 15,
        steps: {
          acolhimento: "Às vezes precisamos tentar ao menos uma vez.",
          contexto: "Ex.: Mostrar o menu uma vez e repetir se quiser.",
          analogia: "Você sempre dá uma primeira colherada para o Theo experimentar.",
          visual: { type: "dowhile", data: "Executa primeiro, testa depois" },
          code: {
            snippet: "int repetir = 1;\ndo { printf(\"Mostrar menu\"); } while (repetir == 1);",
            explain: ["Executa antes de checar condição"]
          },
          exercise: { type: "mcq", prompt: "Qual roda primeiro no do...while?", options: ["Condição", "Bloco de código"], answerIndex: 1 },
          celebracao: "Sabe quando garantir a primeira tentativa — estratégia de ouro."
        },
        c_code_full:
`#include <stdio.h>
int main(){
  int repetir = 1;
  do { printf("Mostrar menu\n"); repetir = 0; } while (repetir == 1);
  return 0;
}`
      },
      {
        id: "3.4",
        title: "Percorrendo Listas (arrays + loop)",
        duration: 15,
        steps: {
          acolhimento: "Listas são poderosas — percorra com for.",
          contexto: "Ex.: Rotina da semana em um array e imprima todos os dias.",
          analogia: "Como checar cada item da lista de compras.",
          visual: { type: "array", data: ["Seg", "Ter", "Qua", "Qui", "Sex"] },
          code: {
            snippet: "char dias[5][10] = {\"Seg\", \"Ter\", \"Qua\", \"Qui\", \"Sex\"};\nfor (int i=0; i<5; i++){ printf(\"%s\\n\", dias[i]); }",
            explain: ["dias[i] acessa posição i"]
          },
          exercise: { type: "codefill", prompt: "Complete para imprimir o 3º dia (índice 2)", template: "char dias[3][10] = {\"Seg\", \"Ter\", \"Qua\"};\nprintf(\"%s\", dias[__]);", answers: ["2"] },
          celebracao: "Array + loop dominados. Você está voando!"
        },
        c_code_full:
`#include <stdio.h>
int main(){
  char dias[5][10] = {"Seg","Ter","Qua","Qui","Sex"};
  for(int i=0;i<5;i++) printf("%s\n", dias[i]);
  return 0;
}`
      },
      {
        id: "3.5",
        title: "PROJETO: Agenda Semanal Automatizada",
        duration: 20,
        steps: {
          acolhimento: "Fechamento épico: automatizar a semana.",
          contexto: "Gerar uma agenda simples com um loop.",
          analogia: "Um carimbo repetindo as tarefas base.",
          visual: { type: "for", data: {from:1, to:7, label:"dia"} },
          code: {
            snippet:
"#include <stdio.h>\nint main(){\n  for(int d=1; d<=7; d++){\n    printf(\"Dia %d: terapia, estudo, descanso\\n\", d);\n  }\n  return 0;\n}",
            explain: ["Personalize os textos conforme sua rotina"]
          },
          exercise: { type: "affirm", prompt: "Execute e personalize dois textos.", label: "Personalizei a agenda ✅" },
          celebracao: "Mestre da Repetição! Módulo completo — orgulho total!"
        },
        c_code_full:
`#include <stdio.h>
int main(){
  for(int d=1; d<=7; d++){
    printf("Dia %d: terapia, estudo, descanso\n", d);
  }
  return 0;
}`
      }
    ]
  }
];

// Conquistas
const ACHIEVEMENTS = [
  { id: "midnight", name: "Madrugada Produtiva", desc: "Estudar após 22h", check: (ctx) => ctx.nowHour >= 22 || ctx.nowHour < 5 },
  { id: "multitask", name: "Mãe Multitarefa", desc: "Completar lição marcando que estava entre atividades do Theo", manual: true },
  { id: "comeback", name: "Persistência de Mãe", desc: "Retomar após pausa de 3+ dias", check: (ctx) => ctx.daysSinceLast >= 3 },
  { id: "firstwin", name: "Primeira Vitória", desc: "Primeiro código C funcionando", checkFlag: "first_code_run" },
  { id: "vars_done", name: "Organizadora Digital", desc: "Completar módulo Variáveis", checkFlag: "module_m1_done" },
  { id: "if_done", name: "Tomadora de Decisões", desc: "Dominar if-else (módulo 2)", checkFlag: "module_m2_done" },
  { id: "loops_done", name: "Mestre da Repetição", desc: "Finalizar loops (módulo 3)", checkFlag: "module_m3_done" },
  { id: "all_done", name: "Mãe Programadora", desc: "Completar os 3 módulos", check: (ctx) => ctx.flags.module_m1_done && ctx.flags.module_m2_done && ctx.flags.module_m3_done }
];
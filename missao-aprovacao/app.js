
// ============================================================
// COPCIBER TEORIA - LÓGICA PRINCIPAL DA APLICAÇÃO
// PWA Completo para Estudo de Prova - PMERJ + PUC-Rio
// ============================================================

// Garantir acesso aos dados
// Garantir acesso aos dados
if (typeof questoes === 'undefined' || !questoes || questoes.length === 0) {
    console.error("ERRO: Banco de questões vazio!");
    alert("ERRO CRÍTICO: Banco de Dados não carregou. Recarregue a página.");
}




// ============================================================
// ESTADO GLOBAL DA APLICAÇÃO
// ============================================================

let estadoApp = {
    usuario: {
        xp: 0,
        nivel: 1,
        streak: 0,
        ultimoAcesso: null,
        questoesRespondidas: 0,
        simuladosRealizados: 0,
        badges: []
    },
    estatisticas: {
        redes: { acertos: 0, erros: 0, questoes: [] },
        protocolos: { acertos: 0, erros: 0, questoes: [] },
        criptografia: { acertos: 0, erros: 0, questoes: [] },
        sistemas: { acertos: 0, erros: 0, questoes: [] },
        ingles: { acertos: 0, erros: 0, questoes: [] },
        // Estatísticas para a nova categoria de Python (Pareto)
        python: { acertos: 0, erros: 0, questoes: [] }
    },
    sessaoAtual: {
        tipo: null, // 'estudo', 'simulado', 'revisao'
        categoria: null,
        questoesAtuais: [],
        indiceAtual: 0,
        respostas: []
    },
    nivelEstudo: 'base' // 'base' ou 'elite'
};

const cenarios = window.cenarios || [];

// ============================================================
// INICIALIZAÇÃO
// ============================================================

window.onerror = function (msg, url, line) {
    alert('Erro no App: ' + msg + '\nLinha: ' + line);
    return false;
};

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log("Iniciando App...");
        carregarDados();
        verificarStreak();
        atualizarUI();
        configurarEventListeners();
        console.log("App iniciado com sucesso!");
    } catch (e) {
        alert('Erro ao iniciar: ' + e.message);
        console.error(e);
    }
});

// ============================================================
// CARREGAR E SALVAR DADOS (localStorage)
// ============================================================

function carregarDados() {
    const dadosSalvos = localStorage.getItem('copciber_dados');
    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        estadoApp.usuario = dados.usuario || estadoApp.usuario;
        estadoApp.estatisticas = dados.estatisticas || estadoApp.estatisticas;

        // Garante que categorias recém-adicionadas existam
        const categoriasPadrao = ['redes', 'protocolos', 'criptografia', 'sistemas', 'ingles', 'python'];
        categoriasPadrao.forEach(cat => {
            if (!estadoApp.estatisticas[cat]) {
                estadoApp.estatisticas[cat] = { acertos: 0, erros: 0, questoes: [] };
            }
        });
    }
}

function salvarDados() {
    const dadosParaSalvar = {
        usuario: estadoApp.usuario,
        estatisticas: estadoApp.estatisticas
    };
    localStorage.setItem('copciber_dados', JSON.stringify(dadosParaSalvar));
}

// ============================================================
// STREAK DIÁRIO
// ============================================================

function verificarStreak() {
    const hoje = new Date().toDateString();
    const ultimoAcesso = estadoApp.usuario.ultimoAcesso;

    if (ultimoAcesso) {
        const dataUltimoAcesso = new Date(ultimoAcesso);
        const ontem = new Date();
        ontem.setDate(ontem.getDate() - 1);

        if (dataUltimoAcesso.toDateString() === ontem.toDateString()) {
            // Acesso consecutivo
            estadoApp.usuario.streak++;
        } else if (dataUltimoAcesso.toDateString() !== hoje) {
            // Quebrou streak
            estadoApp.usuario.streak = 1;
        }
    } else {
        estadoApp.usuario.streak = 1;
    }

    estadoApp.usuario.ultimoAcesso = hoje;
    salvarDados();
    verificarBadgeStreak();
}

// ============================================================
// SISTEMA DE XP E NÍVEIS
// ============================================================

function adicionarXP(quantidade) {
    estadoApp.usuario.xp += quantidade;

    const nivelAnterior = estadoApp.usuario.nivel;
    estadoApp.usuario.nivel = calcularNivel(estadoApp.usuario.xp);

    if (estadoApp.usuario.nivel > nivelAnterior) {
        mostrarNotificacao(`🎉 Subiu para o Nível ${estadoApp.usuario.nivel} !`);
    }

    atualizarUI();
    salvarDados();
}

function calcularNivel(xp) {
    if (xp < 200) return 1;
    if (xp < 500) return 2;
    if (xp < 900) return 3;
    if (xp < 1400) return 4;

    // A partir do nível 5: +500 XP por nível
    return 5 + Math.floor((xp - 1400) / 500);
}

function calcularXPProximoNivel() {
    const nivel = estadoApp.usuario.nivel;

    if (nivel === 1) return 200;
    if (nivel === 2) return 500;
    if (nivel === 3) return 900;
    if (nivel === 4) return 1400;

    return 1400 + ((nivel - 4) * 500);
}

function calcularProgressoNivel() {
    const xpAtual = estadoApp.usuario.xp;
    const xpProximo = calcularXPProximoNivel();

    let xpNivelAtual = 0;
    if (estadoApp.usuario.nivel === 2) xpNivelAtual = 200;
    else if (estadoApp.usuario.nivel === 3) xpNivelAtual = 500;
    else if (estadoApp.usuario.nivel === 4) xpNivelAtual = 900;
    else if (estadoApp.usuario.nivel >= 5) {
        xpNivelAtual = 1400 + ((estadoApp.usuario.nivel - 5) * 500);
    }

    const xpNecessario = xpProximo - xpNivelAtual;
    const xpProgresso = xpAtual - xpNivelAtual;

    return (xpProgresso / xpNecessario) * 100;
}

// ============================================================
// SISTEMA DE BADGES
// ============================================================

function verificarBadges() {
    verificarBadgePrimeiroSimulado();
    verificarBadge100Questoes();
    verificarBadgeStreak();
    verificarBadgeSimuladoExcelente();
}

function verificarBadgePrimeiroSimulado() {
    if (estadoApp.usuario.simuladosRealizados >= 1 && !temBadge('primeiro_simulado')) {
        adicionarBadge('primeiro_simulado', 'Primeiro Simulado', '📝');
    }
}


function verificarBadge100Questoes() {
    if (estadoApp.usuario.questoesRespondidas >= 100 && !temBadge('100_questoes')) {
        adicionarBadge('100_questoes', '100 Questões Respondidas', '📚');
    }
}

function verificarBadgeStreak() {
    if (estadoApp.usuario.streak >= 5 && !temBadge('streak_5')) {
        adicionarBadge('streak_5', '5 Dias de Streak', '🔥');
    }
}

// ============================================================
// AUDIO SYSTEM (Sintetizador Web Audio API)
// ============================================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    }
    else if (type === 'correct') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(880, now + 0.1);
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
    else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
}

// ============================================================
// HACKER MODE
// ============================================================
function toggleHackerMode() {
    document.body.classList.toggle('hacker');
    const isHacker = document.body.classList.contains('hacker');
    localStorage.setItem('copciber_hacker', isHacker);
    playSound('click');
}



function verificarBadgeStreak() {
    if (estadoApp.usuario.streak >= 5 && !temBadge('streak_5')) {
        adicionarBadge('streak_5', '5 Dias de Streak', '🔥');
    }
}

function verificarBadgeSimuladoExcelente() {
    // Verificado após cada simulado
}

function adicionarBadge(id, nome, icone) {
    if (!temBadge(id)) {
        estadoApp.usuario.badges.push({ id, nome, icone, data: new Date().toISOString() });
        mostrarNotificacao(`🏆 Nova Conquista: ${nome} `);
        salvarDados();
    }
}

function temBadge(id) {
    return estadoApp.usuario.badges.some(badge => badge.id === id);
}

// ============================================================
// ATUALIZAR INTERFACE
// ============================================================

function atualizarUI() {
    // Atualizar XP, Nível, Streak na tela inicial
    document.getElementById('xp-total').textContent = estadoApp.usuario.xp;
    document.getElementById('nivel-atual').textContent = estadoApp.usuario.nivel;
    document.getElementById('streak-dias').textContent = estadoApp.usuario.streak;

    // Atualizar barra de progresso
    const progresso = calcularProgressoNivel();
    document.getElementById('barra-xp').style.width = `${progresso}% `;
    document.getElementById('xp-proximo').textContent = calcularXPProximoNivel() - estadoApp.usuario.xp;

    // Carregamento concluído
    console.log("App iniciado com sucesso (v2.0 Hacker Mode)");
}

// ============================================================
// NAVEGAÇÃO ENTRE TELAS
// ============================================================

function mostrarTela(nomeTela) {
    // Ocultar todas as telas
    document.querySelectorAll('.tela').forEach(tela => {
        tela.classList.remove('ativa');
        tela.classList.add('escondido'); // Garantir que fiquem escondidas
    });

    // Mostrar tela solicitada
    const telaAlvo = document.getElementById(nomeTela);
    if (telaAlvo) {
        telaAlvo.classList.add('ativa');
        telaAlvo.classList.remove('escondido'); // Crucial: remover o modificador !important
    } else {
        console.error("Tela inexistente:", nomeTela);
    }

    // Atualizar dados específicos da tela
    if (nomeTela === 'estatisticas') {
        atualizarTelaEstatisticas();
    } else if (nomeTela === 'revisao') {
        carregarRevisao();
    }
}

// ============================================================
// EVENT LISTENERS
// ============================================================

function configurarEventListeners() {
    // Botões do menu principal
    document.querySelectorAll('.btn-menu').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Use currentTarget to ensure we read the dataset from the button itself, not a nested element
            const tela = e.currentTarget.dataset.tela;
            // Somente chama mostrarTela se um destino (tela) foi definido via data-tela. Isso
            // evita interferir em botões que abrem módulos avançados (Terminal Avançado, OWASP ZAP)
            if (tela) {
                mostrarTela(tela);
            }
        });
    });

    // Botões voltar
    document.querySelectorAll('.btn-voltar').forEach(btn => {
        btn.addEventListener('click', () => {
            mostrarTela('tela-inicial');
            limparSessao();
        });
    });

    // Toggle tema
    document.getElementById('btn-toggle-tema').addEventListener('click', alternarTema);
    document.getElementById('btn-hacker').addEventListener('click', toggleHackerMode);

    // Carregar modo hacker salvo
    if (localStorage.getItem('copciber_hacker') === 'true') {
        document.body.classList.add('hacker');
    }

    // Estudo por módulo
    document.querySelectorAll('.btn-categoria').forEach(btn => {
        btn.addEventListener('click', () => {
            // Usar 'btn' diretamente é mais seguro que e.target
            const categoria = btn.dataset.categoria;
            console.log("Clicou categoria:", categoria);
            iniciarEstudoCategoria(categoria);
        });
    });

    // Botão próxima questão (estudo)
    const btnProxima = document.getElementById('btn-proxima');
    if (btnProxima) {
        btnProxima.addEventListener('click', proximaQuestaoEstudo);
    }

    // Simulado
    const btnIniciarSimulado = document.getElementById('btn-iniciar-simulado');
    if (btnIniciarSimulado) {
        btnIniciarSimulado.addEventListener('click', iniciarSimulado);
    }

    const btnResponderSim = document.getElementById('btn-responder-sim');
    if (btnResponderSim) {
        btnResponderSim.addEventListener('click', responderQuestaoSimulado);
    }

    // Botão nova tentativa
    const btnNovoSimulado = document.getElementById('btn-novo-simulado');
    if (btnNovoSimulado) {
        btnNovoSimulado.addEventListener('click', () => {
            document.getElementById('resultado-simulado').classList.add('escondido');
            document.getElementById('inicio-simulado').classList.remove('escondido');
        });
    }

    // Toggle Nível
    document.querySelectorAll('.btn-nivel').forEach(btn => {
        btn.addEventListener('click', (e) => {
            alternarNivel(e.target.dataset.nivel);
        });
    });

    // Terminal Input
    const inputTerminal = document.getElementById('input-comando');
    if (inputTerminal) {
        inputTerminal.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                processarComando(inputTerminal.value);
                inputTerminal.value = '';
            }
        });
    }

    // Módulos avançados: Terminal Avançado e OWASP ZAP
    const btnTerminalAvancado = document.getElementById('btn-terminal-avancado');
    if (btnTerminalAvancado) {
        btnTerminalAvancado.addEventListener('click', () => {
            // Abrir em nova aba a versão completa do simulador de terminal
            window.open('terminal_completo.html', '_blank');
        });
    }
    const btnOwaspZap = document.getElementById('btn-owasp-zap');
    if (btnOwaspZap) {
        btnOwaspZap.addEventListener('click', () => {
            // Abrir em nova aba o simulador OWASP ZAP detalhado
            window.open('owasp_zap_simulator.html', '_blank');
        });
    }
}

// ============================================================
// TEMA CLARO/ESCURO
// ============================================================

function alternarTema() {
    const body = document.body;
    const btnTema = document.getElementById('btn-toggle-tema');

    if (body.hasAttribute('data-tema')) {
        body.removeAttribute('data-tema');
        btnTema.textContent = '🌙';
        localStorage.setItem('copciber_tema', 'escuro');
    } else {
        body.setAttribute('data-tema', 'claro');
        btnTema.textContent = '☀️';
        localStorage.setItem('copciber_tema', 'claro');
    }
}

// Carregar tema salvo
const temaSalvo = localStorage.getItem('copciber_tema');
if (temaSalvo === 'claro') {
    document.body.setAttribute('data-tema', 'claro');
    document.getElementById('btn-toggle-tema').textContent = '☀️';
}

// ============================================================
// SELETOR DE NÍVEL
// ============================================================

function alternarNivel(nivel) {
    estadoApp.nivelEstudo = nivel;

    // Atualizar visual dos botões
    document.querySelectorAll('.btn-nivel').forEach(btn => {
        if (btn.dataset.nivel === nivel) {
            btn.classList.add('ativo');
        } else {
            btn.classList.remove('ativo');
        }
    });

    console.log("Nível de estudo alterado para:", nivel);
    mostrarNotificacao(`Modo de Estudo: ${nivel === 'base' ? 'Estudo Base' : 'Tropa de Elite'}`);
}

// ============================================================
// ESTUDO POR MÓDULO
// ============================================================

function iniciarEstudoCategoria(categoria) {
    console.log("Iniciando categoria:", categoria);

    if (!questoes || questoes.length === 0) {
        alert("Erro: Banco de questões vazio!");
        return;
    }

    estadoApp.sessaoAtual.tipo = 'estudo';
    estadoApp.sessaoAtual.categoria = categoria;
    estadoApp.sessaoAtual.indiceAtual = 0;
    estadoApp.sessaoAtual.respostas = [];

    // Filtrar questões da categoria
    // Filtrar questões da categoria e do nível selecionado
    const questoesCategoria = questoes.filter(q => q.categoria === categoria);

    // Filtrar por nível (base ou elite)
    estadoApp.sessaoAtual.questoesAtuais = questoesCategoria.filter(q => q.nivel === estadoApp.nivelEstudo);

    // Fallback: Se não houver questões de elite nesta categoria, avisar
    if (estadoApp.nivelEstudo === 'elite' && estadoApp.sessaoAtual.questoesAtuais.length === 0) {
        alert("Ainda não há missões de Elite para esta categoria. Redirecionando para a base.");
        alternarNivel('base');
        return;
    }
    console.log("Questões encontradas:", estadoApp.sessaoAtual.questoesAtuais.length);

    if (estadoApp.sessaoAtual.questoesAtuais.length === 0) {
        alert("Nenhuma questão encontrada para a categoria: " + categoria);
        return;
    }

    // Embaralhar questões
    embaralharArray(estadoApp.sessaoAtual.questoesAtuais);

    // Mudar para a tela de questão usando a função centralizada
    mostrarTela('area-questao');
    document.getElementById('selecao-categoria').classList.remove('ativa');

    // Mostrar primeira questão
    mostrarQuestaoEstudo();
}

function mostrarQuestaoEstudo() {
    const questao = estadoApp.sessaoAtual.questoesAtuais[estadoApp.sessaoAtual.indiceAtual];

    // Atualizar informações
    document.getElementById('numero-questao').textContent =
        `Questão ${estadoApp.sessaoAtual.indiceAtual + 1} de ${estadoApp.sessaoAtual.questoesAtuais.length} `;
    document.getElementById('categoria-atual').textContent =
        mapearNomeCategoria(estadoApp.sessaoAtual.categoria);

    // Mostrar enunciado
    document.getElementById('enunciado-questao').textContent = questao.enunciado;

    // Criar alternativas
    const container = document.getElementById('alternativas-container');
    container.innerHTML = '';

    questao.alternativas.forEach((alt, index) => {
        const div = document.createElement('div');
        div.className = 'alternativa';
        div.textContent = alt;
        div.dataset.index = index;
        div.addEventListener('click', () => selecionarAlternativa(div, index));
        container.appendChild(div);
    });

    // Ocultar feedback
    document.getElementById('feedback-resposta').classList.add('escondido');
}

function selecionarAlternativa(elemento, index) {
    // Remover seleção anterior
    document.querySelectorAll('#alternativas-container .alternativa').forEach(alt => {
        alt.classList.remove('selecionada');
    });

    // Selecionar alternativa clicada
    elemento.classList.add('selecionada');
    playSound('click');

    // Verificar resposta
    verificarRespostaEstudo(index);
}

function verificarRespostaEstudo(respostaUsuario) {
    const questao = estadoApp.sessaoAtual.questoesAtuais[estadoApp.sessaoAtual.indiceAtual];
    const correto = respostaUsuario === questao.respostaCorreta;

    // Desabilitar alternativas
    document.querySelectorAll('#alternativas-container .alternativa').forEach((alt, idx) => {
        alt.classList.add('desabilitada');
        if (idx === questao.respostaCorreta) {
            alt.classList.add('correta');
        } else if (idx === respostaUsuario && !correto) {
            alt.classList.add('incorreta');
        }
    });

    // Registrar resposta
    registrarResposta(questao.id, questao.categoria, correto);

    // Adicionar XP
    if (correto) {
        adicionarXP(10);
        playSound('correct');
    } else {
        adicionarXP(5);
        playSound('error');
    }

    // Mostrar feedback
    const feedbackDiv = document.getElementById('feedback-resposta');
    feedbackDiv.classList.remove('escondido', 'acerto', 'erro');
    feedbackDiv.classList.add(correto ? 'acerto' : 'erro');

    document.getElementById('feedback-icone').textContent = correto ? '✅' : '❌';
    document.getElementById('feedback-texto').textContent = correto ? 'Resposta Correta!' : 'Resposta Incorreta';
    document.getElementById('explicacao-questao').textContent = questao.explicacao;

    // Incrementar questões respondidas
    estadoApp.usuario.questoesRespondidas++;
    verificarBadges();
    salvarDados();
}

function proximaQuestaoEstudo() {
    estadoApp.sessaoAtual.indiceAtual++;

    if (estadoApp.sessaoAtual.indiceAtual < estadoApp.sessaoAtual.questoesAtuais.length) {
        mostrarQuestaoEstudo();
    } else {
        // Finalizar estudo
        mostrarNotificacao('🎉 Você completou todas as questões desta categoria!');
        mostrarTela('tela-inicial');
        limparSessao();
    }
}

// ============================================================
// SIMULADO
// ============================================================

function iniciarSimulado() {
    estadoApp.sessaoAtual.tipo = 'simulado';
    estadoApp.sessaoAtual.indiceAtual = 0;
    estadoApp.sessaoAtual.respostas = [];

    // Selecionar 50 questões aleatórias (10 de cada categoria)
    const questoesPorCategoria = {
        redes: questoes.filter(q => q.categoria === 'redes'),
        protocolos: questoes.filter(q => q.categoria === 'protocolos'),
        criptografia: questoes.filter(q => q.categoria === 'criptografia'),
        sistemas: questoes.filter(q => q.categoria === 'sistemas'),
        ingles: questoes.filter(q => q.categoria === 'ingles')
    };

    estadoApp.sessaoAtual.questoesAtuais = [];

    Object.values(questoesPorCategoria).forEach(categoriaQuestoes => {
        embaralharArray(categoriaQuestoes);
        estadoApp.sessaoAtual.questoesAtuais.push(...categoriaQuestoes.slice(0, 10));
    });

    // Embaralhar ordem final
    embaralharArray(estadoApp.sessaoAtual.questoesAtuais);

    // Mudar para tela do simulado
    mostrarTela('area-simulado');

    // Mostrar primeira questão
    mostrarQuestaoSimulado();
}

function mostrarQuestaoSimulado() {
    const questao = estadoApp.sessaoAtual.questoesAtuais[estadoApp.sessaoAtual.indiceAtual];

    // Atualizar informações
    document.getElementById('numero-questao-sim').textContent =
        `Questão ${estadoApp.sessaoAtual.indiceAtual + 1} de 50`;
    document.getElementById('categoria-atual-sim').textContent =
        mapearNomeCategoria(questao.categoria);

    // Mostrar enunciado
    document.getElementById('enunciado-questao-sim').textContent = questao.enunciado;

    // Criar alternativas
    const container = document.getElementById('alternativas-container-sim');
    container.innerHTML = '';

    questao.alternativas.forEach((alt, index) => {
        const div = document.createElement('div');
        div.className = 'alternativa';
        div.textContent = alt;
        div.dataset.index = index;
        div.addEventListener('click', () => selecionarAlternativaSimulado(div, index));
        container.appendChild(div);
    });

    // Ocultar botão responder
    document.getElementById('btn-responder-sim').classList.add('escondido');
}

function selecionarAlternativaSimulado(elemento, index) {
    // Remover seleção anterior
    document.querySelectorAll('#alternativas-container-sim .alternativa').forEach(alt => {
        alt.classList.remove('selecionada');
    });

    // Selecionar alternativa clicada
    elemento.classList.add('selecionada');

    // Mostrar botão responder
    document.getElementById('btn-responder-sim').classList.remove('escondido');

    // Armazenar resposta temporária
    estadoApp.sessaoAtual.respostaTemp = index;
}

function responderQuestaoSimulado() {
    const questao = estadoApp.sessaoAtual.questoesAtuais[estadoApp.sessaoAtual.indiceAtual];
    const respostaUsuario = estadoApp.sessaoAtual.respostaTemp;

    if (respostaUsuario === undefined) return;

    const correto = respostaUsuario === questao.respostaCorreta;

    // Registrar resposta
    estadoApp.sessaoAtual.respostas.push({
        questaoId: questao.id,
        categoria: questao.categoria,
        respostaUsuario,
        respostaCorreta: questao.respostaCorreta,
        correto
    });

    // Próxima questão
    estadoApp.sessaoAtual.indiceAtual++;
    delete estadoApp.sessaoAtual.respostaTemp;

    if (estadoApp.sessaoAtual.indiceAtual < 50) {
        mostrarQuestaoSimulado();
    } else {
        finalizarSimulado();
    }
}

function finalizarSimulado() {
    // Ocultar área de questões
    document.getElementById('area-simulado').classList.add('escondido');

    // Calcular resultado
    const acertos = estadoApp.sessaoAtual.respostas.filter(r => r.correto).length;
    const nota = ((acertos / 50) * 100).toFixed(1);

    // Registrar simulado
    estadoApp.usuario.simuladosRealizados++;
    estadoApp.usuario.questoesRespondidas += 50;

    // Verificar badge 80%
    if (parseFloat(nota) >= 80) {
        if (!temBadge('simulado_80')) {
            adicionarBadge('simulado_80', 'Simulado com >80%', '🌟');
        }
    }

    // Atualizar estatísticas
    estadoApp.sessaoAtual.respostas.forEach(r => {
        registrarResposta(r.questaoId, r.categoria, r.correto);
    });

    verificarBadges();
    salvarDados();

    // Mostrar resultado
    document.getElementById('nota-simulado').textContent = `${nota}% `;
    document.getElementById('nota-simulado').style.color =
        parseFloat(nota) >= 70 ? 'var(--cor-sucesso)' : 'var(--cor-erro)';

    // Acertos por categoria
    const acertosCategoria = {};
    estadoApp.sessaoAtual.respostas.forEach(r => {
        if (!acertosCategoria[r.categoria]) {
            acertosCategoria[r.categoria] = { acertos: 0, total: 0 };
        }
        acertosCategoria[r.categoria].total++;
        if (r.correto) acertosCategoria[r.categoria].acertos++;
    });

    const containerCategorias = document.getElementById('acertos-categoria');
    containerCategorias.innerHTML = '<h4>Desempenho por Categoria:</h4>';

    Object.keys(acertosCategoria).forEach(cat => {
        const stat = acertosCategoria[cat];
        const percentual = ((stat.acertos / stat.total) * 100).toFixed(0);
        const div = document.createElement('div');
        div.className = 'categoria-stat';
        div.innerHTML = `
    < span > ${mapearNomeCategoria(cat)}</span >
        <span>${stat.acertos}/${stat.total} (${percentual}%)</span>
`;
        containerCategorias.appendChild(div);
    });

    // Questões erradas
    const erros = estadoApp.sessaoAtual.respostas.filter(r => !r.correto);
    const containerErros = document.getElementById('erros-detalhados');
    containerErros.innerHTML = '<h4>Questões Erradas:</h4>';

    if (erros.length === 0) {
        containerErros.innerHTML += '<p>🎉 Parabéns! Você acertou todas as questões!</p>';
    } else {
        erros.forEach((erro, index) => {
            const questao = questoes.find(q => q.id === erro.questaoId);
            const div = document.createElement('div');
            div.className = 'erro-item';
            div.innerHTML = `
    < p > <strong>Questão ${index + 1}:</strong> ${questao.enunciado.substring(0, 100)}...</p >
                <p><strong>Sua resposta:</strong> ${questao.alternativas[erro.respostaUsuario]}</p>
                <p><strong>Resposta correta:</strong> ${questao.alternativas[erro.respostaCorreta]}</p>
                <p><strong>Explicação:</strong> ${questao.explicacao.substring(0, 200)}...</p>
`;
            containerErros.appendChild(div);
        });
    }

    // Mostrar resultado
    document.getElementById('resultado-simulado').classList.remove('escondido');
}

// ============================================================
// REVISÃO DOS ERROS
// ============================================================

function carregarRevisao() {
    // Identificar questões mais erradas
    const questoesParaRevisar = [];

    Object.keys(estadoApp.estatisticas).forEach(categoria => {
        const stats = estadoApp.estatisticas[categoria];
        stats.questoes.forEach(q => {
            if (q.erros > 0) {
                questoesParaRevisar.push({
                    ...questoes.find(questao => questao.id === q.id),
                    indiceErro: q.erros / (q.acertos + q.erros)
                });
            }
        });
    });

    if (questoesParaRevisar.length === 0) {
        document.getElementById('lista-erros').innerHTML =
            '<p class="texto-centralizado">🎉 Você ainda não errou nenhuma questão! Continue estudando.</p>';
        return;
    }

    // Ordenar por índice de erro (decrescente)
    questoesParaRevisar.sort((a, b) => b.indiceErro - a.indiceErro);

    // Mostrar lista
    const container = document.getElementById('lista-erros');
    container.innerHTML = '<h3>Questões para Revisar (ordenadas por dificuldade):</h3>';

    questoesParaRevisar.slice(0, 20).forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'item-erro';
        div.innerHTML = `
    < p > <strong>${index + 1}. ${mapearNomeCategoria(q.categoria)}</strong></p >
            <p>${q.enunciado.substring(0, 100)}...</p>
            <p style="font-size: 0.85rem; color: var(--cor-erro);">
                Taxa de erro: ${(q.indiceErro * 100).toFixed(0)}%
            </p>
`;
        div.addEventListener('click', () => iniciarRevisaoQuestao(q));
        container.appendChild(div);
    });
}

function iniciarRevisaoQuestao(questao) {
    estadoApp.sessaoAtual.tipo = 'revisao';
    estadoApp.sessaoAtual.questoesAtuais = [questao];
    estadoApp.sessaoAtual.indiceAtual = 0;

    mostrarTela('area-revisao');

    mostrarQuestaoRevisao();
}

function mostrarQuestaoRevisao() {
    const questao = estadoApp.sessaoAtual.questoesAtuais[estadoApp.sessaoAtual.indiceAtual];

    document.getElementById('numero-questao-rev').textContent = 'Questão de Revisão';
    document.getElementById('categoria-atual-rev').textContent = mapearNomeCategoria(questao.categoria);
    document.getElementById('enunciado-questao-rev').textContent = questao.enunciado;

    const container = document.getElementById('alternativas-container-rev');
    container.innerHTML = '';

    questao.alternativas.forEach((alt, index) => {
        const div = document.createElement('div');
        div.className = 'alternativa';
        div.textContent = alt;
        div.dataset.index = index;
        div.addEventListener('click', () => selecionarAlternativaRevisao(div, index));
        container.appendChild(div);
    });

    document.getElementById('feedback-resposta-rev').classList.add('escondido');
}

function selecionarAlternativaRevisao(elemento, index) {
    document.querySelectorAll('#alternativas-container-rev .alternativa').forEach(alt => {
        alt.classList.remove('selecionada');
    });

    elemento.classList.add('selecionada');
    verificarRespostaRevisao(index);
}

function verificarRespostaRevisao(respostaUsuario) {
    const questao = estadoApp.sessaoAtual.questoesAtuais[estadoApp.sessaoAtual.indiceAtual];
    const correto = respostaUsuario === questao.respostaCorreta;

    document.querySelectorAll('#alternativas-container-rev .alternativa').forEach((alt, idx) => {
        alt.classList.add('desabilitada');
        if (idx === questao.respostaCorreta) {
            alt.classList.add('correta');
        } else if (idx === respostaUsuario && !correto) {
            alt.classList.add('incorreta');
        }
    });

    registrarResposta(questao.id, questao.categoria, correto);

    if (correto) {
        adicionarXP(10);
    } else {
        adicionarXP(5);
    }

    const feedbackDiv = document.getElementById('feedback-resposta-rev');
    feedbackDiv.classList.remove('escondido', 'acerto', 'erro');
    feedbackDiv.classList.add(correto ? 'acerto' : 'erro');

    document.getElementById('feedback-icone-rev').textContent = correto ? '✅' : '❌';
    document.getElementById('feedback-texto-rev').textContent = correto ? 'Resposta Correta!' : 'Resposta Incorreta';
    document.getElementById('explicacao-questao-rev').textContent = questao.explicacao;

    estadoApp.usuario.questoesRespondidas++;
    salvarDados();
}

function proximaQuestaoRevisao() {
    mostrarTela('revisao'); // Retorna para a lista de erros
    // Não precisa esconder 'area-revisao' manualmente, mostrarTela faz isso
    carregarRevisao();
}
// ============================================================
// ESTATÍSTICAS
// ============================================================
function atualizarTelaEstatisticas() {
    // Estatísticas gerais
    document.getElementById('stat-xp').textContent = estadoApp.usuario.xp;
    document.getElementById('stat-nivel').textContent = estadoApp.usuario.nivel;
    document.getElementById('stat-streak').textContent = estadoApp.usuario.streak;
    document.getElementById('stat-questoes').textContent = estadoApp.usuario.questoesRespondidas;
    document.getElementById('stat-simulados').textContent = estadoApp.usuario.simuladosRealizados;
    // Desempenho por categoria
    const containerDesempenho = document.getElementById('desempenho-categorias');
    containerDesempenho.innerHTML = '';

    Object.keys(estadoApp.estatisticas).forEach(cat => {
        const stats = estadoApp.estatisticas[cat];
        const total = stats.acertos + stats.erros;
        const percentual = total > 0 ? ((stats.acertos / total) * 100).toFixed(1) : 0;

        const div = document.createElement('div');
        div.className = 'categoria-desempenho';
        div.innerHTML = `
    < div class="categoria-nome" > ${mapearNomeCategoria(cat)}</div >
        <div class="categoria-progresso">
            <span>${stats.acertos}/${total}</span>
            <div class="barra-categoria">
                <div class="barra-categoria-preenchida" style="width: ${percentual}%"></div>
            </div>
            <span>${percentual}%</span>
        </div>
`;
        containerDesempenho.appendChild(div);
    });

    // Badges
    const containerBadges = document.getElementById('badges-lista');
    containerBadges.innerHTML = '';

    const badgesPossiveis = [
        { id: 'primeiro_simulado', nome: 'Primeiro Simulado', icone: '📝', descricao: 'Complete seu primeiro simulado' },
        { id: '100_questoes', nome: '100 Questões', icone: '📚', descricao: 'Responda 100 questões' },
        { id: 'streak_5', nome: '5 Dias de Streak', icone: '🔥', descricao: 'Mantenha 5 dias consecutivos' },
        { id: 'simulado_80', nome: 'Simulado Excelente', icone: '🌟', descricao: 'Acerte >80% em um simulado' }
    ];

    badgesPossiveis.forEach(badge => {
        const desbloqueado = temBadge(badge.id);
        const div = document.createElement('div');
        div.className = `badge ${desbloqueado ? 'desbloqueado' : ''} `;
        div.innerHTML = `
    < span class="badge-icone" > ${badge.icone}</span >
        <span class="badge-nome">${badge.nome}</span>
        <span class="badge-descricao">${badge.descricao}</span>
`;
        containerBadges.appendChild(div);
    });
}
// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================
function registrarResposta(questaoId, categoria, correto) {
    const stats = estadoApp.estatisticas[categoria];
    if (correto) {
        stats.acertos++;
    } else {
        stats.erros++;
    }

    // Registrar questão específica
    let questaoStat = stats.questoes.find(q => q.id === questaoId);
    if (!questaoStat) {
        questaoStat = { id: questaoId, acertos: 0, erros: 0 };
        stats.questoes.push(questaoStat);
    }

    if (correto) {
        questaoStat.acertos++;
    } else {
        questaoStat.erros++;
    }

    salvarDados();
}
function mapearNomeCategoria(categoria) {
    const mapa = {
        redes: 'Redes de Computadores',
        protocolos: 'Protocolos de Comunicação',
        criptografia: 'Noções de Criptografia',
        sistemas: 'Sistemas Operacionais',
        ingles: 'Inglês Técnico',
        // Nome amigável para a nova categoria de Python
        python: 'Python (Pareto)'
    };
    return mapa[categoria] || categoria;
}
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function limparSessao() {
    estadoApp.sessaoAtual = {
        tipo: null,
        categoria: null,
        questoesAtuais: [],
        indiceAtual: 0,
        respostas: []
    };
    // Resetar UI
    const selCat = document.getElementById('selecao-categoria');
    if (selCat) selCat.classList.remove('escondido');

    const areaQ = document.getElementById('area-questao');
    if (areaQ) areaQ.classList.add('escondido');

    const areaRev = document.getElementById('area-revisao');
    if (areaRev) areaRev.classList.add('escondido');

    const listaErros = document.getElementById('lista-erros');
    if (listaErros) listaErros.classList.remove('escondido');
}
function mostrarNotificacao(mensagem) {
    // Criar notificação simples
    const notif = document.createElement('div');
    notif.style.cssText = "position: fixed; top: 20px; right: 20px; background: var(--cor-primaria); color: white; padding: 15px 20px; border-radius: 8px; box-shadow: 0 4px 12px var(--cor-sombra); z-index: 10000; animation: fadeIn 0.3s ease-in;";
    notif.textContent = mensagem;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}
// ============================================================
// LABORATÓRIO PRÁTICO (TERMINAL)
// ============================================================

let cenarioAtual = null;

function iniciarLaboratorio() {
    if (!cenarios || cenarios.length === 0) {
        alert("Módulo Prático carregando...");
        return;
    }

    // Selecionar cenário aleatório ou o primeiro
    const index = Math.floor(Math.random() * cenarios.length);
    cenarioAtual = cenarios[index];

    mostrarTela('area-pratica');

    // Limpar terminal
    const corpo = document.getElementById('terminal-body');
    // Manter apenas estrutura base, limpar outputs anteriores se necessário
    // Por simplicidade, vamos reconstruir o DOM básico do output
    const outputs = corpo.getElementsByClassName('linha-output');
    while (outputs.length > 3) { // Manter as 3 primeiras mensagens de boas-vindas
        outputs[3].remove();
    }

    // Exibir cenário
    document.getElementById('cenario-atual-desc').innerHTML = `
        <br>
        <span style="color: #00ffff">>>> MISSÃO: ${cenarioAtual.titulo} <<<</span><br>
        ${cenarioAtual.descricao}<br>
        <span style="color: #aaa">Dica: Use comandos Linux básicos.</span>
        <br>
    `;

    document.getElementById('input-comando').focus();
}

function processarComando(cmd) {
    const limpo = cmd.trim().toLowerCase();
    imprimirTerminal(`root@kali:~# ${cmd}`, 'white');

    if (limpo === '') return;

    if (limpo === 'clear') {
        const corpo = document.getElementById('terminal-body');
        const outputs = Array.from(corpo.getElementsByClassName('linha-output'));
        outputs.forEach(el => el.remove());
        return;
    }

    if (limpo === 'help') {
        imprimirTerminal('Comandos disponíveis: help, clear, ls, ps, netstat, service, chmod, cat');
        return;
    }

    // Lógica do cenário
    if (!cenarioAtual) return;

    // Verificar solução
    if (limpo === cenarioAtual.simulacao.solucao ||
        (cenarioAtual.simulacao.comandosValidos && cenarioAtual.simulacao.comandosValidos.includes(limpo))) {

        playSound('correct');
        imprimirTerminal('>>> SUCESSO! Ação correta executada.', '#00ff00');
        imprimirTerminal(`Resultado: O problema foi resolvido. +50 XP`, '#00ff00');
        adicionarXP(50);

        setTimeout(() => {
            alert('Missão Prática Concluída!');
            mostrarTela('menu-principal');
        }, 2000);
        return;
    }

    // Comandos genéricos mockados para dar "vida" ao terminal
    if (limpo.startsWith('ls')) {
        imprimirTerminal('bin   dev  home  lib64  mnt  proc  run   srv  tmp  var\nboot  etc  lib   media  opt  root  sbin  sys  usr');
    } else if (limpo.startsWith('ps')) {
        imprimirTerminal('  PID TTY          TIME CMD\n    1 ?        00:00:02 systemd\n 1342 pts/0    00:00:00 bash\n 1350 pts/0    00:00:00 ps');
    } else if (limpo.startsWith('netstat')) {
        imprimirTerminal('Active Internet connections (servers and established)\nProto Recv-Q Send-Q Local Address           Foreign Address         State\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN\ntcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN');
    } else if (limpo.startsWith('service')) {
        if (limpo.includes('status')) {
            if (cenarioAtual.id === 'lab-01' && limpo.includes('apache')) {
                imprimirTerminal('● apache2.service - The Apache HTTP Server\n   Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)\n   Active: inactive (dead)');
            } else {
                imprimirTerminal('Service is running.');
            }
        } else {
            imprimirTerminal('Access denied or invalid service.');
        }
    } else if (limpo.startsWith('cat')) {
        imprimirTerminal('Permission denied or file not found.');
    } else {
        imprimirTerminal(`bash: ${cmd}: command not found`, 'red');
        playSound('error');
    }

    // Auto-scroll
    const corpo = document.getElementById('terminal-body');
    corpo.scrollTop = corpo.scrollHeight;
}

function imprimirTerminal(texto, cor = '#00ff00') {
    const corpo = document.getElementById('terminal-body');
    const inputDiv = corpo.querySelector('.linha-input');

    const div = document.createElement('div');
    div.className = 'linha-output';
    div.style.color = cor;
    div.innerText = texto;

    corpo.insertBefore(div, inputDiv);
}

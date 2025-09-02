/* Poliane Aprende C — App core */
const $ = (sel, el=document) => el.querySelector(sel);
const $$ = (sel, el=document) => [...el.querySelectorAll(sel)];

const LS = {
  get(k, def=null){ try { return JSON.parse(localStorage.getItem(k) ?? JSON.stringify(def)); } catch(e){ return def; } },
  set(k, v){ localStorage.setItem(k, JSON.stringify(v)); }
};

const state = {
  view: "aulas",
  lessonPath: null, // { moduleIndex, lessonIndex }
  dark: true,
  startedAt: Date.now(),
  sessionSeconds: 0
};

function fmtMinutes(mins){ return `${Math.round(mins)} min`; }

function initTheme(){
  state.dark = LS.get("themeDark", true);
  document.body.classList.toggle("dark", state.dark);
  $("#themeSwitch").classList.toggle("active", state.dark);
}

function toggleTheme(){
  state.dark = !state.dark;
  document.body.classList.toggle("dark", state.dark);
  $("#themeSwitch").classList.toggle("active", state.dark);
  LS.set("themeDark", state.dark);
}

function navTo(view){
  state.view = view;
  $$(".section").forEach(s => s.classList.remove("active"));
  $(`#section-${view}`).classList.add("active");
  $$(".bottom-nav button").forEach(b => b.classList.remove("active"));
  $(`.bottom-nav button[data-view='${view}']`).classList.add("active");
  if(view === "progresso") renderProgress();
  if(view === "conquistas") renderAchievements();
  if(view === "ajuda") renderHelp();
}

function saveProgress(key, value){
  const prog = LS.get("progress", {});
  prog[key] = value;
  LS.set("progress", prog);
}

function getProgress(key, def){
  const prog = LS.get("progress", {});
  return (key in prog) ? prog[key] : def;
}

function totalLessons(){
  return CONTENT.reduce((acc, m) => acc + m.lessons.length, 0);
}

function completedLessonsCount(){
  const prog = LS.get("progress", {});
  return Object.keys(prog).filter(k => k.startsWith("done:") && prog[k]).length;
}

function renderAulas(){
  const wrap = $("#modules");
  wrap.innerHTML = "";
  CONTENT.forEach((mod, mi) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="row">
        <div>
          <h2>${mod.title}</h2>
          <div class="badge"><span style="width:10px;height:10px;border-radius:50%;background:${mod.color};display:inline-block"></span> ${mod.lessons.length} lições</div>
        </div>
        <button class="btn" style="max-width:140px" data-mi="${mi}" data-open="mod">Abrir</button>
      </div>
      <div class="list" id="lessons-${mi}" style="margin-top:10px;display:none"></div>
    `;
    wrap.appendChild(card);

    card.querySelector("[data-open='mod']").addEventListener("click", () => {
      const list = $(`#lessons-${mi}`);
      list.style.display = list.style.display === "none" ? "grid" : "none";
      list.innerHTML = "";
      mod.lessons.forEach((ls, li) => {
        const done = getProgress(`done:${mod.id}:${ls.id}`, false);
        const item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
          <div class="row">
            <div class="title">Lição ${ls.id}: ${ls.title}</div>
            <div class="meta">${ls.duration} min ${done ? " · ✅" : ""}</div>
          </div>
          <div class="row">
            <button class="btn btn-primary" data-mi="${mi}" data-li="${li}" data-open="lesson">Estudar</button>
            <button class="btn" data-mi="${mi}" data-li="${li}" data-open="preview">Códigos</button>
          </div>
        `;
        list.appendChild(item);

        item.querySelector("[data-open='lesson']").addEventListener("click", () => openLesson(mi, li));
        item.querySelector("[data-open='preview']").addEventListener("click", () => previewCode(mi, li));
      });
    });
  });
}

function previewCode(mi, li){
  const mod = CONTENT[mi], ls = mod.lessons[li];
  const box = $("#previewBox");
  $("#previewTitle").textContent = `Lição ${ls.id} — Códigos`;
  $("#previewSnippet").textContent = ls.steps.code.snippet;
  $("#previewFull").textContent = ls.c_code_full;
  $("#previewModal").style.display = "block";
}

function closePreview(){ $("#previewModal").style.display = "none"; }

function copyText(txt){
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(txt).then(() => toast("Código copiado 📋"));
  } else {
    const ta = document.createElement("textarea");
    ta.value = txt; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); toast("Código copiado 📋"); } catch(e){}
    document.body.removeChild(ta);
  }
}

function openCxxdroid(code){
  // Observação: alguns aparelhos/versões não aceitam payload grande no esquema.
  // Oferecemos o deep link básico + cópia e instruções.
  const url = "cxxdroid://";
  try { window.location.href = url; } catch(e){}
  copyText(code);
  toast("Abri o Cxxdroid (se instalado) e copiei o código. Cole e execute.");
}

function openReplit(code){
  // Fallback: abre Replit C; se o code param não funcionar, usuário cola manualmente.
  window.open("https://replit.com/languages/c", "_blank");
  copyText(code);
  toast("Abri o Replit e copiei o código. Cole no editor.");
}

function shareWhatsApp(text){
  const wa = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(wa, "_blank");
}

function webShare(text){
  if (navigator.share) {
    navigator.share({ text }).catch(()=>{});
  } else {
    shareWhatsApp(text);
  }
}

function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(()=> t.style.display = "none", 2200);
}

function openLesson(mi, li){
  state.lessonPath = {mi, li};
  const mod = CONTENT[mi], ls = mod.lessons[li];
  navTo("lesson");
  renderLesson(mod, ls);
  saveProgress("lastOpened", {mi, li, ts: Date.now()});
}

function stepKey(modId, lsId){ return `step:${modId}:${lsId}`; }

function renderLesson(mod, ls){
  $("#lessonTitle").textContent = `Lição ${ls.id}: ${ls.title}`;

  const currentStep = getProgress(stepKey(mod.id, ls.id), 1);
  $("#stepIndicator").textContent = `Passo ${currentStep}/7`;

  const stepsWrap = $("#lessonSteps");
  stepsWrap.innerHTML = "";

  const steps = [
    { key: "acolhimento", label: "Acolhimento empático", render: () => `<p>${ls.steps.acolhimento}</p>` },
    { key: "contexto", label: "Contexto cotidiano", render: () => `<p>${ls.steps.contexto}</p>` },
    { key: "analogia", label: "Analogia materna", render: () => `<p>${ls.steps.analogia}</p>` },
    { key: "visual", label: "Tutorial visual", render: () => renderVisual(ls.steps.visual) },
    { key: "code", label: "Código C explicado", render: () => renderCode(ls.steps.code, ls.c_code_full) },
    { key: "exercise", label: "Exercício guiado", render: () => renderExercise(mod, ls) },
    { key: "celebracao", label: "Celebração e conexão", render: () => `<p>${ls.steps.celebracao}</p>` }
  ];

  const stepIndex = currentStep - 1;
  const active = steps[stepIndex];

  stepsWrap.innerHTML = `
    <div class="card">
      <h3>${active.label}</h3>
      <div>${active.render()}</div>
    </div>
    <div class="grid cols-2" style="margin-top:10px">
      <button class="btn" id="btnPrev" ${currentStep===1?"disabled":""}>Voltar</button>
      <button class="btn btn-primary" id="btnNext">${currentStep===7?"Concluir lição":"Próximo"}</button>
    </div>
    <div style="margin-top:10px">
      <button class="btn btn-warning" id="btnSkip">Pular etapa</button>
    </div>
  `;

  $("#btnPrev").addEventListener("click", () => setStep(mod, ls, Math.max(1, currentStep-1)));
  $("#btnNext").addEventListener("click", () => {
    if(currentStep === 7){
      // finalize lesson
      saveProgress(`done:${mod.id}:${ls.id}`, true);
      saveProgress(stepKey(mod.id, ls.id), 1);
      computeFlags();
      toast("Lição concluída! 🎉");
      navTo("aulas");
      renderAulas();
    } else {
      setStep(mod, ls, currentStep+1);
    }
  });
  $("#btnSkip").addEventListener("click", () => {
    setStep(mod, ls, Math.min(7, currentStep+1));
  });
}

function setStep(mod, ls, n){
  saveProgress(stepKey(mod.id, ls.id), n);
  renderLesson(mod, ls);
}

function renderVisual(v){
  if(!v) return "<p>—</p>";
  if(v.type === "drawers"){
    return `
      <div class="flow">
        <div class="node">Gaveta: ${v.data[0]}</div>
        <div class="arrow">▼</div>
        <div class="node">Valor guardado</div>
        <button class="btn" id="btnVisualSwap">Trocar conteúdo</button>
        <small class="hint">Toque para simular trocar o valor da variável.</small>
      </div>
    `;
  }
  if(v.type === "if"){
    return `
      <div class="flow">
        <div class="node">Se (${v.data.cond})</div>
        <div class="arrow">▼</div>
        <div class="node" id="ifNode">${v.data.then}</div>
        <div class="row"><button class="btn" id="btnTrue">Verdadeiro</button><button class="btn" id="btnFalse">Falso</button></div>
      </div>
    `;
  }
  if(v.type === "ifchain"){
    return `<div class="flow">
      <div class="node">Condição 1: ${v.data[0]}</div>
      <div class="node">Condição 2: ${v.data[1]}</div>
      <div class="node">Senão: ${v.data[2]}</div>
      <small class="hint">Na prática, a primeira condição verdadeira vence.</small>
    </div>`;
  }
  if(v.type === "logic"){
    return `<div class="flow">
      <div class="node">Exemplo AND: ${v.data[0]}</div>
      <div class="node">Exemplo OR: ${v.data[1]}</div>
    </div>`;
  }
  if(v.type === "for"){
    const arr = [];
    for(let i=v.data.from; i<=v.data.to; i++){ arr.push(`${v.data.label} ${i}`); }
    return `<div class="flow"><div class="node">Loop:</div><div class="node">${arr.join(" → ")}</div></div>`;
  }
  if(v.type === "while"){
    return `<div class="flow"><div class="node">Enquanto (${v.data.condition})</div><div class="node">Executa passo</div></div>`;
  }
  if(v.type === "dowhile"){
    return `<div class="flow"><div class="node">Executa</div><div class="arrow">▼</div><div class="node">${v.data}</div></div>`;
  }
  if(v.type === "array"){
    return `<div class="flow"><div class="node">Lista:</div><div class="node">${v.data.join(" | ")}</div></div>`;
  }
  if(v.type === "bins"){
    return `<div class="flow"><div class="node">${v.data[0]}</div><div class="node">${v.data[1]}</div><div class="node">${v.data[2]}</div></div>`;
  }
  if(v.type === "cards"){
    return `<div class="grid cols-2">${v.data.map(x=>`<div class="item">${x}</div>`).join("")}</div>`;
  }
  if(v.type === "screen"){
    return `<div class="card"><div class="code">Theo tem 8 anos</div></div>`;
  }
  if(v.type === "timeline"){
    return `<div class="flow">${v.data.map(x=>`<div class="node">${x}</div>`).join('<div class="arrow">▼</div>')}</div>`;
  }
  return "<p>—</p>";
}

document.addEventListener("click", (e)=>{
  if(e.target && e.target.id === "btnVisualSwap"){
    e.target.previousElementSibling.previousElementSibling.textContent = "Novo valor na gaveta";
  }
  if(e.target && e.target.id === "btnTrue"){
    $("#ifNode").textContent = "Tocar música calma";
    $("#ifNode").classList.add("active");
  }
  if(e.target && e.target.id === "btnFalse"){
    $("#ifNode").textContent = "Seguir rotina";
    $("#ifNode").classList.add("active");
  }
});

function renderCode(codeObj, full){
  return `
    <div class="code" id="snippet">${codeObj.snippet}</div>
    <div class="inline-controls" style="margin-top:8px">
      <button class="btn" onclick="copyText($('#snippet').textContent)">Copiar</button>
      <button class="btn btn-primary" onclick="openCxxdroid(\`${full.replace(/`/g,"\\`")}\`)">Testar no Cxxdroid</button>
      <button class="btn" onclick="openReplit(\`${full.replace(/`/g,"\\`")}\`)">Abrir no Replit</button>
    </div>
    <div class="item" style="margin-top:10px"><div class="title">Linha a linha</div>${
      (codeObj.explain||[]).map(e=>`<p>• ${e}</p>`).join("")
    }</div>
  `;
}

function renderExercise(mod, ls){
  const ex = ls.steps.exercise;
  if(!ex) return "<p>—</p>";
  if(ex.type === "mcq"){
    const opts = ex.options.map((o,i)=>`
      <label class="item"><input type="radio" name="mcq" value="${i}"> ${o}</label>
    `).join("");
    return `
      <p>${ex.prompt}</p>
      <div class="list">${opts}</div>
      <button class="btn btn-success" onclick="gradeMCQ(${ex.answerIndex})">Verificar</button>
    `;
  }
  if(ex.type === "blanks"){
    const fields = ex.fields.map((f,i)=>`
      <label class="item">
        <div class="title">${f.label}</div>
        <input data-ix="${i}" type="text" placeholder="${f.placeholder}">
      </label>`).join("");
    return `
      <p>${ex.prompt}</p>
      <div class="list">${fields}</div>
      <button class="btn btn-success" onclick='gradeBlanks(${JSON.stringify(ex.fields.map(f=>f.answer))})'>Verificar</button>
      <small class="hint">Ex.: ${ex.solution_preview}</small>
    `;
  }
  if(ex.type === "codefill"){
    // Represent underscores in template as inputs
    const parts = ex.template.split("____");
    let html = `<div class="code">`;
    parts.forEach((p, i)=>{
      html += p;
      if(i < parts.length-1){
        html += `<input class="input inline" style="display:inline-block;width:auto;min-width:40px" data-ix="${i}" type="text">`;
      }
    });
    html += `</div>`;
    html += `<button class="btn btn-success" onclick='gradeBlanks(${JSON.stringify(ex.answers)})'>Verificar</button>`;
    return `<p>${ex.prompt}</p>${html}`;
  }
  if(ex.type === "affirm"){
    return `
      <label class="item">
        <input id="affirmCheck" type="checkbox"> ${ex.label || "Marque quando concluir"}
      </label>
      <button class="btn btn-success" onclick="confirmAffirm()">Registrar</button>
    `;
  }
  return "<p>—</p>";
}

function gradeMCQ(ansIndex){
  const picked = $$("input[name='mcq']").find(r=>r.checked);
  if(!picked){ toast("Escolha uma opção"); return; }
  if(Number(picked.value) === ansIndex){
    toast("Certa! 💚");
    markFirstWinIfNot();
  } else {
    toast("Quase lá, tente novamente");
  }
}

function gradeBlanks(answers){
  const inputs = $$("input[data-ix]");
  let ok = true;
  inputs.forEach((inp, i)=>{
    const got = (inp.value || "").trim();
    const expect = (answers[i] || "").trim();
    if(got !== expect){ ok = false; inp.style.borderColor = "var(--danger)"; }
    else { inp.style.borderColor = "var(--ok)"; }
  });
  if(ok){
    toast("Perfeito! ✅");
    markFirstWinIfNot();
  } else {
    toast("Revise as caixinhas em vermelho e tente outra vez");
  }
}

function confirmAffirm(){
  toast("Progresso registrado! 🌟");
  markFirstWinIfNot();
}

function markFirstWinIfNot(){
  const flags = LS.get("flags", {});
  if(!flags.first_code_run){
    flags.first_code_run = true;
    LS.set("flags", flags);
    toast("Conquista: Primeira Vitória! 🏅");
  }
}

function computeFlags(){
  // Módulos completos
  const flags = LS.get("flags", {});
  CONTENT.forEach(m => {
    const allDone = m.lessons.every(ls => getProgress(`done:${m.id}:${ls.id}`, false));
    flags[`module_${m.id}_done`] = allDone;
  });
  LS.set("flags", flags);
}

function renderProgress(){
  const total = totalLessons();
  const done = completedLessonsCount();
  const pct = Math.round(done/total*100);
  $("#progBar").style.width = pct + "%";
  $("#progLabel").textContent = `${done}/${total} lições (${pct}%)`;

  // Tempo investido
  const mins = (LS.get("minutesSpent", 0) || 0);
  $("#timeInvested").textContent = `${Math.round(mins)} minutos investidos no futuro do Theo`;

  // Frase motivacional
  $("#motivation").textContent = "Construindo ponte para nova vida — cada linha de código conta.";
}

function renderAchievements(){
  computeFlags();
  const list = $("#achList");
  list.innerHTML = "";
  const flags = LS.get("flags", {});
  const lastTs = LS.get("lastOpenedTs", Date.now());
  const now = new Date();
  const ctx = {
    nowHour: now.getHours(),
    daysSinceLast: Math.floor((Date.now()-lastTs)/86400000),
    flags
  };
  ACHIEVEMENTS.forEach(a => {
    let earned = false;
    if(a.check) earned = !!a.check(ctx);
    if(a.checkFlag) earned = !!flags[a.checkFlag];
    if(a.manual) earned = !!LS.get(`ach:${a.id}`, false);
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = `<div class="row"><div class="title">${a.name}</div><div class="meta">${earned?"🏅":"—"}</div></div><p>${a.desc}</p>`;
    if(a.manual && !earned){
      const btn = document.createElement("button");
      btn.className = "btn";
      btn.textContent = "Conquistei!";
      btn.addEventListener("click", ()=>{ LS.set(`ach:${a.id}`, true); renderAchievements(); });
      item.appendChild(btn);
    }
    list.appendChild(item);
  });
}

function renderHelp(){
  const wrap = $("#helpWrap");
  wrap.innerHTML = `
    <div class="card">
      <h2>Como instalar no Galaxy S23</h2>
      <ol>
        <li>Abra este site no Chrome ou Samsung Internet.</li>
        <li>Toque no menu (<span class="kbd">⋮</span>) e escolha <span class="kbd">Adicionar à tela inicial</span>.</li>
        <li>Confirme. O app instalará como PWA com modo escuro.</li>
      </ol>
      <h2>Como usar com Cxxdroid</h2>
      <ol>
        <li>Instale o <b>Cxxdroid</b> pela Play Store.</li>
        <li>Dentro da lição, toque <span class="kbd">Testar no Cxxdroid</span>.</li>
        <li>Se o código não abrir automaticamente, já copiamos para sua área de transferência — cole no editor e execute.</li>
      </ol>
      <h2>Dicas de estudo noturno</h2>
      <ul>
        <li>Estude em blocos de 15 min.</li>
        <li>Luz baixa + água ao lado.</li>
        <li>Se pausar por dias, volte com a lição leve (1.1) para reaquecer.</li>
      </ul>
    </div>
  `;
}

function updateSessionTime(){
  // Contabiliza minutos ativos (aprox)
  state.sessionSeconds += 5;
  if(state.sessionSeconds % 60 === 0){
    const curr = LS.get("minutesSpent", 0) || 0;
    LS.set("minutesSpent", curr + 1);
    if(state.sessionSeconds % 300 === 0){
      // A cada ~5 minutos, avaliar conquistas de hora
      renderAchievements();
    }
  }
}
setInterval(()=>{
  if(document.visibilityState === "visible") updateSessionTime();
}, 5000);

window.addEventListener("beforeunload", ()=>{
  LS.set("lastOpenedTs", Date.now());
});

function initInstall(){
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $("#installBtn").style.display = "inline-flex";
    $("#installBtn").addEventListener("click", async () => {
      $("#installBtn").style.display = "none";
      if(deferredPrompt){
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
      }
    });
  });
}

function initSW(){
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js');
  }
}

function shareProgress(){
  const done = completedLessonsCount();
  const total = totalLessons();
  const mins = Math.round(LS.get("minutesSpent", 0) || 0);
  const text = `Estudando C no "Poliane Aprende C": ${done}/${total} lições • ${mins} min investidos 💙 #MaeProgramadora`;
  webShare(text);
}

function buildUI(){
  renderAulas();
  renderProgress();
  renderAchievements();
  renderHelp();
  initTheme();
  initInstall();
  initSW();
}

document.addEventListener("DOMContentLoaded", buildUI);
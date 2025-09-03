
const $=(s,e=document)=>e.querySelector(s), $$=(s,e=document)=>[...e.querySelectorAll(s)];
const LS={get:(k,d=null)=>{try{return JSON.parse(localStorage.getItem(k)??JSON.stringify(d));}catch(e){return d;}},set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};

const state={view:"aulas",lessonPath:null,dark:true,startedAt:Date.now(),sessionSeconds:0};

function ensureContentShape(){
  try{
    if(!Array.isArray(CONTENT)) throw new Error("CONTENT ausente");
    CONTENT.forEach((mod, mi)=>{
      if(!Array.isArray(mod.lessons)) throw new Error("mod.lessons inválido em " + (mod.id||mi));
      mod.lessons.forEach((ls, li)=>{
        ls.steps = ls.steps || {};
        const req = ["acolhimento","contexto","analogia","visual","code","exercise","celebracao"];
        req.forEach(k=>{ if(!(k in ls.steps)) ls.steps[k] = (k==="visual")? {type:null}: (k==="code"? {snippet:"", explain:[]} : ""); });
        if(!ls.c_code_full) ls.c_code_full = "";
      });
    });
  }catch(e){ console.error("[ensureContentShape]", e); }
}

function initTheme(){ state.dark=LS.get("themeDark",true); document.body.classList.toggle("dark",state.dark); $("#themeSwitch")?.classList.toggle("active",state.dark); }
function toggleTheme(){ state.dark=!state.dark; document.body.classList.toggle("dark",state.dark); $("#themeSwitch")?.classList.toggle("active",state.dark); LS.set("themeDark",state.dark); }

function navTo(v){ state.view=v; $$(".section").forEach(s=>s.classList.remove("active")); $(`#section-${v}`).classList.add("active"); $$(".bottom-nav button").forEach(b=>b.classList.remove("active")); $(`.bottom-nav button[data-view='${v}']`)?.classList.add("active"); if(v==="progresso")renderProgress(); if(v==="conquistas")renderAchievements(); if(v==="ajuda")renderHelp(); }

function saveProgress(k,v){ const p=LS.get("progress",{}); p[k]=v; LS.set("progress",p); }
function getProgress(k,d){ const p=LS.get("progress",{}); return (k in p)?p[k]:d; }
function totalLessons(){ return CONTENT.reduce((a,m)=>a+m.lessons.length,0); }
function completedLessonsCount(){ const p=LS.get("progress",{}); return Object.keys(p).filter(k=>k.startsWith("done:")&&p[k]).length; }

function renderAulas(){
  const wrap=$("#modules"); wrap.innerHTML="";
  CONTENT.forEach((mod,mi)=>{
    const card=document.createElement("div"); card.className="card";
    const doneCount=mod.lessons.filter(ls=>getProgress(`done:${mod.id}:${ls.id}`,false)).length;
    const pct=Math.round(doneCount/mod.lessons.length*100);
    card.innerHTML=`<div class="row"><div><h2>${mod.title}</h2><div class="badge">${mod.lessons.length} lições · ${pct}%</div></div><button class="btn" data-mi="${mi}" data-open="mod">Abrir</button></div><div class="list" id="lessons-${mi}" style="display:none"></div>`;
    wrap.appendChild(card);
    card.querySelector("[data-open='mod']").addEventListener("click",()=>{
      const list=$(`#lessons-${mi}`); list.style.display=list.style.display==="none"?"grid":"none"; if(list.dataset.rendered==="1") return;
      mod.lessons.forEach((ls,li)=>{
        const done=getProgress(`done:${mod.id}:${ls.id}`,false);
        const item=document.createElement("div"); item.className="item";
        item.innerHTML=`<div class="row"><div class="title">Lição ${ls.id}: ${ls.title}</div><div class="meta">${ls.duration||15} min ${done?"· ✅":""}</div></div><div class="row"><button class="btn btn-primary" data-mi="${mi}" data-li="${li}" data-open="lesson">Estudar</button><button class="btn" data-mi="${mi}" data-li="${li}" data-open="preview">Códigos</button></div>`;
        list.appendChild(item);
        item.querySelector("[data-open='lesson']").addEventListener("click",()=>openLesson(mi,li));
        item.querySelector("[data-open='preview']").addEventListener("click",()=>previewCode(mi,li));
      });
      attachQuizButtons(mi, CONTENT[mi], list); // botão do quiz por módulo
      list.dataset.rendered="1";
    });
  });
}

function previewCode(mi,li){ const mod=CONTENT[mi], ls=mod.lessons[li]; $("#previewTitle").textContent=`Lição ${ls.id} — Códigos`; $("#previewSnippet").textContent=ls?.steps?.code?.snippet||""; $("#previewFull").textContent=ls?.c_code_full||""; $("#previewModal").style.display="block"; }
function closePreview(){ $("#previewModal").style.display="none"; }
function copyText(txt){ if(navigator.clipboard && window.isSecureContext){ navigator.clipboard.writeText(txt).then(()=>toast("Copiado 📋")); } else { const ta=document.createElement("textarea"); ta.value=txt; document.body.appendChild(ta); ta.select(); try{document.execCommand("copy");toast("Copiado 📋");}catch(e){} document.body.removeChild(ta); } }
function openCxxdroid(code){ try{window.location.href="cxxdroid://";}catch(e){} copyText(code); toast("Abrindo Cxxdroid (código copiado)."); }
function openReplit(code){ window.open("https://replit.com/languages/c","_blank"); copyText(code); toast("Replit aberto (código copiado)."); }
function shareWhatsApp(text){ window.open(`https://wa.me/?text=${encodeURIComponent(text)}`,"_blank"); }
function webShare(text){ if(navigator.share){ navigator.share({text}).catch(()=>{});} else { shareWhatsApp(text);} }
function toast(m){ const t=$("#toast"); t.textContent=m; t.style.display="block"; setTimeout(()=>t.style.display="none",2200); }

function openLesson(mi,li){ state.lessonPath={mi,li}; const mod=CONTENT[mi], ls=mod.lessons[li]; navTo("lesson"); renderLesson(mod,ls); saveProgress("lastOpened",{mi,li,ts:Date.now()}); }
function stepKey(mid,lid){ return `step:${mid}:${lid}`; }

function renderLesson(mod,ls){
  $("#lessonTitle").textContent=`Lição ${ls.id}: ${ls.title}`;
  const cur=getProgress(stepKey(mod.id,ls.id),1); $("#stepIndicator").textContent=`Passo ${cur}/7`;
  const steps=[
    {label:'Acolhimento empático',render:()=>`<p>${ls?.steps?.acolhimento||""}</p>`},
    {label:'Contexto cotidiano',render:()=>`<p>${ls?.steps?.contexto||""}</p>`},
    {label:'Analogia materna',render:()=>`<p>${ls?.steps?.analogia||""}</p>`},
    {label:'Tutorial visual',render:()=>renderVisual(ls?.steps?.visual)},
    {label:'Código C explicado',render:()=>renderCode(ls?.steps?.code||{},ls?.c_code_full||"")},
    {label:'Exercício guiado',render:()=>renderExercise(mod,ls)},
    {label:'Celebração e conexão',render:()=>`<p>${ls?.steps?.celebracao||""}</p>`}
  ];
  const idx=Math.min(Math.max(cur-1,0),6); let html="";
  try{const out=steps[idx].render(); html=(typeof out==="string"&&out.trim().length?out:"<p class='meta'>Sem conteúdo para este passo.</p>");}
  catch(e){console.error("render step",e); html="<div class='item'><div class='title'>Falha ao montar o passo.</div><p class='meta'>Toque Próximo/Voltar ou recarregue.</p></div>";}
  $("#lessonSteps").innerHTML=`<div class="card"><h3>${steps[idx].label}</h3><div>${html}</div></div>
  <div class="grid cols-2" style="margin-top:10px"><button class="btn" id="btnPrev" ${cur===1?"disabled":""}>Voltar</button>
  <button class="btn btn-primary" id="btnNext">${cur===7?"Concluir lição":"Próximo"}</button></div>
  <div style="margin-top:10px"><button class="btn btn-warning" id="btnSkip">Pular etapa</button></div>`;
  $("#btnPrev").onclick=()=>{saveProgress(stepKey(mod.id,ls.id),Math.max(1,cur-1));renderLesson(mod,ls);}
  $("#btnNext").onclick=()=>{ if(cur===7){ saveProgress(`done:${mod.id}:${ls.id}`,true); saveProgress(stepKey(mod.id,ls.id),1); computeFlags(); toast("Lição concluída! 🎉"); navTo('aulas'); renderAulas(); } else { saveProgress(stepKey(mod.id,ls.id),cur+1); renderLesson(mod,ls);} }
  $("#btnSkip").onclick=()=>{ saveProgress(stepKey(mod.id,ls.id),Math.min(7,cur+1)); renderLesson(mod,ls); }
}

document.addEventListener("click",(e)=>{
  if(e.target && e.target.id==="btnVisualSwap"){ e.target.previousElementSibling.previousElementSibling.textContent="Novo valor na gaveta"; }
  if(e.target && e.target.id==="btnTrue"){ $("#ifNode").textContent="Tocar música calma"; $("#ifNode").classList.add("active"); }
  if(e.target && e.target.id==="btnFalse"){ $("#ifNode").textContent="Seguir rotina"; $("#ifNode").classList.add("active"); }
});

function renderVisual(v){
  if(!v||!v.type) return "<p class='meta'>Este passo não possui material visual.</p>";
  if(v.type==='drawers'){ return `<div class='item'>Gaveta: ${v.data?.[0]||"Exemplo"} → Valor<button class='btn' id='btnVisualSwap'>Trocar conteúdo</button></div>`; }
  if(v.type==='if'){ return `<div class='item'><div class='title'>Se (${v.data?.cond||"cond"})</div><div id="ifNode">${v.data?.then||"Então"}</div><div class='row'><button class='btn' id='btnTrue'>Verdadeiro</button><button class='btn' id='btnFalse'>Falso</button></div></div>`; }
  if(v.type==='for'){ const arr=[]; const from=v.data?.from??1, to=v.data?.to??5, label=v.data?.label??"i"; for(let i=from;i<=to;i++) arr.push(`${label} ${i}`); return `<div class='item'><div>${arr.join(" → ")}</div></div>`; }
  return "<p>—</p>";
}

function renderCode(obj, full){
  return `<pre class='code' id='snippet'>${obj.snippet||""}</pre>
  <div class='row'><button class='btn' onclick="copyText($('#snippet').textContent)">Copiar</button>
  <button class='btn btn-primary' onclick="openCxxdroid(\`${(full||'').replace(/`/g,'\\`')}\`)">Testar no Cxxdroid</button>
  <button class='btn' onclick="openReplit(\`${(full||'').replace(/`/g,'\\`')}\`)">Abrir no Replit</button></div>
  <div class='item' style='margin-top:10px'><div class='title'>Linha a linha</div>${(obj.explain||[]).map(e=>`<p>• ${e}</p>`).join("")}</div>`;
}

function renderExercise(mod,ls){
  const ex=ls?.steps?.exercise; if(!ex) return "<p>—</p>";
  if(ex.type==='mcq'){ return `<p>${ex.prompt||""}</p>${(ex.options||[]).map((o,i)=>`<label class='item'><input type='radio' name='mcq' value='${i}'> ${o}</label>`).join("")}<button class='btn btn-success' onclick='gradeMCQ(${ex.answerIndex})'>Verificar</button>`; }
  if(ex.type==='affirm'){ return `<label class='item'><input id='affirmCheck' type='checkbox'> ${ex.label||"Marque quando concluir"}</label><button class='btn btn-success' onclick='confirmAffirm()'>Registrar</button>`; }
  return "<p>—</p>";
}
function gradeMCQ(ans){ const pick=$$("input[name='mcq']").find(x=>x.checked); if(!pick){toast("Escolha uma opção");return;} if(Number(pick.value)===Number(ans)){ toast("Perfeito! ✅"); markFirstWinIfNot(); } else { toast("Revise e tente outra vez"); } }
function confirmAffirm(){ toast("Progresso registrado! 🌟"); markFirstWinIfNot(); }
function markFirstWinIfNot(){ const f=LS.get("flags",{}); if(!f.first_code_run){ f.first_code_run=true; LS.set("flags",f); toast("Conquista: Primeira Vitória! 🏅"); } }
function computeFlags(){ const f=LS.get("flags",{}); CONTENT.forEach(m=>{ const all=m.lessons.every(ls=>getProgress(`done:${m.id}:${ls.id}`,false)); f[`module_${m.id}_done`]=all; }); LS.set("flags",f); }

function renderProgress(){ const total=totalLessons(), done=completedLessonsCount(), pct=Math.round(done/total*100); const pb=$("#progBar"); const pbt=$("#progBarTop"); if(pb) pb.style.width=pct+"%"; if(pbt) pbt.style.width=pct+"%"; const lbl=$("#progLabel"); if(lbl) lbl.textContent=`${done}/${total} lições (${pct}%)`; const mins=LS.get("minutesSpent",0)||0; const ti=$("#timeInvested"); if(ti) ti.textContent=`${Math.round(mins)} minutos investidos no futuro do Theo`; const mot=$("#motivation"); if(mot) mot.textContent=(pct<30)?"Cada começo vale ouro. Você tá indo!":(pct<70)?"Metade do caminho, respira e segue.":"Quase lá. Orgulho total!"; }
function renderAchievements(){ computeFlags(); const list=$("#achList"); if(!list) return; list.innerHTML=""; const f=LS.get("flags",{}); const ACH=[{id:"midnight",name:"Madrugada Produtiva",desc:"Estudar após 22h",check:()=>{const h=(new Date()).getHours();return h>=22||h<5;}},{id:"multitask",name:"Mãe Multitarefa",desc:"Completar lição entre atividades do Theo",manual:true},{id:"comeback",name:"Persistência de Mãe",desc:"Retomar após pausa de 3+ dias",check:()=>{const last=LS.get("lastOpenedTs",Date.now()); return (Date.now()-last)>(3*24*3600*1000);}},{id:"firstwin",name:"Primeira Vitória",desc:"Primeiro código C funcionando",check:()=>f.first_code_run}];
  ACH.forEach(a=>{ const ok=a.check?a.check():false; const row=document.createElement("div"); row.className="item"; row.innerHTML=`<div class="row"><div><div class="title">${a.name}</div><div class="meta">${a.desc}</div></div><div>${ok?"🏅":""}</div></div>`; list.appendChild(row); });
}
function renderHelp(){ const w=$("#helpWrap"); if(!w) return; w.innerHTML=`<div class="card"><h2>Instalação (Galaxy S23)</h2><ol><li>Abra no Chrome/Samsung Internet.</li><li>Menu <span class='kbd'>⋮</span> → <span class='kbd'>Adicionar à tela inicial</span>.</li><li>Abra como app.</li></ol><h2>Cxxdroid</h2><ol><li>Instale pela Play Store.</li><li>Toque <span class='kbd'>Testar no Cxxdroid</span>.</li><li>Se não abrir, cole o código (já copiamos pra você).</li></ol></div>`; }

function updateSessionTime(){ state.sessionSeconds+=5; if(state.sessionSeconds%60===0){ const curr=LS.get("minutesSpent",0)||0; LS.set("minutesSpent",curr+1);} }
setInterval(()=>{ if(document.visibilityState==="visible") updateSessionTime(); },5000);
window.addEventListener("beforeunload",()=>{ LS.set("lastOpenedTs",Date.now()); });

function initInstall(){ let dp=null; window.addEventListener('beforeinstallprompt',(e)=>{ e.preventDefault(); dp=e; $("#installBtn").style.display="inline-flex"; $("#installBtn").onclick=async()=>{ $("#installBtn").style.display="none"; if(dp){ dp.prompt(); await dp.userChoice; dp=null; } }; }); }
function initSW(){ if('serviceWorker' in navigator){ navigator.serviceWorker.register('./service-worker.js'); } }
function shareProgress(){ const done=completedLessonsCount(), total=totalLessons(), mins=Math.round(LS.get("minutesSpent",0)||0); const text=`Estudando Lógica & C: ${done}/${total} lições • ${mins} min investidos 💙`; if(navigator.share){navigator.share({text}).catch(()=>{});} else { shareWhatsApp(text);} }

// ===== QUIZ & EXAM =====
let quizState={modId:null,ix:0,correct:0,order:[]};
function attachQuizButtons(mi,mod,listEl){ const q=document.createElement("div"); q.className="item"; q.innerHTML=`<div class="row"><div class="title">Quiz do Módulo</div><div class="meta">5 perguntas</div></div><button class="btn btn-warning" data-mi="${mi}" data-open="quiz">Começar Quiz</button>`; listEl.appendChild(q); q.querySelector("[data-open='quiz']").addEventListener("click",()=>startQuiz(mod.id)); }
function startQuiz(modId){ if(!window.QUIZZES||!QUIZZES[modId]||QUIZZES[modId].length<5){ toast("Quiz deste módulo ainda não disponível."); return;} quizState={modId,ix:0,correct:0,order:[...Array(5).keys()]}; navTo("quiz"); renderQuiz(); }
function renderQuiz(){ const arr=QUIZZES[quizState.modId]; if(quizState.ix>=5){ const pct=Math.round(quizState.correct/5*100); saveProgress(`quiz:${quizState.modId}:score`,pct); $("#quizWrap").innerHTML=`<div class="card"><h3>Resultado</h3><p>${quizState.correct}/5 (${pct}%).</p><button class="btn" onclick="navTo('aulas')">Voltar</button></div>`; $("#quizProgress").textContent=`5/5`; return;} const q=arr[quizState.order[quizState.ix]]; $("#quizTitle").textContent=`Quiz — ${quizState.modId.toUpperCase()}`; $("#quizProgress").textContent=`${quizState.ix+1}/5`; $("#quizWrap").innerHTML=`<div class="card"><h3>${q.q}</h3>${ q.options.map((o,i)=>`<label class="item"><input type="radio" name="q" value="${i}"> ${o}</label>`).join("") }<button class="btn btn-success" onclick="gradeQuizQ(${q.ans}, \`${q.why||""}\`)">Responder</button></div>`; }
function gradeQuizQ(ans,why){ const p=$$("input[name='q']").find(x=>x.checked); if(!p){toast("Escolha uma opção");return;} if(Number(p.value)===Number(ans)){ quizState.correct++; toast("Certa! 💚"); } else { toast("Quase. "+why); } quizState.ix++; renderQuiz(); }

let exam={ix:0,correct:0,order:[],startTs:0};
function startExam(){ if(!Array.isArray(EXAM)||EXAM.length<70){ toast("Prova ainda não disponível."); return;} exam={ix:0,correct:0,order:[...Array(70).keys()],startTs:Date.now()}; navTo("exam"); renderExam(); }
function renderExam(){ if(exam.ix>=70){ const elapsed=Math.round((Date.now()-exam.startTs)/60000); const pct=Math.round(exam.correct/70*100); saveProgress("finalExamScore",pct); saveProgress("finalExamTime",elapsed); $("#examWrap").innerHTML=`<div class="card"><h3>Resultado Final</h3><p>${exam.correct}/70 (${pct}%) · ${elapsed} min</p><button class="btn" onclick="shareProgress()">Compartilhar</button><button class="btn" onclick="navTo('aulas')">Voltar</button></div>`; $("#examProgress").textContent=`70/70`; $("#examTimer").textContent=`${elapsed} min`; return; } $("#examProgress").textContent=`${exam.ix+1}/70`; const q=EXAM[exam.order[exam.ix]]; const elapsed=Math.round((Date.now()-exam.startTs)/60000); $("#examTimer").textContent=`${elapsed} min`; $("#examWrap").innerHTML=`<div class="card"><h3>${q.q}</h3>${ q.options.map((o,i)=>`<label class="item"><input type="radio" name="e" value="${i}"> ${o}</label>`).join("") }<button class="btn btn-success" onclick="gradeExamQ(${q.ans})">Responder</button></div>`; }
function gradeExamQ(ans){ const p=$$("input[name='e']").find(x=>x.checked); if(!p){toast("Escolha uma opção");return;} if(Number(p.value)===Number(ans)){ exam.correct++; toast("Certa!"); } else { toast("Anote para revisar depois."); } exam.ix++; renderExam(); }

function buildUI(){ renderAulas(); renderProgress(); renderAchievements(); renderHelp(); initTheme(); initInstall(); initSW(); }
document.addEventListener("DOMContentLoaded",()=>{ ensureContentShape(); buildUI(); });

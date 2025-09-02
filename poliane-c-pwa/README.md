# Poliane Aprende C — PWA

PWA **100% offline após o primeiro carregamento**, focado em sessões curtas (15–20 min), com abordagem acolhedora e prática para aprender **lógica** e **linguagem C**. Otimizado para **Galaxy S23 (Android 14)** e uso **com uma mão**. Integra com **Cxxdroid** e **Replit**.

## Como publicar e instalar (5 min)
1. **Publique** os arquivos em um host com HTTPS (ex.: GitHub Pages, Netlify, Vercel).  
   - GitHub Pages: crie um repositório, suba os arquivos, ative `Pages` em `main`/`root`.
2. Abra a URL no **Chrome** ou **Samsung Internet** no Galaxy S23.
3. Menu `⋮` → **Adicionar à tela inicial** → Confirmar.

> ⚠️ PWA e Service Worker exigem HTTPS (ou `localhost`). Abrir direto via `file://` não instala.

## Uso sem internet
- Depois do primeiro acesso online, o app funciona **totalmente offline**.
- Progresso e conquistas ficam no **LocalStorage** do aparelho.

## Integração com Cxxdroid
- Instale o **Cxxdroid** pela Play Store.
- Nas lições, toque **“Testar no Cxxdroid”**.  
  - Alguns aparelhos não aceitam payload grande no link `cxxdroid://`. Nesses casos, o app **copia o código** automaticamente — **abra o Cxxdroid** e **cole**.
- Alternativa: **Replit** (abre no navegador; cole o código se o parâmetro não carregar).

## Gamificação
Conquistas automáticas e manuais pensadas para a rotina de mãe:
- **Madrugada Produtiva**: estudar após 22h  
- **Mãe Multitarefa**: marcar ao estudar entre atividades do Theo  
- **Persistência de Mãe**: voltar após 3+ dias  
- **Primeira Vitória**: primeiro exercício/execução OK  
- **Organizadora Digital** (Módulo 1), **Tomadora de Decisões** (Módulo 2), **Mestre da Repetição** (Módulo 3)  
- **Mãe Programadora**: concluir os 3 módulos

## Validação rápida (checklist)
- [x] Instalável como PWA em Android 14 (Chrome/Samsung Internet)
- [x] Navegação com uma mão, botões ≥ 44px
- [x] 15 lições completas (3 módulos × 5) com sequência fixa (7 passos)
- [x] Copy para clipboard + deep link `cxxdroid://` + Replit
- [x] Progresso e tempo via LocalStorage
- [x] Modo escuro nativo
- [x] Offline após carregar (Service Worker)
- [x] Feedback visual imediato (toasts, badges)

## Dicas de estudo (noite)
- **15 min por vez**. Feche os olhos 30s entre lições.
- Água por perto e **luz baixa**.
- Se pausar alguns dias, **volte pela Lição 1.1** para reaquecer.

---

Feito com carinho para que **Poliane** se sinta **capaz e confiante**, mesmo cansada — cada lição é um passo concreto em direção à **autonomia** e ao futuro do **Theo**. 💙
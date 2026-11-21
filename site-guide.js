(function () {
  const PAGES = [
    { file: 'index.html', label: '🏠 Showcase', short: 'Showcase' },
    { file: 'hybrid-fal-ai.html', label: '💰 £19 + fal.ai', short: '£19 + fal.ai' },
    { file: 'reverse-engineering.html', label: '🎬 Reverse Eng', short: 'Reverse Eng' }
  ];

  const path = window.location.pathname;
  const currentFile =
    PAGES.find((p) => path.endsWith('/' + p.file) || path.endsWith(p.file))?.file ||
    'index.html';
  const currentIdx = PAGES.findIndex((p) => p.file === currentFile);
  const prevPage = PAGES[(currentIdx - 1 + PAGES.length) % PAGES.length];
  const nextPage = PAGES[(currentIdx + 1) % PAGES.length];

  // Inject styles for the floating bottom guide dock
  const style = document.createElement('style');
  style.textContent = `
    body { padding-bottom: 92px; }
    .guide-dock {
      position: fixed;
      bottom: 14px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 950;
      display: flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.55rem 0.85rem;
      background: rgba(16, 18, 24, 0.92);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 999px;
      box-shadow: 0 18px 45px rgba(0, 0, 0, 0.65);
      max-width: calc(100vw - 20px);
      overflow-x: auto;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .guide-dock::-webkit-scrollbar { display: none; }
    .gd-sep {
      width: 1px;
      height: 22px;
      background: rgba(255, 255, 255, 0.12);
      flex-shrink: 0;
    }
    .gd-btn, .gd-page {
      display: inline-flex;
      align-items: center;
      gap: 0.32rem;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.04);
      color: #e5e7eb;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 0.36rem 0.72rem;
      cursor: pointer;
      white-space: nowrap;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .gd-btn:hover, .gd-page:hover {
      background: rgba(255, 255, 255, 0.11);
      color: #ffffff;
      text-decoration: none;
    }
    .gd-page.active {
      background: rgba(16, 185, 129, 0.18);
      border-color: rgba(16, 185, 129, 0.5);
      color: #2dd4bf;
    }
    .gd-play {
      background: #10b981;
      border-color: #10b981;
      color: #052016;
      font-weight: 700;
    }
    .gd-play:hover {
      background: #14cf91;
      color: #052016;
    }
    .gd-stop {
      background: rgba(249, 115, 22, 0.18);
      border-color: rgba(249, 115, 22, 0.55);
      color: #fb923c;
      font-weight: 700;
    }
    .gd-stop:hover {
      background: rgba(249, 115, 22, 0.32);
      color: #fed7aa;
    }
    .gd-progress-wrap {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      min-width: 90px;
    }
    .gd-bar {
      width: 58px;
      height: 5px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.12);
      overflow: hidden;
      flex-shrink: 0;
    }
    .gd-bar-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #10b981, #2dd4bf);
      transition: width 0.12s linear;
    }
    .gd-pct {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: #9ca3af;
      min-width: 30px;
      text-align: right;
    }
    .gd-status {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: #2dd4bf;
      white-space: nowrap;
      display: none;
    }
    .gd-status.visible { display: inline; }
  `;
  document.head.appendChild(style);

  // Build bottom guide dock DOM
  const dock = document.createElement('nav');
  dock.className = 'guide-dock';
  dock.setAttribute('aria-label', 'Bottom Page & Auto-Scroll Guide');

  const pagesHtml = PAGES.map(
    (p) =>
      `<a class="gd-page ${p.file === currentFile ? 'active' : ''}" href="${p.file}">${p.label}</a>`
  ).join('');

  dock.innerHTML = `
    <a class="gd-btn" href="${prevPage.file}" title="Previous page (${prevPage.short})">◀</a>
    ${pagesHtml}
    <a class="gd-btn" href="${nextPage.file}" title="Next page (${nextPage.short})">▶</a>
    <span class="gd-sep"></span>
    <button type="button" class="gd-btn gd-play" id="gdPlayBtn" title="Start auto-scrolling tour">▶ Play</button>
    <button type="button" class="gd-btn gd-stop" id="gdStopBtn" title="Stop auto-scrolling">⏹ Stop</button>
    <button type="button" class="gd-btn" id="gdSpeedBtn" title="Change scroll speed">1×</button>
    <div class="gd-progress-wrap">
      <div class="gd-bar"><div class="gd-bar-fill" id="gdBarFill"></div></div>
      <span class="gd-pct" id="gdPct">0%</span>
    </div>
    <span class="gd-status" id="gdStatus"></span>
    <button type="button" class="gd-btn" id="gdTopBtn" title="Scroll to top">⬆</button>
  `;
  document.body.appendChild(dock);

  const playBtn = document.getElementById('gdPlayBtn');
  const stopBtn = document.getElementById('gdStopBtn');
  const speedBtn = document.getElementById('gdSpeedBtn');
  const barFill = document.getElementById('gdBarFill');
  const pctEl = document.getElementById('gdPct');
  const statusEl = document.getElementById('gdStatus');
  const topBtn = document.getElementById('gdTopBtn');

  const SPEEDS = [
    { label: '0.5×', pxPerSec: 45 },
    { label: '1×', pxPerSec: 95 },
    { label: '2×', pxPerSec: 190 }
  ];
  let speedIdx = Number(sessionStorage.getItem('hf_guide_speed') || 1);
  if (isNaN(speedIdx) || speedIdx < 0 || speedIdx >= SPEEDS.length) speedIdx = 1;
  speedBtn.textContent = SPEEDS[speedIdx].label;

  let isPlaying = false;
  let rafId = null;
  let lastTs = null;
  let nextTimer = null;

  function updateProgress() {
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / maxScroll) * 100)));
    barFill.style.width = pct + '%';
    pctEl.textContent = pct + '%';
  }

  function stopAutoScroll(msg) {
    isPlaying = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    lastTs = null;
    if (nextTimer) clearTimeout(nextTimer);
    nextTimer = null;
    playBtn.textContent = '▶ Play';
    statusEl.textContent = msg || '';
    statusEl.classList.toggle('visible', Boolean(msg));
  }

  function tick(ts) {
    if (!isPlaying) return;
    if (lastTs === null) lastTs = ts;
    const dt = Math.min(0.1, (ts - lastTs) / 1000);
    lastTs = ts;

    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll - 2) {
      statusEl.textContent = `Next: ${nextPage.short}…`;
      statusEl.classList.add('visible');
      nextTimer = setTimeout(() => {
        if (isPlaying) {
          window.location.href = `${nextPage.file}?autoplay=1`;
        }
      }, 1800);
      return;
    }

    window.scrollBy(0, SPEEDS[speedIdx].pxPerSec * dt);
    updateProgress();
    rafId = requestAnimationFrame(tick);
  }

  function startAutoScroll() {
    if (isPlaying) return;
    isPlaying = true;
    lastTs = null;
    playBtn.textContent = '▶ Playing';
    statusEl.textContent = 'Auto-scroll';
    statusEl.classList.add('visible');
    rafId = requestAnimationFrame(tick);
  }

  playBtn.addEventListener('click', startAutoScroll);
  stopBtn.addEventListener('click', () => stopAutoScroll(''));
  speedBtn.addEventListener('click', () => {
    speedIdx = (speedIdx + 1) % SPEEDS.length;
    sessionStorage.setItem('hf_guide_speed', String(speedIdx));
    speedBtn.textContent = SPEEDS[speedIdx].label;
  });
  topBtn.addEventListener('click', () => {
    stopAutoScroll('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  // Resume auto-scroll when arriving via ?autoplay=1
  const params = new URLSearchParams(window.location.search);
  if (params.get('autoplay') === '1') {
    setTimeout(startAutoScroll, 600);
  }
})();

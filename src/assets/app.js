document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading progress bar
  const bar = document.querySelector('.read-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
      bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    }, { passive: true });
  }

  // 2. Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // 3. 3D Magnetic Tilt on Airport Cards
  document.querySelectorAll('.airport-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // 4. Interactive Scenario Simulator
  const SIM_DATA = {
    '4k': {
      title: '晚高峰 4K / 8K 影音推荐：光年梯机场（IEPL 专线）',
      desc: '晚上 21:00 电信/联通实测，光年梯香港与日本 IEPL 专线稳定跑满 180,000+ Kbps，YouTube 4K 60fps 拖拽秒缓冲，Netflix 原生解锁。',
      bars: [
        { label: '光年梯机场（IEPL 专线）', val: '680 Mbps · 28ms', pct: 96, cls: '' },
        { label: '极连云（多线专线中转）', val: '560 Mbps · 34ms', pct: 85, cls: 'blue' },
        { label: '快狸 / 速界（高性价比中转）', val: '420 Mbps · 40ms', pct: 72, cls: 'violet' }
      ]
    },
    'ai': {
      title: 'ChatGPT / Claude 零风控推荐：光年梯IP 原生节点',
      desc: 'AI 平台严查机房脏 IP。光年梯IP 独立原生/家宽落地池配合固定分流，实测连续 90 天高强度调 API 与网页对话零验证、不封号。',
      bars: [
        { label: '光年梯IP（原生低风控池）', val: '纯净度 98% · 零验证', pct: 98, cls: '' },
        { label: '边缘节点（边缘纯净落地）', val: '纯净度 95% · 跨区友好', pct: 95, cls: 'violet' },
        { label: '极连云（AI 稳定解锁）', val: '纯净度 93% · 低风控', pct: 91, cls: 'blue' }
      ]
    },
    'game': {
      title: '外服联机 / Steam 推荐：光年梯加速器（TUN 模式）',
      desc: '开启 Clash Verge Rev 的 TUN 虚拟网卡 + 光年梯日港专线，晚高峰《Apex》《绝地求生》稳定 28~42ms、0% 丢包，省下单独买游戏加速器的钱。',
      bars: [
        { label: '光年梯加速器（沪日专线）', val: '28ms · 0% 丢包', pct: 96, cls: '' },
        { label: '极连云 / 速界（优化中转）', val: '36ms · 0.1% 丢包', pct: 84, cls: 'blue' },
        { label: '传统海外商业 VPN', val: '185ms · 频繁跳 ping', pct: 28, cls: 'violet' }
      ]
    },
    'ecom': {
      title: '跨境电商 / TikTok 推荐：光年梯前置 + 独享静态代理IP',
      desc: '做 Amazon、Shopify 或 TikTok 矩阵，用光年梯机场做高速专线前置，后置链式代理海星静态住宅 IP，兼顾秒开速度与本土住宅环境。',
      bars: [
        { label: '光年梯专线 + 静态住宅链式', val: '速度 94 · 纯净度 99', pct: 97, cls: '' },
        { label: '单用光年梯IP 原生节点', val: '速度 96 · 纯净度 95', pct: 92, cls: 'blue' },
        { label: '直连海外静态 IP（无中转）', val: '速度 40 · 纯净度 99', pct: 55, cls: 'violet' }
      ]
    }
  };

  const simTabs = document.querySelectorAll('.sim-tab');
  const simBarsEl = document.getElementById('sim-bars');
  const simTitleEl = document.getElementById('sim-title');
  const simDescEl = document.getElementById('sim-desc');

  function renderSim(key) {
    const d = SIM_DATA[key];
    if (!d || !simBarsEl) return;
    simTitleEl.textContent = d.title;
    simDescEl.textContent = d.desc;
    simBarsEl.innerHTML = d.bars.map((b) => `
      <div>
        <div class="sim-row-head"><span>${b.label}</span><span>${b.val}</span></div>
        <div class="sim-track"><div class="sim-fill ${b.cls}" data-pct="${b.pct}"></div></div>
      </div>
    `).join('');
    requestAnimationFrame(() => {
      simBarsEl.querySelectorAll('.sim-fill').forEach((el) => {
        el.style.width = `${el.dataset.pct}%`;
      });
    });
  }

  if (simTabs.length) {
    simTabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        simTabs.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderSim(btn.dataset.sim);
      });
    });
    renderSim('4k');
  }

  // 5. Airport Tag Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const airportCards = document.querySelectorAll('.airport-card');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const tag = btn.dataset.tag;
      airportCards.forEach((c) => {
        const tags = (c.dataset.tags || '').split(',');
        c.style.display = tag === 'all' || tags.includes(tag) ? '' : 'none';
      });
    });
  });

  // 6. Side-by-Side Comparison Drawer
  const selected = new Set();
  const compareBar = document.getElementById('compare-bar');
  const compareCount = document.getElementById('compare-count');
  const compareModal = document.getElementById('compare-modal');
  const compareBody = document.getElementById('compare-body');

  document.querySelectorAll('.compare-check').forEach((cb) => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        if (selected.size >= 3) {
          cb.checked = false;
          alert('最多同时对比 3 家服务商');
          return;
        }
        selected.add(cb.value);
      } else {
        selected.delete(cb.value);
      }
      if (compareBar) {
        compareBar.classList.toggle('show', selected.size > 0);
        compareCount.textContent = `已选 ${selected.size} 家对比`;
      }
    });
  });

  const openCompareBtn = document.getElementById('open-compare');
  if (openCompareBtn && window.__AIRPORTS__) {
    openCompareBtn.addEventListener('click', () => {
      const items = window.__AIRPORTS__.filter((a) => selected.has(a.id));
      compareBody.innerHTML = `
        <table class="compare-table">
          <thead><tr><th>维度</th>${items.map((i) => `<th>${i.shortName}</th>`).join('')}</tr></thead>
          <tbody>
            <tr><td>综合评分</td>${items.map((i) => `<td><strong>${i.score} / 10</strong></td>`).join('')}</tr>
            <tr><td>月付价格</td>${items.map((i) => `<td>${i.priceMonth}</td>`).join('')}</tr>
            <tr><td>线路类型</td>${items.map((i) => `<td>${i.lineType}</td>`).join('')}</tr>
            <tr><td>晚高峰延迟</td>${items.map((i) => `<td>${i.latencyMs} ms</td>`).join('')}</tr>
            <tr><td>峰值带宽</td>${items.map((i) => `<td>${i.peakSpeedMbps} Mbps</td>`).join('')}</tr>
            <tr><td>IP 纯净度</td>${items.map((i) => `<td>${i.ipPurity}%</td>`).join('')}</tr>
          </tbody>
        </table>
      `;
      compareModal.classList.add('open');
    });
  }
  const closeCompare = document.getElementById('close-compare');
  if (closeCompare) closeCompare.addEventListener('click', () => compareModal.classList.remove('open'));
  if (compareModal) compareModal.addEventListener('click', (e) => { if (e.target === compareModal) compareModal.classList.remove('open'); });

  // 7. FAQ Accordion + Live Search & Category Filter
  document.querySelectorAll('.faq-q').forEach((q) => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });
  const faqSearch = document.getElementById('faq-search');
  const faqCatBtns = document.querySelectorAll('.faq-cat-btn');
  let activeFaqCat = 'all';
  function filterFaq() {
    const kw = (faqSearch ? faqSearch.value.trim().toLowerCase() : '');
    document.querySelectorAll('.faq-cat-block').forEach((blk) => {
      const catMatch = activeFaqCat === 'all' || blk.dataset.cat === activeFaqCat;
      let visibleInBlock = 0;
      blk.querySelectorAll('.faq-item').forEach((item) => {
        const text = item.textContent.toLowerCase();
        const show = catMatch && (!kw || text.includes(kw));
        item.style.display = show ? '' : 'none';
        if (show) visibleInBlock++;
      });
      blk.style.display = visibleInBlock > 0 ? '' : 'none';
    });
  }
  if (faqSearch) faqSearch.addEventListener('input', filterFaq);
  faqCatBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      faqCatBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFaqCat = btn.dataset.cat;
      filterFaq();
    });
  });

  // 8. AI Tools Live Search & Category Filter (on /ai-tools/)
  const aiSearch = document.getElementById('ai-search');
  const aiCatBtns = document.querySelectorAll('.ai-cat-btn');
  let activeAiCat = 'all';
  function filterAi() {
    const kw = (aiSearch ? aiSearch.value.trim().toLowerCase() : '');
    document.querySelectorAll('.ai-cat-block').forEach((blk) => {
      const catMatch = activeAiCat === 'all' || blk.dataset.cat === activeAiCat;
      let count = 0;
      blk.querySelectorAll('.ai-tool-card').forEach((card) => {
        const show = catMatch && (!kw || card.textContent.toLowerCase().includes(kw));
        card.style.display = show ? '' : 'none';
        if (show) count++;
      });
      blk.style.display = count > 0 ? '' : 'none';
    });
  }
  if (aiSearch) aiSearch.addEventListener('input', filterAi);
  aiCatBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      aiCatBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeAiCat = btn.dataset.cat;
      filterAi();
    });
  });

  // 9. 30-Second Selector Quiz (on /tools/)
  const quizForm = document.getElementById('quiz-form');
  const quizOut = document.getElementById('quiz-out');
  if (quizForm && quizOut) {
    quizForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const need = quizForm.need.value;
      const budget = quizForm.budget.value;
      let rec = '光年梯机场（光年梯VPN / 光年梯加速器）';
      let reason = '综合晚高峰稳定性、AI 原生 IP 与月付性价比，光年梯是最契合你当前需求的稳健主力。';
      if (need === 'ecom') {
        rec = '光年梯机场（前置专线） + 海星静态住宅代理IP（链式代理）';
        reason = '跨境店铺与 TikTok 养号必须保障本土住宅环境，前置走光年梯 IEPL 专线拉满速度，后置接独享静态 IP 杜绝风控。';
      } else if (budget === 'low') {
        rec = '快风轻享（备用）或 光年梯月付入门套餐';
        reason = '预算有限建议先从月付小流量起步，日后对 4K 和 Claude 稳定性要求提高再无缝升级光年梯专线。';
      }
      quizOut.innerHTML = `<div class="sim-result"><h3>🎯 为你匹配：${rec}</h3><p>${reason}</p><a class="btn btn-primary" href="/airports/">去导航页查看详细参数 →</a></div>`;
    });
  }
});

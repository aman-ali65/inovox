/* NovaWave – interactions */
document.addEventListener('DOMContentLoaded',()=>{
  const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
  // mobile nav
  const b=$('.burger'),n=$('.nav'),bd=$('.nav-backdrop');
  const closeNav = () => {
    if (n) n.classList.remove('open');
    if (b) { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }
    if (bd) bd.classList.remove('open');
    document.body.classList.remove('mobile-nav-locked');
  };
  if(b&&n)b.addEventListener('click',()=>{
    const o=n.classList.toggle('open');
    b.classList.toggle('open', o);
    b.setAttribute('aria-expanded', o);
    if (bd) bd.classList.toggle('open', o);
    document.body.classList.toggle('mobile-nav-locked', o);
  });
  if(bd) bd.addEventListener('click', closeNav);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
  // dropdown menu toggle
  $$('.nav-dropdown').forEach(dd=>{
    const trigger=dd.querySelector('.nav-dropdown-trigger');
    const menu=dd.querySelector('.dropdown-menu');
    if(trigger&&menu){
      trigger.addEventListener('click',e=>{
        if(window.innerWidth<=900){
          e.preventDefault();
          e.stopPropagation();
          menu.classList.toggle('show');
          dd.classList.toggle('open');
        }
      });
    }
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('.nav-dropdown')){
      $$('.nav-dropdown').forEach(dd=>dd.classList.remove('open'));
      $$('.dropdown-menu').forEach(m=>m.classList.remove('show'));
    }
  });
  // FAQ accordion
  $$('.acc button').forEach(btn=>btn.addEventListener('click',()=>{
    const d=btn.parentElement,open=d.classList.contains('on');
    $$('.acc div').forEach(x=>{x.classList.remove('on');$('button',x).setAttribute('aria-expanded',false)});
    if(!open){d.classList.add('on');btn.setAttribute('aria-expanded',true)}
  }));
  // testimonial slider
  const sl=$$('.slide');
  if(sl.length){let i=0;const c=$('.count');
    const go=k=>{i=(k+sl.length)%sl.length;sl.forEach((s,j)=>s.classList.toggle('on',j===i));if(c)c.textContent='0'+(i+1)+' / 0'+sl.length};
    $$('[data-dir]').forEach(x=>x.addEventListener('click',()=>go(i+ +x.dataset.dir)));go(0)}
  // blog filter + search + pager
  const posts=$$('.post');
  if(posts.length){let cat='all',q='';
    const run=()=>posts.forEach(p=>{const ok=(cat==='all'||p.dataset.cat===cat)&&p.textContent.toLowerCase().includes(q);p.style.display=ok?'':'none'});
    $$('.chip').forEach(c=>c.addEventListener('click',()=>{$$('.chip').forEach(x=>x.classList.remove('on'));c.classList.add('on');cat=c.dataset.cat;run()}));
    const s=$('.search input');if(s)s.addEventListener('input',()=>{q=s.value.trim().toLowerCase();run()});
    $$('.pager button').forEach(p=>p.addEventListener('click',()=>{if(p.dataset.pg){$$('.pager button').forEach(x=>x.classList.remove('on'));p.classList.add('on')}}))}
  // forms (front-end validation only)
  $$('form[data-form]').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault();let ok=true;
    $$('[required]',f).forEach(el=>{const bad=!el.value.trim()||(el.type==='email'&&!/^\S+@\S+\.\S+$/.test(el.value));el.classList.toggle('err',bad);if(bad)ok=false});
    const m=$('.fmsg',f)||$('#fmsg');
    if(m){m.style.color=ok?'#16794c':'#e5484d';m.textContent=ok?(f.dataset.form==='contact'?'Thanks! We will get back to you within 24 hours.':'Thanks for subscribing!'):'Please fill in the highlighted fields.'}
    if(ok)f.reset();
  }));

  // Numbering effect / count-up animation for stats
  const statElements = $$('.stats b, [data-counter]');
  if (statElements.length) {
    const animateCounter = (el) => {
      const rawText = el.getAttribute('data-target-val') || el.textContent.trim();
      el.setAttribute('data-target-val', rawText);

      const match = rawText.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
      if (!match) return;

      const prefix = match[1] || '';
      const targetNum = parseFloat(match[2]);
      const suffix = match[3] || '';
      const hasDecimals = match[2].includes('.');
      const decimalPlaces = hasDecimals ? (match[2].split('.')[1] || '').length : 0;
      const duration = 1800;
      let startTime = null;

      el.textContent = `${prefix}0${suffix}`;

      const updateCounter = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = targetNum * easeOut;
        const formattedVal = hasDecimals ? currentVal.toFixed(decimalPlaces) : Math.floor(currentVal);

        el.textContent = `${prefix}${formattedVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = rawText;
        }
      };

      requestAnimationFrame(updateCounter);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      statElements.forEach(el => observer.observe(el));
    } else {
      statElements.forEach(animateCounter);
    }
  }

  // Smooth scroll reveal animations
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const revealSelectors = [
      'section.sec:not(.hero)',
      '.fade-in-section',
      '.svc',
      '.pc',
      '.step',
      '.proc > div',
      '.st',
      '.val',
      '.team-profile-card',
      '.founder-spotlight',
      '.company-val-card',
      '.company-expertise-card',
      '.company-approach-card',
      '.blog-clean-card',
      '.blog-featured-card',
      '.portfolio-card-v2',
      '.ci-list > div',
      '.feat3 > div',
      '.acc > div',
      '.rowhead',
      '.company-section-header',
      '.pl2',
      '.band',
      '.quote',
      '.faq',
      '.trow > div',
      '.techs > div'
    ];
    const revealElements = $$(revealSelectors.join(', '));
    if (revealElements.length) {
      const scrollObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -36px 0px' });

      revealElements.forEach(el => {
        if (el.classList.contains('is-revealed')) return;
        el.classList.add('scroll-reveal-item');
        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(el);
          if (index > 0) {
            const delay = Math.min((index % 4) * 60, 240);
            el.style.setProperty('--reveal-delay', `${delay}ms`);
          }
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          scrollObserver.observe(el);
        }
      });
    }
  }
});

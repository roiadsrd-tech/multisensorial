'use strict';
// Motion follows the native scroll position. Content is readable without it.
function startCompactMotion() {
  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) return;
  const highlights = [...document.querySelectorAll('[data-highlight]')];
  const scenes = [...document.querySelectorAll('.session-scene')];
  const rails = [...document.querySelectorAll('[data-scroll-rail]')];
  const phrases = [...document.querySelectorAll('[data-scroll-words]')];
  const hero = document.querySelector('.hero');
  const records = new Map();
  const active = new Set();
  let frame = 0;
  let stopped = false;
  highlights.forEach(mark => {
    mark.style.setProperty('--highlight-progress','0');
    records.set(mark,{kind:'highlight'});
  });
  scenes.forEach((scene,index) => {
    const media = scene.querySelector('img,video');
    const inner = document.createElement('div');
    inner.className = 'scene-scroll-inner';
    media.classList.remove('flow-surface');
    scene.appendChild(inner);
    inner.appendChild(media);
    records.set(scene,{kind:'scene',inner,direction:index%2 ? -1 : 1});
  });
  phrases.forEach(phrase => {
    const words = phrase.textContent.trim().split(/\s+/);
    const nodes = [];
    const spans = words.map((word,index) => {
      const span = document.createElement('span');
      span.className = 'scroll-word';
      span.textContent = word;
      span.style.setProperty('--word-progress','0');
      nodes.push(span);
      if (index < words.length-1) nodes.push(document.createTextNode(' '));
      return span;
    });
    phrase.replaceChildren(...nodes);
    records.set(phrase,{kind:'words',spans});
  });
  rails.forEach(rail => {
    rail.style.setProperty('--step-progress','0');
    records.set(rail,{kind:'rail'});
  });
  if (hero) records.set(hero,{kind:'hero'});
  const clamp = value => Math.max(0,Math.min(1,value));
  const paint = () => {
    frame = 0;
    if (stopped || document.hidden) return;
    const height = window.innerHeight;
    const mobile = window.innerWidth <= 760;
    // Collect geometry first, then write styles once per animation frame.
    const measurements = [...active].map(element => [element,element.getBoundingClientRect(),records.get(element)]);
    measurements.forEach(([element,box,record]) => {
      const progress = clamp((height*.88-box.top)/(height*.34));
      if (record.kind==='highlight') element.style.setProperty('--highlight-progress',progress.toFixed(3));
      if (record.kind==='rail') element.style.setProperty('--step-progress',progress.toFixed(3));
      if (record.kind==='words') {
        record.spans.forEach((word,index) => {
          const wordProgress = clamp(progress*1.8-index/Math.max(1,record.spans.length-1)*.8);
          word.style.setProperty('--word-progress',wordProgress.toFixed(3));
        });
      }
      if (record.kind==='scene') {
        const position = Math.max(-1,Math.min(1,(height*.5-box.top-box.height*.5)/(height+box.height)*2));
        const drift = Math.min(mobile ? 7 : 16, box.height * .025);
        record.inner.style.setProperty('--scene-shift',`${(position*drift*record.direction).toFixed(2)}px`);
        record.inner.style.setProperty('--scene-tilt',`${(position*(mobile ? .18 : .45)*record.direction).toFixed(3)}deg`);
        record.inner.style.setProperty('--scene-scale',(1.06+Math.abs(position)*.015).toFixed(3));
      }
      if (record.kind==='hero') {
        const position = clamp(-box.top/Math.max(1,box.height));
        element.style.setProperty('--hero-sway',`${(position*40).toFixed(2)}px`);
        element.style.setProperty('--hero-rise',`${(-position*50).toFixed(2)}px`);
        element.style.setProperty('--hero-scale',(1.02+position*(mobile ? .015 : .035)).toFixed(3));
        element.style.setProperty('--hero-drift',`${(-position*(mobile?6:15)).toFixed(2)}px`);
      }
    });
  };
  const requestPaint = () => {if (!stopped && !frame && !document.hidden) frame=requestAnimationFrame(paint);};
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? active.add(entry.target) : active.delete(entry.target));
    requestPaint();
  },{rootMargin:'120px 0px'});
  records.forEach((record,element) => observer.observe(element));
  window.addEventListener('scroll',requestPaint,{passive:true});
  window.addEventListener('resize',requestPaint,{passive:true});
  document.addEventListener('visibilitychange',requestPaint);
  const stop = () => {
    stopped=true;
    observer.disconnect();
    cancelAnimationFrame(frame);
    highlights.forEach(mark=>mark.style.setProperty('--highlight-progress','1'));
    phrases.forEach(phrase=>phrase.querySelectorAll('.scroll-word').forEach(word=>word.style.setProperty('--word-progress','1')));
    rails.forEach(rail=>rail.style.setProperty('--step-progress','1'));
  };
  prefersReducedMotion.addEventListener('change',event=>{if(event.matches) stop();});
  requestPaint();
}
const compactBeats = [
  ['.compact-outcome','panel'],['.compact-outcome > p','copy'],
  ['.compact-outcome > span','copy'],['.compact-team','copy'],['.compact-map','question']
];
compactBeats.forEach(([selector,kind])=>document.querySelectorAll(selector).forEach((element,index)=>registerFlow(element,kind,index*75)));
if (!document.documentElement.classList.contains('page-loading')) startCompactMotion();
else document.addEventListener('page-ready',startCompactMotion,{once:true});
const compactMap = document.querySelector('.compact-map');
compactMap?.addEventListener('toggle',()=>{
  if(compactMap.open){initializeLocalityMap();requestAnimationFrame(()=>localityMap?.invalidateSize({pan:false}));}
});

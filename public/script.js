'use strict';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Progress follows the essential images and fonts, with a fail-open time limit.
const loaderTrack = document.getElementById('load-progress');
const loaderPercent = document.getElementById('load-percent');
const loadImage = image => image.decode ? image.decode() : new Promise(resolve => {
  if (image.complete) resolve();
  else { image.addEventListener('load', resolve, { once: true }); image.addEventListener('error', resolve, { once: true }); }
});
const essentials = [
  loadImage(document.querySelector('.loader-logo')),
  loadImage(document.querySelector('.photo-crop img')),
  ...(document.fonts ? [
    document.fonts.load('400 1em Nunito'),
    document.fonts.load('800 1em Nunito')
  ] : [])
];
let loadedEssentials = 0;
const updateLoadProgress = () => {
  const progress = Math.round(loadedEssentials / essentials.length * 100);
  loaderTrack.style.setProperty('--load-progress', progress / 100);
  loaderTrack.setAttribute('aria-valuenow', String(progress));
  loaderPercent.textContent = `${progress}%`;
};
Promise.allSettled(essentials.map(promise => Promise.resolve(promise).finally(() => {
  loadedEssentials += 1;
  updateLoadProgress();
}))).then(() => {
  const remaining = Math.max(0, 550 - (performance.now() - window.pageLoadStarted));
  window.setTimeout(() => {
    document.documentElement.classList.remove('page-loading');
    window.clearTimeout(window.pageLoadFailsafe);
    document.querySelector('.page-loader').setAttribute('aria-hidden', 'true');
    document.dispatchEvent(new Event('page-ready'));
  }, remaining + (prefersReducedMotion.matches ? 0 : 320));
});

// Motion is composed per element, and starts after the loader has lifted.
const flowTargets = new Map();
const flowTriggerTargets = new Map();
const compactFlow = window.matchMedia('(max-width: 760px)');
let flowObserver;
let flowStarted = false;
let flowFrame = 0;
let depthObserver;
const visibleDepthScenes = new Set();
function registerFlow(element, kind = 'copy', delay = 0, trigger = element) {
  if (!element || flowTargets.has(element)) return;
  element.dataset.flow = kind;
  element.style.setProperty('--flow-delay', `${delay}ms`);
  flowTargets.set(element, trigger);
  if (!flowTriggerTargets.has(trigger)) flowTriggerTargets.set(trigger, []);
  flowTriggerTargets.get(trigger).push(element);
}
function revealFlow(trigger, immediate = false) {
  (flowTriggerTargets.get(trigger) || []).forEach(element => {
    if (immediate) element.classList.add('flow-immediate');
    element.classList.add('flow-visible');
  });
  flowObserver?.unobserve(trigger);
}
function prepareFlow() {
  document.querySelectorAll('main h1, main h2').forEach(heading => {
    const accessibleText = heading.innerText.replace(/\s+/g, ' ').trim();
    const lines = [];
    let nodes = [];
    const flushLine = () => {
      if (!nodes.some(node => node.textContent.trim())) return;
      const mask = document.createElement('span');
      mask.className = 'flow-line';
      mask.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.className = 'flow-line-inner';
      nodes.forEach(node => inner.appendChild(node));
      mask.appendChild(inner);
      lines.push(mask);
      nodes = [];
    };
    [...heading.childNodes].forEach(node => {
      if (node.nodeName === 'BR') flushLine();
      else nodes.push(node.cloneNode(true));
    });
    flushLine();
    heading.replaceChildren(...lines);
    heading.classList.add('flow-heading');
    heading.setAttribute('aria-label', accessibleText);
    lines.forEach((mask, index) => registerFlow(mask.firstElementChild, 'line', index * 110, mask));
  });
  document.querySelectorAll('main .eyebrow').forEach(element => registerFlow(element, 'label'));
  document.querySelectorAll('.hero-description, .hero-note, .hero-status > span, .hero-visual figcaption, .section-heading > p:not(.eyebrow), .story-bridge, .goals-note, .program-heading > p:not(.eyebrow), .program-conditions, .directory-link, .collage-aside, .collage-note, .reviews-heading > p, .testimonials-note, .faq-intro > p:not(.eyebrow), .faq-contact, .contact-copy > p:not(.eyebrow), .locations-heading > p, .locality-photo figcaption, .footer > *').forEach(element => registerFlow(element, 'copy', element.closest('.hero-copy') ? 180 : 100));
  registerFlow(document.querySelector('.hero-actions'), 'action', 260);
  document.querySelectorAll('.hero-quotes blockquote').forEach((element, index) => registerFlow(element, 'quote', index * 120));
  registerFlow(document.querySelector('.media-heading'), 'label');
  registerFlow(document.querySelector('.media-window'), 'ribbon', 90);
  registerFlow(document.querySelector('.photo-crop'), 'media', 160);
  document.querySelector('.photo-crop img')?.classList.add('flow-surface');
  document.querySelectorAll('.moment-grid').forEach(grid => {
    [...grid.children].forEach((card, index) => {
      const beat = compactFlow.matches ? 0 : index * 125;
      registerFlow(card, 'lift', beat);
      registerFlow(card.querySelector('img'), 'picture', beat + 30, card);
      registerFlow(card.querySelector('h3'), 'copy', beat + 110, card);
      registerFlow(card.querySelector('p'), 'copy', beat + 200, card);
    });
  });
  document.querySelectorAll('.program-stats > div').forEach((element, index) => registerFlow(element, 'stat', index * 110));
  document.querySelectorAll('.program-steps > li').forEach((element, index) => {
    const beat = compactFlow.matches ? 0 : index * 110;
    registerFlow(element, 'lift', beat);
    registerFlow(element.querySelector('span'), 'label', beat, element);
    registerFlow(element.querySelector('h3'), 'copy', beat + 90, element);
    registerFlow(element.querySelector('p'), 'copy', beat + 160, element);
  });
  document.querySelectorAll('.person').forEach((element, index) => {
    registerFlow(element.querySelector('.portrait'), 'portrait', index * 130, element);
    registerFlow(element.querySelector('h3'), 'copy', index * 130 + 150, element);
    registerFlow(element.querySelector('p'), 'copy', index * 130 + 210, element);
  });
  document.querySelectorAll('.session-scene').forEach((element, index) => {
    registerFlow(element, 'media', (index % (compactFlow.matches ? 2 : 4)) * 90);
    element.querySelector('img')?.classList.add('flow-surface');
  });
  document.querySelectorAll('.review-video').forEach((element, index) => {
    const beat = (index % 2) * 130;
    registerFlow(element, 'media', beat);
    registerFlow(element.querySelector('figcaption'), 'copy', beat + 160, element);
  });
  document.querySelectorAll('.faq-item').forEach((element, index) => registerFlow(element, 'question', compactFlow.matches ? 0 : index * 65));
  registerFlow(document.querySelector('.faq-mark'), 'ornament', 160);
  const contactPanel = document.querySelector('.contact-panel');
  registerFlow(contactPanel, 'panel', 100);
  contactPanel?.querySelectorAll('h3, .contact-locality, .city-detail, .button, .contact-note, .contact-details').forEach((element, index) => registerFlow(element, element.classList.contains('button') ? 'action' : 'copy', 180 + index * 55, contactPanel));
  const localImage = document.querySelector('.locality-photo > img');
  if (localImage) {
    const frame = document.createElement('div');
    frame.className = 'flow-photo-frame';
    localImage.before(frame);
    frame.appendChild(localImage);
    localImage.classList.add('flow-surface');
    registerFlow(frame, 'media');
  }
  registerFlow(document.querySelector('.locations-card'), 'panel', 100);
  const venueCard = document.querySelector('.venue-card');
  if (venueCard) {
    registerFlow(venueCard, 'panel', 120);
    venueCard.querySelectorAll('p, h3, address, a').forEach((element, index) => registerFlow(element, 'copy', 150 + index * 45, venueCard));
  }
}
function stopFlow() {
  document.documentElement.classList.remove('flow-on');
  flowObserver?.disconnect();
  depthObserver?.disconnect();
  visibleDepthScenes.clear();
  cancelAnimationFrame(flowFrame);
  flowFrame = 0;
  flowTargets.forEach((trigger, element) => element.classList.add('flow-visible'));
}
function updateFlowDepth() {
  flowFrame = 0;
  if (prefersReducedMotion.matches || document.hidden) return;
  const height = window.innerHeight;
  const range = Math.max(1, document.documentElement.scrollHeight - height);
  const progress = Math.min(1, Math.max(0, window.scrollY / range));
  // Read all positions before writing styles, so scrolling avoids forced layout.
  const shifts = [...visibleDepthScenes].map(element => {
    const box = element.getBoundingClientRect();
    const position = (height * .5 - box.top - box.height * .5) / (height + box.height);
    return [element, Math.max(-1, Math.min(1, position)) * (compactFlow.matches ? 18 : 42)];
  });
  document.documentElement.style.setProperty('--reading-progress', String(progress));
  shifts.forEach(([element, shift]) => element.style.setProperty('--scene-drift', `${shift.toFixed(2)}px`));
}
function requestFlowDepth() {
  if (flowStarted && !prefersReducedMotion.matches && !flowFrame) flowFrame = requestAnimationFrame(updateFlowDepth);
}
function startFlow() {
  if (flowStarted) return;
  flowStarted = true;
  if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) return;
  try {
    prepareFlow();
    flowObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) revealFlow(entry.target, entry.boundingClientRect.bottom < 0);
      });
    }, {threshold: 0, rootMargin: `0px 0px -${compactFlow.matches ? 100 : 48}px 0px`});
    const track = document.createElement('div');
    track.className = 'reading-progress';
    track.setAttribute('aria-hidden', 'true');
    document.body.appendChild(track);
    document.documentElement.classList.add('flow-on');
    flowTriggerTargets.forEach((targets, trigger) => flowObserver.observe(trigger));
    depthObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visibleDepthScenes.add(entry.target) : visibleDepthScenes.delete(entry.target));
      requestFlowDepth();
    }, {rootMargin: '100px 0px'});
    document.querySelectorAll('.hero, .family-goals, .locality-photo').forEach(element => depthObserver.observe(element));
    window.addEventListener('scroll', requestFlowDepth, {passive: true});
    window.addEventListener('resize', requestFlowDepth, {passive: true});
    document.addEventListener('focusin', event => {
      for (let element = event.target; element && element !== document.body; element = element.parentElement) {
        if (flowTargets.has(element)) revealFlow(flowTargets.get(element), true);
      }
    });
    requestFlowDepth();
  } catch (error) {
    stopFlow();
    console.warn('Scroll motion skipped; all page content remains visible.', error);
  }
}
document.addEventListener('page-ready', startFlow, {once: true});
if (!document.documentElement.classList.contains('page-loading')) startFlow();

// Each campaign owns a single location; no city switch inside the landing page.
const campaignCity = document.body.dataset.city;
const campaignCoordinates = campaignCity === 'Higüey' ? [18.6131313, -68.7114484] : [18.5565510, -68.3691611];
const mapElement = document.getElementById('locations-map');
const mapFallback = mapElement.querySelector('.map-fallback');
let localityMap;
function centerLocality() {
  localityMap?.flyTo(campaignCoordinates, 11, { animate: !prefersReducedMotion.matches, duration: .85 });
}
function initializeLocalityMap() {
  if (localityMap || !window.L) return;
  localityMap = L.map(mapElement, { scrollWheelZoom: false, zoomControl: false, attributionControl: false, dragging: !L.Browser.mobile }).setView(campaignCoordinates, 11);
  mapFallback.hidden = true;
  L.control.zoom({ position: 'bottomright', zoomInTitle: 'Acercar', zoomOutTitle: 'Alejar' }).addTo(localityMap);
  L.control.attribution({ position: 'bottomleft', prefix: false }).addTo(localityMap);
  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 7, maxZoom: 16,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
  }).addTo(localityMap);
  let successfulTiles = 0;
  let failedTiles = 0;
  tiles.on('tileload', () => { successfulTiles += 1; mapFallback.hidden = true; });
  tiles.on('tileerror', () => {
    failedTiles += 1;
    if (successfulTiles === 0 && failedTiles >= 3) {
      mapFallback.textContent = 'No se pudo cargar el mapa. Consulta la dirección de la sede con nuestro equipo.';
      mapFallback.hidden = false;
    }
  });
  if (mapElement.dataset.showMarker !== 'false') {
  const marker = L.marker(campaignCoordinates, {
    title: `Jornada en ${campaignCity}`, keyboard: true,
    icon: L.divIcon({ className: 'locality-marker map-marker-selected', html: '<span class="map-logo"><img src="/assets/logo.png" alt=""></span>', iconSize: [142, 46], iconAnchor: [71, 23] })
  }).addTo(localityMap).bindTooltip(campaignCity, { permanent: true, direction: 'top', offset: [0, -27], className: 'locality-label' });
  marker.getElement()?.setAttribute('aria-label', `Centrar mapa de ${campaignCity}`);
  marker.on('click', centerLocality);
  }
}
document.getElementById('map-overview').addEventListener('click', () => { initializeLocalityMap(); centerLocality(); });
if ('IntersectionObserver' in window) {
  const localityObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) { initializeLocalityMap(); localityObserver.disconnect(); }
  });
  localityObserver.observe(mapElement);
} else initializeLocalityMap();

// Every collage and testimonial video starts silently and repeats while visible.
const loopingVideos = [...document.querySelectorAll('video[data-loop-src], video[data-review-src]')];
const reviewVideos = [...document.querySelectorAll('video[data-review-src]')];
const collageMotion = document.querySelector('.collage-motion');
const visibleLoops = new Set();
const pendingPlayback = new WeakSet();
let videosPaused = false;
function canStartVideo(video) {
  return !videosPaused && !document.hidden && visibleLoops.has(video);
}
function startVideo(video) {
  if (!canStartVideo(video) || pendingPlayback.has(video) || !video.paused) return;
  pendingPlayback.add(video);
  video.dataset.playbackState = 'starting';
  Promise.resolve(video.play()).then(() => {
    video.dataset.playbackState = 'playing';
    // A scroll or tab change can happen while the play request is pending.
    if (!canStartVideo(video)) video.pause();
  }).catch(error => {
    video.dataset.playbackState = error.name === 'NotAllowedError' ? 'blocked' : 'waiting';
  }).finally(() => pendingPlayback.delete(video));
}
loopingVideos.forEach(video => {
  // Set the properties as well as the HTML attributes before requesting playback.
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.loop = true;
  ['loadeddata', 'canplay'].forEach(event => video.addEventListener(event, () => startVideo(video)));
  video.addEventListener('playing', () => {video.dataset.playbackState = 'playing';});
});
function syncVideoPlayback() {
  collageMotion.hidden = false;
  collageMotion.setAttribute('aria-pressed', String(videosPaused));
  collageMotion.textContent = videosPaused ? 'Reanudar videos' : 'Pausar videos';
  loopingVideos.forEach(video => {
    if (canStartVideo(video)) startVideo(video);
    else video.pause();
  });
}
function syncSoundButtons() {
  document.querySelectorAll('.review-sound').forEach(button => {
    const video = button.closest('.review-video').querySelector('video');
    button.setAttribute('aria-pressed',String(!video.muted));
    button.textContent = video.muted ? 'Activar sonido' : 'Silenciar';
    button.setAttribute('aria-label',`${video.muted ? 'Activar sonido' : 'Silenciar'}: ${button.closest('figcaption').querySelector('strong').textContent}`);
  });
}
document.querySelectorAll('.review-sound').forEach(button => button.addEventListener('click', () => {
  const selected = button.closest('.review-video').querySelector('video');
  const enable = selected.muted;
  reviewVideos.forEach(video => {video.muted = video !== selected || !enable;});
  syncSoundButtons();
  syncVideoPlayback();
}));
collageMotion.addEventListener('click', () => {videosPaused = !videosPaused;syncVideoPlayback();});
if ('IntersectionObserver' in window) {
  const loopObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleLoops.add(entry.target);
      else {
        visibleLoops.delete(entry.target);
        entry.target.muted = true;
      }
    });
    syncSoundButtons();
    syncVideoPlayback();
  }, {threshold:0, rootMargin:'240px 0px'});
  loopingVideos.forEach(video => loopObserver.observe(video));
} else loopingVideos.forEach(video => visibleLoops.add(video));
syncVideoPlayback();
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {reviewVideos.forEach(video => {video.muted = true;});syncSoundButtons();}
  syncVideoPlayback();
});
window.addEventListener('pageshow', syncVideoPlayback);
// Retry a browser-blocked request on a normal page gesture, without requiring
// a video click. These listeners never intercept scrolling or navigation.
document.addEventListener('pointerdown', syncVideoPlayback, {passive:true});
document.addEventListener('keydown', syncVideoPlayback);
prefersReducedMotion.addEventListener('change', event => {
  syncVideoPlayback();
  if (event.matches) {
    stopFlow();
  }
});

// Native details still work without JavaScript; enhancements animate both directions.
const faqItems = [...document.querySelectorAll('.faq-item')];
const faqAnimations = new WeakMap();
function setFaqOpen(item, opening) {
  const startHeight = item.getBoundingClientRect().height;
  faqAnimations.get(item)?.cancel();
  item.style.height = '';
  item.classList.toggle('is-open',opening);
  item.dataset.faqState = opening ? 'open' : 'closed';
  if (opening) item.open = true;
  const endHeight = opening ? item.getBoundingClientRect().height : item.querySelector('summary').getBoundingClientRect().height + 1;
  if (prefersReducedMotion.matches || !item.animate) {item.open = opening;return;}
  const animation = item.animate([{height:`${startHeight}px`},{height:`${endHeight}px`}],{duration:460,easing:'cubic-bezier(.22,1,.36,1)'});
  faqAnimations.set(item,animation);
  animation.onfinish = () => {if (faqAnimations.get(item) !== animation) return;item.open = opening;faqAnimations.delete(item);};
}
faqItems.forEach(item => item.querySelector('summary').addEventListener('click', event => {
  event.preventDefault();
  const opening = item.dataset.faqState ? item.dataset.faqState !== 'open' : !item.open;
  if (opening) faqItems.filter(other => other !== item && (other.open || other.classList.contains('is-open'))).forEach(other => setFaqOpen(other,false));
  setFaqOpen(item,opening);
}));

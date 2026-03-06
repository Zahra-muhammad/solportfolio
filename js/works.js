/* ══════════════════════════════════════
   GALLERY — main script
   ══════════════════════════════════════ */

/* ─── DATA ─────────────────────────── */
var VIDEOS = [
  { id:'001', label:'Project I',   src:'', desc:'A visual exploration of form, light, and motion.',  tags:['Motion Design','3D','Art Direction'],        year:'2025', client:'Self-initiated',       category:'Motion',       duration:'1:45' },
  { id:'002', label:'Project II',  src:'', desc:'An immersive campaign built around stillness.',      tags:['Film','Brand','Campaign'],                   year:'2025', client:'Confidential',         category:'Film',         duration:'2:10' },
  { id:'003', label:'Project III', src:'', desc:'Product meets poetry.',                              tags:['Product','Commercial','CGI'],                year:'2024', client:'On Running',           category:'Commercial',   duration:'0:60' },
  { id:'004', label:'Project IV',  src:'', desc:'An experimental short.',                             tags:['Experimental','Short Film'],                 year:'2024', client:'Self-initiated',       category:'Experimental', duration:'3:20' },
  { id:'005', label:'Project V',   src:'', desc:'A title sequence.',                                  tags:['Title Sequence','Typography','VFX'],          year:'2025', client:'Film Production',     category:'Titles',       duration:'1:15' },
  { id:'006', label:'Project VI',  src:'', desc:'Documentary meets abstraction.',                     tags:['Documentary','Craft','Portraiture'],         year:'2024', client:'Cultural Foundation', category:'Documentary',  duration:'4:00' }
];

var GRADS = [
  'linear-gradient(140deg,#111,#1d1d1d)',
  'linear-gradient(140deg,#0e0e0e,#1a1a1a)',
  'linear-gradient(140deg,#131313,#202020)',
  'linear-gradient(140deg,#0c0c0c,#181818)',
  'linear-gradient(140deg,#151515,#222)',
  'linear-gradient(140deg,#101010,#1c1c1c)'
];

/* ─── CURSOR ────────────────────────── */
var cursorDot  = document.getElementById('cursorDot');
var cursorSize = 8;

document.addEventListener('mousemove', function(e) {
  gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power3.out' });
});

function setCursorSize(size, dur) {
  gsap.to(cursorDot, { width: size, height: size, duration: dur || 0.35, ease: 'expo.out' });
}

document.addEventListener('mousedown', function() { setCursorSize(5, 0.15); });
document.addEventListener('mouseup',   function() { setCursorSize(cursorSize, 0.35); });

document.addEventListener('mouseover', function(e) {
  if (e.target.closest('a, button, .nav-arrow, .header-right, .video-item')) {
    cursorSize = 20; setCursorSize(20);
  }
});
document.addEventListener('mouseout', function(e) {
  if (e.target.closest('a, button, .nav-arrow, .header-right, .video-item')) {
    cursorSize = 8; setCursorSize(8);
  }
});

/* ─── NOISE CANVAS ──────────────────── */
(function() {
  var c   = document.getElementById('noiseCanvas');
  var ctx = c.getContext('2d');
  function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  (function draw() {
    var id = ctx.createImageData(c.width, c.height), d = id.data;
    for (var i = 0; i < d.length; i += 4) {
      var v = Math.random() * 255 | 0;
      d[i] = d[i+1] = d[i+2] = v; d[i+3] = 255;
    }
    ctx.putImageData(id, 0, 0);
    requestAnimationFrame(draw);
  })();
})();

/* ─── BUILD TRACK ───────────────────── */
var SETS = 5, MID = Math.floor(SETS / 2);
var track    = document.getElementById('galleryTrack');
var allItems = [];

for (var s = 0; s < SETS; s++) {
  VIDEOS.forEach(function(v, i) {
    var item  = document.createElement('div');
    item.className    = 'video-item';
    item.dataset.index = i;

    var inner = document.createElement('div'); inner.className = 'video-inner';
    var ph    = document.createElement('div'); ph.className = 'video-placeholder';
    ph.style.background = GRADS[i]; ph.textContent = v.id;
    inner.appendChild(ph);

    var lbl  = document.createElement('div'); lbl.className  = 'video-label';  lbl.textContent = v.label;
    var hint = document.createElement('div'); hint.className = 'click-hint';   hint.innerHTML  = '<span>View</span>';

    item.appendChild(inner); item.appendChild(lbl); item.appendChild(hint);
    track.appendChild(item);
    allItems.push(item);
  });
}

/* ─── SCROLL ENGINE ─────────────────── */
var scrollLocked  = false;
var currentIndex  = 0;
var infoPanelOpen = false;
var isFullOpen    = false;

function itemH() { return window.innerHeight * 0.58 + 12; }
function setH()  { return itemH() * VIDEOS.length; }
function origY() { return window.innerHeight / 2 - itemH() / 2; }

var baseOffset = -(MID * setH());
gsap.set(track, { y: baseOffset + origY() });

function updatePosition(animated) {
  var y = baseOffset + origY() - currentIndex * itemH();
  if (animated) gsap.to(track, { y: y, duration: 0.8, ease: 'expo.out' });
  else          gsap.set(track, { y: y });
  updateUI();
}

function updateUI() {
  document.getElementById('counterMain').textContent = String(currentIndex + 1).padStart(3, '0');
  allItems.forEach(function(item) {
    var d = Math.abs(parseInt(item.dataset.index) - currentIndex);
    gsap.to(item, { scale: d === 0 ? 1.06 : 0.94, opacity: d === 0 ? 1 : 0.55, duration: 0.6, ease: 'power3.out' });
  });
  document.getElementById('progressBar').style.height = ((currentIndex + 1) / VIDEOS.length * 100) + '%';
}

function stepBy(dir) {
  if (scrollLocked) return;
  currentIndex = (currentIndex + dir + VIDEOS.length) % VIDEOS.length;
  updatePosition(true);
}

document.getElementById('arrowUp').addEventListener('click',   function() { stepBy(-1); });
document.getElementById('arrowDown').addEventListener('click', function() { stepBy(1); });

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  stepBy(-1);
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') stepBy(1);
  if (e.key === 'Escape') {
    if (infoPanelOpen) closeInfoPanel();
    else if (isFullOpen) closeFullscreen();
  }
});

window.addEventListener('wheel',  function(e) { e.preventDefault(); }, { passive: false });
window.addEventListener('resize', function()  { updatePosition(false); });

/* ─── GET FOCUSED CARD RECT ─────────── */
function getCardRect() {
  var midY = window.innerHeight / 2;
  var best = null, bestDist = Infinity;
  allItems.forEach(function(item) {
    if (parseInt(item.dataset.index) !== currentIndex) return;
    var r = item.getBoundingClientRect();
    var d = Math.abs((r.top + r.height / 2) - midY);
    if (d < bestDist) { bestDist = d; best = r; }
  });
  return best;
}

/* ─── ZOOM OPEN / CLOSE ─────────────── */
var fullscreen = document.getElementById('fullscreen');
var fullBg     = document.getElementById('fullBg');
var fullTitle  = document.getElementById('fullTitle');
var fsNum      = document.getElementById('fsNum');
var fsName     = document.getElementById('fsName');
var fullMeta   = document.getElementById('fullMeta');
var fullHeader = document.getElementById('fullHeader');
var zoomClone  = document.getElementById('zoomClone');
var zoomInner  = document.getElementById('zoomCloneInner');

function buildFullBg(idx) {
  fullBg.innerHTML = '';
  var ph = document.createElement('div');
  ph.className = 'fs-placeholder';
  ph.style.background = GRADS[idx];
  ph.textContent = VIDEOS[idx].id;
  fullBg.appendChild(ph);
}

function openFullscreen(idx) {
  if (scrollLocked) return;
  scrollLocked = true;

  var v    = VIDEOS[idx];
  var rect = getCardRect();
  if (!rect) { scrollLocked = false; return; }

  buildFullBg(idx);
  fsNum.textContent  = v.id + ' / 006';
  fsName.textContent = v.label;
  fullTitle.textContent = v.label;
  gsap.set(fullscreen, { opacity: 0 });
  gsap.set(fullMeta,   { opacity: 0, y: 12 });
  gsap.set(fullHeader, { opacity: 0 });

  zoomInner.style.background = GRADS[idx];
  zoomInner.textContent = v.id;
  gsap.set(zoomClone, {
    display: 'block',
    left: rect.left, top: rect.top,
    width: rect.width, height: rect.height
  });

  gsap.to(zoomClone, {
    left: 0, top: 0,
    width: window.innerWidth, height: window.innerHeight,
    duration: 0.75, ease: 'expo.inOut',
    onComplete: function() {
      fullscreen.classList.add('active');
      gsap.set(fullscreen, { opacity: 1 });
      gsap.set(zoomClone,  { display: 'none' });
      isFullOpen = true;

      gsap.to(fullMeta,   { opacity: 1, y: 0, duration: 0.5, delay: 0.05, ease: 'power2.out' });
      gsap.to(fullHeader, {
        opacity: 1, duration: 0.4, delay: 0.05, ease: 'power2.out',
        onStart: function() { fullHeader.style.pointerEvents = 'all'; }
      });
    }
  });
}

function closeFullscreen() {
  if (!isFullOpen) return;
  closeInfoPanel();

  var rect = getCardRect();
  if (!rect) { scrollLocked = false; return; }

  gsap.to(fullMeta,   { opacity: 0, y: 12, duration: 0.2 });
  gsap.to(fullHeader, {
    opacity: 0, duration: 0.2,
    onComplete: function() { fullHeader.style.pointerEvents = 'none'; }
  });

  zoomInner.style.background = GRADS[currentIndex];
  zoomInner.textContent = VIDEOS[currentIndex].id;
  gsap.set(zoomClone, {
    display: 'block',
    left: 0, top: 0,
    width: window.innerWidth, height: window.innerHeight
  });

  gsap.set(fullscreen, { opacity: 0 });
  fullscreen.classList.remove('active');
  isFullOpen = false;

  gsap.to(zoomClone, {
    left: rect.left, top: rect.top,
    width: rect.width, height: rect.height,
    duration: 0.72, ease: 'expo.inOut',
    onComplete: function() {
      gsap.set(zoomClone, { display: 'none' });
      scrollLocked = false;
    }
  });
}

document.getElementById('btnGrid').addEventListener('click', closeFullscreen);

track.addEventListener('click', function(e) {
  if (scrollLocked) return;
  var item = e.target.closest('.video-item');
  if (!item) return;
  var idx = parseInt(item.dataset.index);
  if (idx !== currentIndex) { stepBy(idx > currentIndex ? 1 : -1); return; }
  openFullscreen(idx);
});

/* ─── INFO PANEL ────────────────────── */
function openInfoPanel(i) {
  var v = VIDEOS[i];
  document.getElementById('infoIndex').textContent    = v.id + ' / 006';
  document.getElementById('infoTitle').textContent    = v.label;
  document.getElementById('infoDesc').textContent     = v.desc;
  document.getElementById('infoYear').textContent     = v.year;
  document.getElementById('infoClient').textContent   = v.client;
  document.getElementById('infoCategory').textContent = v.category;
  document.getElementById('infoDuration').textContent = v.duration;

  var tagsEl = document.getElementById('infoTags');
  tagsEl.innerHTML = '';
  v.tags.forEach(function(t) {
    var span = document.createElement('span');
    span.className = 'info-tag';
    span.textContent = t;
    tagsEl.appendChild(span);
  });

  gsap.to('#infoPanel', { x: 0, duration: 0.55, ease: 'expo.out' });
  infoPanelOpen = true;
}

function closeInfoPanel() {
  if (!infoPanelOpen) return;
  gsap.to('#infoPanel', { x: '100%', duration: 0.45, ease: 'expo.in' });
  infoPanelOpen = false;
}

document.getElementById('btnInfo').addEventListener('click', function() {
  if (infoPanelOpen) closeInfoPanel();
  else openInfoPanel(currentIndex);
});
document.getElementById('infoPanelClose').addEventListener('click', closeInfoPanel);

/* ─── INTRO SEQUENCE ────────────────── */
updateUI();

gsap.timeline()
  .to('#introText', { opacity: 1, y: 0,   duration: 1,   ease: 'power3.out' })
  .to({},           {                      duration: 0.8 })
  .to('#introText', { opacity: 0, y: -28, duration: 0.6, ease: 'power2.in' })
  .to('#introOverlay', {
    opacity: 0, duration: 0.5, ease: 'power2.inOut',
    onComplete: function() { document.getElementById('introOverlay').style.display = 'none'; }
  })
  .to('#gridHeader', { opacity: 1, duration: 0.5 }, '-=0.1')
  .to('#navArrows',  {
    opacity: 1, duration: 0.4,
    onComplete: function() { document.getElementById('navArrows').style.pointerEvents = 'all'; }
  }, '-=0.3');
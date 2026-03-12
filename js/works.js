/* ══════════════════════════════════════
   GALLERY — main script
   ══════════════════════════════════════ */

/* ─── DATA ──────────────────────────── */
var COLLECTIONS = {

  websites: [
    {
      id:'W01', label:'NIKE',
      src:'../pictures/01-56-30.mp4',
      thumb:'../pictures/NIKE (7).png',
      desc:'A visual exploration of form, light, and motion.',
      tags:['Motion Design','3D','Art Direction'],
      year:'2025', client:'Self-initiated', category:'Motion', duration:'1:45'
    },
    {
      id:'W02', label:'Marong hospital australia',
      src:'../selectedwork/marong hospital australia (1).mp4',
      thumb:'../selectedwork/marong hospital australia (2).png',
      desc:'An immersive campaign built around stillness.',
      tags:['Film','Brand','Campaign'],
      year:'2025', client:'Confidential', category:'Film', duration:'2:10'
    },
    {
      id:'W03', label:'Website III',
      src:'../selectedwork/BATHSPA SPORTS.mp4', thumb:'../selectedwork/bss logo.png',
      desc:'Motion-heavy site with WebGL transitions.',
      tags:['WebGL','GSAP','UI'],
      year:'2024', client:'Creative Agency', category:'Web', duration:'—'
    }
  ],

  sketches: [
    {
      id:'S01', label:'The Gilded Overgrowth',
      thumb:'../selectedwork/Gilded Overgrowth.png',
      img:'../selectedwork/IMG_0032.jpeg',
      desc:'An exploration of the tension between man-made structure and the relentless crawl of magic. This piece depicts a ceremonial urn being reclaimed by enchanted flora, where every pencil stroke mimics the flowing movement of silk and the sharp precision of silverwork. It represents the beauty found in ruins and the slow, graceful decay of a forgotten era.',
      tags:['Illustration','Sketch','Process'],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S02', label:'Liturgy of the Obsidian Bloom',
      thumb:'../selectedwork/sabr.png',
      img:'../selectedwork/IMG_0022.jpeg',
      desc:'A sophisticated exploration of botanical gothicism. This composition utilizes deep ink-like shadows and fluid acanthus scrolls to create a sense of movement that feels both graceful and heavy. It represents the "unseen garden"—the beauty that thrives in total darkness and the elegant power of nature when left to its own magical devices.',
      tags:['Drawing','Anatomy','Process'],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S03', label:'Melting Hand',
      thumb:'../selectedwork/Melting hand (1).png',
      img:'../selectedwork/IMG_0027.jpeg',
      desc:'An exploration of physical and metaphysical dissolution. This work captures the precise moment where the human form yields to an unseen corrosive force, blurring the line between solid matter and fluid energy. Through heavy ink shadows and frantic, detailed hatching, Melting Hand serves as a visual metaphor for the fleeting nature of the self and the inevitable transition into the unknown.',
      tags:['Experimental','Ink','Process'],
      year:'2024', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S04', label:'Whisper of the Hellebore',
      thumb:'../selectedwork/Whisper of the Hellebore.png',
      img:'../selectedwork/IMG_0030.jpeg',
      desc:'Drawing on the tradition of classical botanical illustration, this work transforms a simple garden specimen into a mystical artifact. The gentle overlapping of leaves and the downward tilt of the blooms suggest a hidden world of quiet intention. It is a meditation on the subtle power of growth and the secrets kept by the earth in the early hours of dawn.',
      tags:['Illustration','Sketch','Process'],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S05', label:'Dirge of the Iron Mask',
      thumb:'../selectedwork/Dirge of the Iron Mask.png',
      img:'../selectedwork/IMG_0029.jpeg',
      desc:'A cinematic study of sound and silence. This composition captures a masked figure in a moment of ritualistic performance, where the flute serves as a conduit for ancient, unseen forces. By framing the figure between the sharpness of a blade and the deep shadows of the background, the work explores the duality of the creator and the destroyer. It is an invitation into a world where music is as dangerous as steel.',
      tags:['Drawing','Anatomy','Process'],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S06', label:'Asphalt Anthology: A Custom Decal Series',
      thumb:'../selectedwork/Asphalt Anthology A Custom Decal Series.png',
      img:'../selectedwork/IMG_0028.jpeg',
      desc:'Experimental mark-making.',
      tags:['Experimental','Ink','Process'],
      year:'2024', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S07', label:'Nocturne of the Pale Bloom',
      thumb:'../selectedwork/Nocturne of the Pale Bloom.png',
      img:'../selectedwork/IMG_0023.jpeg',
      desc:'Part of a series exploring "The Shadow Garden," this work focuses on the dramatic contrast between organic softness and sharp, precise linework. The composition emphasizes the elegant, almost haunting curves of the Lily\'s silhouette against the void of the page. It is a meditation on the fleeting life of a flower, rendered with a permanence that feels both ancient and magical.',
      tags:['Drawing','Anatomy','Process'],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S08', label:'Cipher of the Unseen Eye',
      thumb:'../selectedwork/Cipher of the Unseen Eye.png',
      img:'../selectedwork/IMG_0026.jpeg',
      desc:'Inspired by ancient sigils and arcane symbolism, Cipher of the Unseen Eye acts as a visual hypnotic. The layered, swirling patterns evoke a sense of ancient wisdom being protected by a maze of ink. It is a study in "automatic drawing," where the subconscious mind takes over to create a portal of obsidian curves and shadowed echoes, inviting the viewer to look closer into the void.',
      tags:['Experimental','Ink','Process'],
      year:'2024', client:'Self-initiated', category:'Sketch', duration:'—'
    }
  ],

  posters: [
    {
      id:'P01', label:'Poster I',
      thumb:'',
      img:'',
      desc:'Product meets poetry.',
      tags:['Product','CGI','Print'],
      year:'2024', client:'On Running', category:'Print', duration:'—'
    },
    {
      id:'P02', label:'Poster II',
      thumb:'',
      img:'',
      desc:'A title sequence turned into print.',
      tags:['Typography','VFX','Print'],
      year:'2025', client:'Film Production', category:'Print', duration:'—'
    },
    {
      id:'P03', label:'Poster III',
      thumb:'',
      img:'',
      desc:'Documentary meets abstraction.',
      tags:['Documentary','Portraiture','Print'],
      year:'2024', client:'Cultural Foundation', category:'Print', duration:'—'
    }
  ],

  other: [
    /* ── Figma ── */
    { _sectionHeader: 'Figma' },
    {
      id:'F01', label:'Figma Project I',
      src:'', thumb:'',
      desc:'',
      tags:['Figma','UI','Design'],
      year:'', client:'', category:'Figma', duration:'—'
    },
    {
      id:'F02', label:'Figma Project II',
      src:'', thumb:'',
      desc:'',
      tags:['Figma','Prototype'],
      year:'', client:'', category:'Figma', duration:'—'
    },

    /* ── Android Studio ── */
    { _sectionHeader: 'Android Studio' },
    {
      id:'A01', label:'Android Project I',
      src:'', thumb:'',
      desc:'',
      tags:['Android','App','Mobile'],
      year:'', client:'', category:'Android Studio', duration:'—'
    },
    {
      id:'A02', label:'Android Project II',
      src:'', thumb:'',
      desc:'',
      tags:['Android','UI'],
      year:'', client:'', category:'Android Studio', duration:'—'
    },

    /* ── Unity ── */
    { _sectionHeader: 'Unity' },
    {
      id:'U01', label:'Unity Project I',
      src:'', thumb:'',
      desc:'',
      tags:['Unity','Game','3D'],
      year:'', client:'', category:'Unity', duration:'—'
    },
    {
      id:'U02', label:'Unity Project II',
      src:'', thumb:'',
      desc:'',
      tags:['Unity','Game'],
      year:'', client:'', category:'Unity', duration:'—'
    },

    /* ── itch.io ── */
    { _sectionHeader: 'itch.io' },
    {
      id:'I01', label:'itch.io Game I',
      src:'', thumb:'',
      desc:'',
      tags:['Game','itch.io','Indie'],
      year:'', client:'', category:'itch.io', duration:'—'
    },
    {
      id:'I02', label:'itch.io Game II',
      src:'', thumb:'',
      desc:'',
      tags:['Game','itch.io'],
      year:'', client:'', category:'itch.io', duration:'—'
    }
  ]

};

var GRADS = [
  'linear-gradient(140deg,#111,#1d1d1d)',
  'linear-gradient(140deg,#0e0e0e,#1a1a1a)',
  'linear-gradient(140deg,#131313,#202020)',
  'linear-gradient(140deg,#0c0c0c,#181818)',
  'linear-gradient(140deg,#151515,#222)',
  'linear-gradient(140deg,#101010,#1c1c1c)'
];

/* ─── DOMINANT COLOR CACHE ──────────── */
var colorCache = {};
function getDominantColor(imgSrc, callback) {
  if (!imgSrc) { callback(null); return; }
  if (colorCache[imgSrc]) { callback(colorCache[imgSrc]); return; }
  var img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    var c = document.createElement('canvas'); c.width = 64; c.height = 64;
    var ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0, 64, 64);
    var data = ctx.getImageData(0, 0, 64, 64).data;
    var r = 0, g = 0, b = 0, count = 0;
    for (var i = 0; i < data.length; i += 16) { r += data[i]; g += data[i+1]; b += data[i+2]; count++; }
    colorCache[imgSrc] = 'rgb('+Math.round(r/count)+','+Math.round(g/count)+','+Math.round(b/count)+')';
    callback(colorCache[imgSrc]);
  };
  img.onerror = function() { callback(null); };
  img.src = imgSrc;
}

function applyGridBg(v) {
  if (!v || !v.thumb) {
    document.body.style.background = '#080808';
    document.documentElement.style.setProperty('--page-bg', '#080808');
    return;
  }
  getDominantColor(v.thumb, function(color) {
    var bg = color || '#080808';
    document.body.style.background = bg;
    document.documentElement.style.setProperty('--page-bg', bg);
  });
}

function applyColorTint(color) {
  var tint = document.getElementById('colorTint');
  if (!tint) return;
  tint.style.background = color || '';
  tint.style.opacity    = color ? '0.4' : '0';
}

/* ─── CURSOR ─────────────────────────── */
var cursorDot    = document.getElementById('cursorDot');
var scrollRingEl = document.getElementById('cursorScrollRing');
var cursorSize   = 8;

var scrollCursorEl = document.getElementById('scrollCursor');
document.addEventListener('mousemove', function(e) {
  gsap.to(cursorDot,      { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power3.out' });
  gsap.to(scrollRingEl,   { x: e.clientX, y: e.clientY, duration: 0.28, ease: 'power3.out' });
  gsap.set(scrollCursorEl,{ x: e.clientX, y: e.clientY });
});
function setCursorSize(size, dur) {
  gsap.to(cursorDot, { width: size, height: size, duration: dur || 0.35, ease: 'expo.out' });
}
document.addEventListener('mousedown', function() { setCursorSize(5, 0.15); });
document.addEventListener('mouseup',   function() { setCursorSize(cursorSize, 0.35); });
document.addEventListener('mouseover', function(e) {
  if (e.target.closest('a,button,.nav-arrow,.video-item,.cat-item,.zoom-btn')) { cursorSize = 20; setCursorSize(20); }
});
document.addEventListener('mouseout', function(e) {
  if (e.target.closest('a,button,.nav-arrow,.video-item,.cat-item,.zoom-btn')) { cursorSize = 8; setCursorSize(8); }
});

/* ─── NOISE ─────────────────────────── */
(function() {
  var c = document.getElementById('noiseCanvas'), ctx = c.getContext('2d');
  function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  (function draw() {
    var id = ctx.createImageData(c.width, c.height), d = id.data;
    for (var i = 0; i < d.length; i += 4) { var v = Math.random() * 255 | 0; d[i] = d[i+1] = d[i+2] = v; d[i+3] = 255; }
    ctx.putImageData(id, 0, 0); requestAnimationFrame(draw);
  })();
})();

/* ─── STATE ─────────────────────────── */
var activeCategory  = 'websites';
var currentIndex    = 0;
var scrollLocked    = false;
var infoPanelOpen   = false;
var isFullOpen      = false;
var activeVideoEl   = null;
var stopScrollTimer = null;
var builtItems      = [];

/* ── Portrait image scroll state ── */
var imgScrollY      = 0;
var imgScrollTarget = 0;
var imgScrollMax    = 0;
var imgRafId        = null;
var activeImgEl     = null;

/* ── Zoom state ── */
var imgZoom         = 1;       /* 1 = fit-width, 2 = 2× zoomed */
var imgZoomTarget   = 1;
var imgPanX         = 0;       /* horizontal pan offset in px at current zoom */
var imgPanY         = 0;       /* vertical pan offset in px at current zoom */
var imgPanXTarget   = 0;
var imgPanYTarget   = 0;
var imgPanXTarget   = 0;
var ZOOM_LEVELS     = [1, 1.75, 2.75]; /* cycle through these */
var zoomLevelIdx    = 0;
var isZoomed        = false;   /* true when zoom > 1 */

/* drag-to-pan state */
var dragActive   = false;
var dragStartX   = 0;
var dragStartY   = 0;
var dragOriginX  = 0; /* imgPanXTarget at drag start */
var dragOriginY  = 0; /* imgScrollTarget at drag start */

function currentList() { return COLLECTIONS[activeCategory]; }
function isImageCat()  { return activeCategory === 'sketches' || activeCategory === 'posters'; }

/* ─── TRACK ─────────────────────────── */
var SETS = 5, MID = Math.floor(SETS / 2);
var track = document.getElementById('galleryTrack');

function itemH() { return window.innerHeight * 0.58 + 12; }
function origY() { return window.innerHeight / 2 - itemH() / 2; }
function trackY() {
  var n = currentList().length;
  var base = -(MID * itemH() * n);
  return base + origY() - currentIndex * itemH();
}
function snapTrack() { gsap.set(track, { y: trackY() }); }
function animTrack()  { gsap.to(track,  { y: trackY(), duration: 0.8, ease: 'expo.out' }); }

function realItems(list) {
  /* strip section header markers, return only real project entries */
  return list.filter(function(v) { return !v._sectionHeader; });
}

function buildTrack(list) {
  track.innerHTML = '';
  builtItems = [];
  var real = realItems(list); /* only real items get an index */
  for (var s = 0; s < SETS; s++) {
    var realIdx = 0;
    list.forEach(function(v) {
      /* ── section header divider ── */
      if (v._sectionHeader) {
        var hdr = document.createElement('div');
        hdr.className = 'section-header-divider';
        hdr.textContent = v._sectionHeader;
        track.appendChild(hdr);
        return;
      }
      var idx  = realIdx++;
      var item = document.createElement('div');
      item.className = 'video-item';
      item.dataset.index = idx;
      var inner = document.createElement('div'); inner.className = 'video-inner';
      if (v.thumb) {
        var img = document.createElement('img');
        img.className = 'video-thumb';
        img.src = v.thumb; img.alt = v.label; img.loading = 'lazy';
        inner.appendChild(img);
      } else {
        var ph = document.createElement('div');
        ph.className = 'video-placeholder';
        ph.style.background = GRADS[idx % GRADS.length];
        ph.textContent = v.id;
        inner.appendChild(ph);
      }
      var lbl  = document.createElement('div'); lbl.className = 'video-label'; lbl.textContent = v.label;
      var hint = document.createElement('div'); hint.className = 'click-hint'; hint.innerHTML = '<span>View</span>';
      item.appendChild(inner); item.appendChild(lbl); item.appendChild(hint);
      track.appendChild(item);
      builtItems.push(item);
    });
  }
  real.forEach(function(v) { if (v.thumb) getDominantColor(v.thumb, function(){}); });
}

/* ─── UI ────────────────────────────── */
function updateUI() {
  var list  = realItems(currentList());
  var total = list.length;
  var v     = list[currentIndex];
  document.getElementById('counterMain').textContent = String(currentIndex + 1).padStart(3, '0');
  document.querySelector('.counter-sub').textContent = String(total).padStart(3, '0');
  document.getElementById('progressBar').style.height = ((currentIndex + 1) / total * 100) + '%';
  builtItems.forEach(function(item) {
    var d = Math.abs(parseInt(item.dataset.index) - currentIndex);
    gsap.to(item, { scale: d === 0 ? 1.06 : 0.94, opacity: d === 0 ? 1 : 0.55, duration: 0.6, ease: 'power3.out' });
  });
  if (!isFullOpen) applyGridBg(v);
}

function stepBy(dir) {
  if (scrollLocked) return;
  var total = currentList().length;
  currentIndex = (currentIndex + dir + total) % total;
  animTrack(); updateUI();
}

document.getElementById('arrowUp').addEventListener('click',   function() { stepBy(-1); });
document.getElementById('arrowDown').addEventListener('click', function() { stepBy(1); });

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp')    { if (isFullOpen && isImageCat() && isZoomed) { imgPanYTarget += 80; clampPan(); } else stepBy(-1); }
  if (e.key === 'ArrowDown')  { if (isFullOpen && isImageCat() && isZoomed) { imgPanYTarget -= 80; clampPan(); } else stepBy(1); }
  if (e.key === 'ArrowLeft')  { if (isFullOpen && isImageCat() && isZoomed) { imgPanXTarget += 80; clampPan(); } else stepBy(-1); }
  if (e.key === 'ArrowRight') { if (isFullOpen && isImageCat() && isZoomed) { imgPanXTarget -= 80; clampPan(); } else stepBy(1); }
  if (e.key === 'Escape') {
    if (infoPanelOpen) closeInfoPanel();
    else if (isFullOpen) closeFullscreen();
  }
  /* + / - keys for zoom */
  if (isFullOpen && isImageCat()) {
    if (e.key === '+' || e.key === '=') cycleZoom(1);
    if (e.key === '-')                  cycleZoom(-1);
  }
});

/* ─── WHEEL ─────────────────────────── */
var wheelAccum = 0, wheelLocked = false, wheelResetTimer = null;

window.addEventListener('wheel', function(e) {
  e.preventDefault();

  if (isFullOpen) {
    if (!isImageCat()) {
      /* video: scroll to play */
      if (!activeVideoEl) return;
      if (activeVideoEl.paused) activeVideoEl.play().catch(function(){});
      clearTimeout(stopScrollTimer);
      stopScrollTimer = setTimeout(function() {
        if (activeVideoEl && !activeVideoEl.paused) activeVideoEl.pause();
      }, 150);
      return;
    }

    /* image: ctrl/cmd + wheel = zoom, plain wheel = scroll */
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      var delta = e.deltaY > 0 ? -1 : 1;
      cycleZoom(delta);
      return;
    }

    /* when zoomed: wheel pans the image vertically */
    if (isZoomed) {
      imgPanYTarget -= e.deltaY * 0.8;
      clampPan();
    }
    return;
  }

  wheelAccum += e.deltaY;
  clearTimeout(wheelResetTimer);
  wheelResetTimer = setTimeout(function() { wheelAccum = 0; }, 80);
  if (wheelLocked) return;
  if (Math.abs(wheelAccum) < 30) return;
  var dir = wheelAccum > 0 ? 1 : -1;
  wheelAccum = 0; wheelLocked = true;
  stepBy(dir);
  setTimeout(function() { wheelLocked = false; }, 850);
}, { passive: false });

window.addEventListener('resize', function() { snapTrack(); recalcImgScroll(); });

/* ─── IMAGE SCROLL ───────────────────── */
function scrollImageBy(delta) {
  imgScrollTarget = Math.max(0, Math.min(imgScrollMax, imgScrollTarget + delta));
}

function recalcImgScroll() {
  if (!activeImgEl) return;
  /* no vertical scroll — just re-clamp pan */
  imgScrollMax = 0;
  imgScrollTarget = 0;
  clampPan();
}

function clampPan() {
  if (!activeImgEl) return;
  /* rendered size of the image at current zoom */
  var rw = activeImgEl.offsetWidth  * imgZoom;
  var rh = activeImgEl.offsetHeight * imgZoom;
  var maxPanX = Math.max(0, (rw - window.innerWidth)  / 2);
  var maxPanY = Math.max(0, (rh - window.innerHeight) / 2);
  imgPanXTarget = Math.max(-maxPanX, Math.min(maxPanX, imgPanXTarget));
  imgPanYTarget = Math.max(-maxPanY, Math.min(maxPanY, imgPanYTarget));
}

function applyImgTransform() {
  if (!activeImgEl) return;
  activeImgEl.style.transform =
    'translate(' + imgPanX + 'px, ' + imgPanY + 'px) scale(' + imgZoom + ')';
  activeImgEl.style.transformOrigin = 'center center';
  activeImgEl.style.cursor = isZoomed ? 'grab' : 'zoom-in';
}

function startImgLerp() {
  if (imgRafId) return;
  (function loop() {
    var dx = imgPanXTarget - imgPanX;
    if (Math.abs(dx) > 0.2) imgPanX += dx * 0.1; else imgPanX = imgPanXTarget;

    var dy = imgPanYTarget - imgPanY;
    if (Math.abs(dy) > 0.2) imgPanY += dy * 0.1; else imgPanY = imgPanYTarget;

    var dz = imgZoomTarget - imgZoom;
    if (Math.abs(dz) > 0.001) imgZoom += dz * 0.12; else imgZoom = imgZoomTarget;

    applyImgTransform();
    imgRafId = requestAnimationFrame(loop);
  })();
}

function stopImgLerp() {
  if (imgRafId) { cancelAnimationFrame(imgRafId); imgRafId = null; }
  activeImgEl     = null;
  imgScrollY      = imgScrollTarget = imgScrollMax = 0;
  imgZoom         = imgZoomTarget = 1;
  imgPanX         = imgPanXTarget = 0;
  imgPanY         = imgPanYTarget = 0;
  zoomLevelIdx    = 0;
  isZoomed        = false;
}

/* ─── ZOOM ───────────────────────────── */
function cycleZoom(dir) {
  zoomLevelIdx = Math.max(0, Math.min(ZOOM_LEVELS.length - 1, zoomLevelIdx + dir));
  imgZoomTarget = ZOOM_LEVELS[zoomLevelIdx];
  isZoomed      = zoomLevelIdx > 0;

  /* when zooming out reset pan */
  if (!isZoomed) { imgPanXTarget = 0; imgPanYTarget = 0; }

  recalcImgScroll();
  updateZoomUI();
}

function resetZoom() {
  zoomLevelIdx  = 0;
  imgZoomTarget = 1;
  isZoomed      = false;
  imgPanXTarget = 0;
  imgPanYTarget = 0;
  recalcImgScroll();
  updateZoomUI();
}

function updateZoomUI() {
  var inBtn  = document.getElementById('zoomInBtn');
  var outBtn = document.getElementById('zoomOutBtn');
  if (inBtn)  inBtn.style.opacity  = zoomLevelIdx < ZOOM_LEVELS.length - 1 ? '1' : '0.3';
  if (outBtn) outBtn.style.opacity = zoomLevelIdx > 0 ? '1' : '0.3';
}

/* ─── DRAG TO PAN (when zoomed) ──────── */
function attachDragPan(el) {
  el.addEventListener('mousedown', function(e) {
    if (!isZoomed) return;
    dragActive  = true;
    dragStartX  = e.clientX;
    dragStartY  = e.clientY;
    dragOriginX = imgPanXTarget;
    dragOriginY = imgPanYTarget;
    el.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', function(e) {
    if (!dragActive) return;
    var dx = e.clientX - dragStartX;
    var dy = e.clientY - dragStartY;
    imgPanXTarget    = dragOriginX + dx;
    imgScrollTarget  = Math.max(0, Math.min(imgScrollMax, dragOriginY - dy));
    clampPan();
  });

  window.addEventListener('mouseup', function() {
    if (!dragActive) return;
    dragActive = false;
    if (activeImgEl) activeImgEl.style.cursor = isZoomed ? 'grab' : 'default';
  });

  /* touch drag */
  el.addEventListener('touchstart', function(e) {
    if (e.touches.length !== 1) return;
    dragActive  = true;
    dragStartX  = e.touches[0].clientX;
    dragStartY  = e.touches[0].clientY;
    dragOriginX = imgPanXTarget;
    dragOriginY = imgPanYTarget;
  }, { passive: true });

  el.addEventListener('touchmove', function(e) {
    if (!dragActive || e.touches.length !== 1) return;
    var dx = e.touches[0].clientX - dragStartX;
    var dy = e.touches[0].clientY - dragStartY;
    imgPanXTarget   = dragOriginX + dx;
    imgScrollTarget = Math.max(0, Math.min(imgScrollMax, dragOriginY - dy));
    clampPan();
  }, { passive: true });

  el.addEventListener('touchend', function() { dragActive = false; });
}

/* ─── PINCH TO ZOOM (touch) ──────────── */
var pinchStartDist = 0;
var pinchStartZoom = 1;

function attachPinch(el) {
  el.addEventListener('touchstart', function(e) {
    if (e.touches.length === 2) {
      var dx = e.touches[0].clientX - e.touches[1].clientX;
      var dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStartDist = Math.sqrt(dx*dx + dy*dy);
      pinchStartZoom = imgZoomTarget;
    }
  }, { passive: true });

  el.addEventListener('touchmove', function(e) {
    if (e.touches.length !== 2) return;
    var dx   = e.touches[0].clientX - e.touches[1].clientX;
    var dy   = e.touches[0].clientY - e.touches[1].clientY;
    var dist = Math.sqrt(dx*dx + dy*dy);
    var raw  = pinchStartZoom * (dist / pinchStartDist);
    imgZoomTarget = Math.max(ZOOM_LEVELS[0], Math.min(ZOOM_LEVELS[ZOOM_LEVELS.length-1], raw));
    isZoomed      = imgZoomTarget > 1.05;
    /* snap zoomLevelIdx for UI */
    var closest = 0, minD = Infinity;
    ZOOM_LEVELS.forEach(function(z, i) { var d = Math.abs(z - imgZoomTarget); if (d < minD) { minD = d; closest = i; } });
    zoomLevelIdx = closest;
    recalcImgScroll();
    updateZoomUI();
  }, { passive: true });

  el.addEventListener('touchend', function(e) {
    if (e.touches.length < 2) { pinchStartDist = 0; }
  });
}

/* ─── DOUBLE-CLICK / DOUBLE-TAP ──────── */
var lastTap = 0;
function attachDoubleTap(el) {
  /* double click */
  el.addEventListener('dblclick', function(e) {
    if (!isImageCat() || !isFullOpen) return;
    if (isZoomed) {
      resetZoom();
    } else {
      /* zoom into where the user clicked */
      zoomLevelIdx  = 1;
      imgZoomTarget = ZOOM_LEVELS[1];
      isZoomed      = true;
      recalcImgScroll();
      updateZoomUI();
    }
  });

  /* double tap */
  el.addEventListener('touchend', function(e) {
    var now = Date.now();
    if (now - lastTap < 300) {
      if (isZoomed) resetZoom();
      else {
        zoomLevelIdx  = 1;
        imgZoomTarget = ZOOM_LEVELS[1];
        isZoomed      = true;
        recalcImgScroll();
        updateZoomUI();
      }
    }
    lastTap = now;
  });
}

/* ─── ACTIVE ITEM HELPER ─────────────── */
function getActiveItem() {
  var midY = window.innerHeight / 2, best = null, bestDist = Infinity;
  builtItems.forEach(function(item) {
    if (parseInt(item.dataset.index) !== currentIndex) return;
    var r = item.getBoundingClientRect();
    var d = Math.abs((r.top + r.height / 2) - midY);
    if (d < bestDist) { bestDist = d; best = item; }
  });
  return best;
}

/* ─── VIDEO STOP ─────────────────────── */
function stopFullVideo() {
  clearTimeout(stopScrollTimer);
  if (activeVideoEl) {
    activeVideoEl.pause();
    activeVideoEl.removeAttribute('src');
    activeVideoEl.load();
    activeVideoEl = null;
  }
  var fill = document.getElementById('videoProgressFill');
  if (fill) fill.style.width = '0%';
}

/* ─── FULLSCREEN ELEMENTS ────────────── */
var fullscreen = document.getElementById('fullscreen');
var fullBg     = document.getElementById('fullBg');
var fullTitle  = document.getElementById('fullTitle');
var fsNum      = document.getElementById('fsNum');
var fsName     = document.getElementById('fsName');
var fullMeta   = document.getElementById('fullMeta');
var fullHeader = document.getElementById('fullHeader');
var zoomInner  = document.getElementById('zoomCloneInner');
var scrollHint = document.getElementById('scrollHint');

/* ─── BUILD FULLSCREEN BG ────────────── */
function buildFullBg(v, idx) {
  stopFullVideo();
  stopImgLerp();
  fullBg.innerHTML = '';
  fullBg.classList.remove('image-mode');

  /* hide zoom controls by default */
  var zoomCtrl = document.getElementById('zoomControls');
  if (zoomCtrl) { zoomCtrl.style.opacity = '0'; zoomCtrl.style.pointerEvents = 'none'; }

  var tintSrc = v.thumb || v.img || '';
  if (tintSrc) getDominantColor(tintSrc, applyColorTint);

  if (!isImageCat()) {
    /* ── VIDEO ── */
    if (v.src) {
      var vid = document.createElement('video');
      vid.muted = true; vid.playsInline = true; vid.preload = 'auto'; vid.loop = true;
      vid.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;opacity:0;will-change:transform;transform:translateZ(0);transition:opacity 0.6s ease';
      var rafId = null;
      function tickProgress() {
        var fill = document.getElementById('videoProgressFill');
        if (fill && vid.duration) fill.style.width = (vid.currentTime / vid.duration * 100) + '%';
        rafId = requestAnimationFrame(tickProgress);
      }
      vid.addEventListener('canplay', function onReady() {
        vid.removeEventListener('canplay', onReady);
        vid.play().then(function() { vid.pause(); vid.currentTime = 0; }).catch(function(){});
        setTimeout(function() { vid.style.opacity = '1'; }, 50);
        tickProgress();
      });
      vid.addEventListener('emptied', function() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } });
      vid.addEventListener('click', function() { vid.muted = !vid.muted; });
      fullBg.appendChild(vid);
      activeVideoEl = vid;
      vid.src = v.src; vid.load();
    } else {
      var ph = document.createElement('div');
      ph.className = 'fs-placeholder';
      ph.style.background = GRADS[idx % GRADS.length];
      ph.textContent = v.id;
      fullBg.appendChild(ph);
    }

  } else {
    /* ── PORTRAIT IMAGE — full image always visible, zoom into detail ── */
    fullBg.classList.add('image-mode');

    var fullImg = v.img || v.thumb;
    if (fullImg) {
      var wrapper = document.createElement('div');
      wrapper.id = 'imgWrapper';
      wrapper.style.cssText = 'position:absolute;inset:0;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#080808;';

      var img = document.createElement('img');
      img.className = 'fs-portrait';
      img.src = fullImg;
      img.style.cssText = [
        'display:block',
        'max-width:100%',
        'max-height:100%',
        'width:auto',
        'height:auto',
        'object-fit:contain',
        'will-change:transform',
        'transform:translate(0px,0px) scale(1)',
        'transform-origin:center center',
        'opacity:0',
        'transition:opacity 0.6s ease',
        'user-select:none',
        '-webkit-user-drag:none',
        'cursor:zoom-in'
      ].join(';');

      img.onload = function() {
        img.style.opacity = '1';
        activeImgEl = img;
        imgZoom = imgZoomTarget = 1;
        imgPanX = imgPanXTarget = 0;
        imgScrollY = imgScrollTarget = 0;
        imgScrollMax = 0;
        zoomLevelIdx = 0; isZoomed = false;
        startImgLerp();
        updateZoomUI();

        var zc = document.getElementById('zoomControls');
        if (zc) {
          gsap.to(zc, { opacity: 1, duration: 0.4, delay: 0.4,
            onStart: function() { zc.style.pointerEvents = 'all'; }
          });
        }
      };

      attachDragPan(img);
      attachPinch(img);
      attachDoubleTap(img);

      wrapper.appendChild(img);
      fullBg.appendChild(wrapper);
    } else {
      var phI = document.createElement('div');
      phI.className = 'fs-placeholder';
      phI.style.cssText = 'height:100%;display:flex;align-items:center;justify-content:center;';
      phI.style.background = GRADS[idx % GRADS.length];
      phI.textContent = v.id;
      fullBg.appendChild(phI);
    }
  }
}

/* ─── OPEN FULLSCREEN ─────────────────── */
function openFullscreen(idx) {
  if (scrollLocked) return;
  scrollLocked = true;
  var activeItem = getActiveItem();
  var rect = activeItem ? activeItem.getBoundingClientRect() : null;
  if (!rect) { scrollLocked = false; return; }

  var v     = realItems(currentList())[idx];
  var total = realItems(currentList()).length;

  buildFullBg(v, idx);
  fsNum.textContent     = v.id + ' / ' + String(total).padStart(3, '0');
  fsName.textContent    = v.label;
  fullTitle.textContent = v.label;
  /* image title (top center, image mode only) */
  var imgTitleEl = document.getElementById('imgTitle');
  if (imgTitleEl) imgTitleEl.textContent = v.label;

  gsap.set(fullscreen, { opacity: 0 });
  gsap.set(fullMeta,   { opacity: 0, y: 12 });
  gsap.set(fullHeader, { opacity: 0 });
  gsap.set(scrollHint, { opacity: 0, y: 8 });

  var hintSpan = scrollHint.querySelector('span');
  if (hintSpan) hintSpan.textContent = isImageCat() ? 'Double-click to zoom · Drag to pan' : 'Tap for sound';

  if (v.thumb) {
    zoomInner.style.backgroundImage    = 'url(' + v.thumb + ')';
    zoomInner.style.backgroundSize     = 'cover';
    zoomInner.style.backgroundPosition = 'center top';
    zoomInner.style.background         = '';
    zoomInner.textContent              = '';
  } else {
    zoomInner.style.backgroundImage = '';
    zoomInner.style.background      = GRADS[idx % GRADS.length];
    zoomInner.textContent           = v.id;
  }

  var scaleX = window.innerWidth  / rect.width;
  var scaleY = window.innerHeight / rect.height;
  var scale  = Math.max(scaleX, scaleY) * 1.02;

  builtItems.forEach(function(item) {
    if (parseInt(item.dataset.index) !== idx)
      gsap.to(item, { opacity: 0, duration: 0.3, ease: 'power2.in' });
  });

  gsap.to(activeItem, {
    scale: scale, duration: 0.75, ease: 'expo.inOut',
    onComplete: function() {
      fullscreen.classList.add('active');
      gsap.set(fullscreen, { opacity: 1 });
      isFullOpen = true;
      document.body.classList.add('fullscreen-open');
      document.body.classList.add(isImageCat() ? 'fullscreen-image' : 'fullscreen-video');
      gsap.set(activeItem, { scale: 1.06 });
      if (!isImageCat()) {
        gsap.to(fullMeta,   { opacity: 1, y: 0,   duration: 0.5, delay: 0.05,  ease: 'power2.out' });
        gsap.to(scrollHint, { opacity: 0.6, y: 0, duration: 0.5, delay: 0.15,  ease: 'power2.out' });
      } else {
        gsap.set(fullMeta,   { opacity: 0 });
        gsap.set(scrollHint, { opacity: 0 });
        /* show image title */
        var itEl = document.getElementById('imgTitle');
        if (itEl) gsap.to(itEl, { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: 'power2.out' });
      }
      gsap.to(fullHeader, { opacity: 1,          duration: 0.4, delay: 0.05,  ease: 'power2.out',
        onStart: function() { fullHeader.style.pointerEvents = 'all'; }
      });
    }
  });
}

/* ─── CLOSE FULLSCREEN ───────────────── */
function closeFullscreen() {
  if (!isFullOpen) return;
  closeInfoPanel();
  stopFullVideo();
  stopImgLerp();
  applyColorTint(null);

  /* hide zoom controls */
  var zc = document.getElementById('zoomControls');
  if (zc) { gsap.to(zc, { opacity: 0, duration: 0.2 }); zc.style.pointerEvents = 'none'; }

  var activeItem = getActiveItem();
  gsap.to(fullMeta,   { opacity: 0, y: 12, duration: 0.2 });
  gsap.to(scrollHint, { opacity: 0, y: 8,  duration: 0.2 });
  var itEl = document.getElementById('imgTitle');
  if (itEl) gsap.to(itEl, { opacity: 0, y: -8, duration: 0.2 });
  gsap.to(fullHeader, { opacity: 0, duration: 0.2,
    onComplete: function() { fullHeader.style.pointerEvents = 'none'; }
  });
  gsap.to(fullscreen, {
    opacity: 0, duration: 0.25, ease: 'power2.in',
    onComplete: function() {
      fullscreen.classList.remove('active');
      isFullOpen = false;
      document.body.classList.remove('fullscreen-open');
      document.body.classList.remove('fullscreen-video');
      document.body.classList.remove('fullscreen-image');
      fullBg.classList.remove('image-mode');
      applyGridBg(currentList()[currentIndex]);
      if (!activeItem) { scrollLocked = false; return; }
      var rect = activeItem.getBoundingClientRect();
      var fillScale = Math.max(
        window.innerWidth  / (rect.width  / 1.06),
        window.innerHeight / (rect.height / 1.06)
      ) * 1.02;
      gsap.set(activeItem, { scale: fillScale });
      gsap.to(activeItem, {
        scale: 1.06, duration: 0.72, ease: 'expo.inOut',
        onComplete: function() {
          scrollLocked = false;
          builtItems.forEach(function(item) {
            var d = Math.abs(parseInt(item.dataset.index) - currentIndex);
            gsap.to(item, { opacity: d === 0 ? 1 : 0.55, duration: 0.45, ease: 'power2.out' });
          });
        }
      });
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

/* ─── ZOOM BUTTON ────────────────────── */
document.getElementById('zoomInBtn').addEventListener('click', function() {
  if (!isFullOpen || !isImageCat()) return;
  cycleZoom(1);
});

document.getElementById('zoomOutBtn').addEventListener('click', function() {
  if (!isFullOpen || !isImageCat()) return;
  cycleZoom(-1);
});

/* ─── CATEGORY NAV ───────────────────── */
var catFlash = document.getElementById('catFlash');
var catItems = document.querySelectorAll('.cat-item');

catItems.forEach(function(catEl) {
  catEl.addEventListener('click', function() {
    var newCat = catEl.dataset.category;
    if (newCat === activeCategory) return;
    if (scrollLocked) return;
    scrollLocked = true;
    catItems.forEach(function(c) { c.classList.remove('active'); });
    catEl.classList.add('active');
    var labelMap = { websites: 'Websites', sketches: 'Sketches', posters: 'Posters', other: 'Other' };
    catFlash.textContent = labelMap[newCat] || newCat;
    gsap.to(builtItems, { opacity: 0, y: -24, scale: 0.92, duration: 0.35, ease: 'power2.in', stagger: 0.03 });
    gsap.timeline()
      .set(catFlash, { opacity: 0, y: 28, scale: 0.88 })
      .to(catFlash,  { opacity: 1, y: 0,  scale: 1,    duration: 0.42, ease: 'power3.out' })
      .to(catFlash,  { opacity: 0, y: -20, scale: 0.94, duration: 0.36, ease: 'power2.in', delay: 0.22 });
    setTimeout(function() {
      activeCategory = newCat; currentIndex = 0;
      buildTrack(COLLECTIONS[activeCategory]); snapTrack();
      gsap.set(builtItems, { opacity: 0, y: 40, scale: 0.9 });
      builtItems.forEach(function(item, i) {
        var d = Math.abs(parseInt(item.dataset.index) - currentIndex);
        gsap.to(item, { opacity: d === 0 ? 1 : 0.55, y: 0, scale: d === 0 ? 1.06 : 0.94,
          duration: 0.58, delay: i * 0.04, ease: 'power3.out' });
      });
      updateUI(); scrollLocked = false;
    }, 420);
  });
});

/* ─── INFO PANEL ─────────────────────── */
function openInfoPanel(idx) {
  var v     = realItems(currentList())[idx];
  var total = realItems(currentList()).length;
  document.getElementById('infoIndex').textContent    = v.id + ' / ' + String(total).padStart(3, '0');
  document.getElementById('infoTitle').textContent    = v.label;
  document.getElementById('infoDesc').textContent     = v.desc;
  document.getElementById('infoYear').textContent     = v.year;
  document.getElementById('infoClient').textContent   = v.client;
  document.getElementById('infoCategory').textContent = v.category;
  document.getElementById('infoDuration').textContent = v.duration;
  var tagsEl = document.getElementById('infoTags');
  tagsEl.innerHTML = '';
  v.tags.forEach(function(t) {
    var span = document.createElement('span'); span.className = 'info-tag'; span.textContent = t;
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
  if (infoPanelOpen) closeInfoPanel(); else openInfoPanel(currentIndex);
});
document.getElementById('infoPanelClose').addEventListener('click', closeInfoPanel);

/* ─── INIT ───────────────────────────── */
buildTrack(COLLECTIONS[activeCategory]);
snapTrack();
catItems.forEach(function(c) { c.classList.toggle('active', c.dataset.category === activeCategory); });
updateUI();

gsap.timeline()
  .to('#introText',    { opacity: 1, y: 0,   duration: 1,   ease: 'power3.out' })
  .to({},              {                      duration: 0.8 })
  .to('#introText',    { opacity: 0, y: -28, duration: 0.6, ease: 'power2.in' })
  .to('#introOverlay', { opacity: 0, duration: 0.5, ease: 'power2.inOut',
    onComplete: function() { document.getElementById('introOverlay').style.display = 'none'; }
  })
  .to('#gridHeader',   { opacity: 1, duration: 0.5 }, '-=0.1')
  .to('#navArrows',    { opacity: 1, duration: 0.4,
    onComplete: function() { document.getElementById('navArrows').style.pointerEvents = 'all'; }
  }, '-=0.3')
  .to('#categoryNav',  { opacity: 1, duration: 0.5,
    onComplete: function() { document.getElementById('categoryNav').style.pointerEvents = 'all'; }
  }, '-=0.35');
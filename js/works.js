/* ══════════════════════════════════════
   GALLERY — main script
   ══════════════════════════════════════ */


/* ─── DATA ───────────────────────────────────────────────────────────────────
   COLLECTIONS holds all project data organised into three categories:
   'websites', 'sketches', and 'other'.

   Each project object has:
     id       — short unique identifier used in the counter and info panel
     label    — display name shown on the card and in fullscreen
     src      — path to the video file (video projects only)
     thumb    — path to a thumbnail/preview image
     img      — path to a full-resolution image (sketch projects only)
     desc     — paragraph description shown in the info panel
     tags     — array of tag strings rendered as pills
     links    — array of { label, url } objects for external project links
     year, client, category, duration — metadata shown in the info panel grid

   In the 'other' category, objects with _sectionHeader instead of a project
   id are treated as visual divider labels (e.g. "Figma", "Android Studio").
   They are filtered out from the real item list but rendered as headings above
   their respective cards in the track.
   ─────────────────────────────────────────────────────────────────────────── */
var COLLECTIONS = {

  websites: [
    {
      id:'W01', label:'NIKE',
      src:'../selectedwork/NIKE (2).mp4',
      thumb:'../pictures/NIKE (8).png',
      desc:'A redesigned Nike website concept built with HTML, CSS, and JavaScript, featuring smooth GSAP animations to create a dynamic and engaging user experience. The project showcases modern web design principles with fluid transitions and interactive elements, demonstrating front-end development skills through a high-profile brand redesign.',
      tags:[],
      links:[
        { label:'View Project', url:'https://nike-nine-murex.vercel.app/' }
      ],
      year:'2025', client:'Self-initiated', category:'Motion', duration:'1:45'
    },
    {
      id:'W02', label:'Marong Hospital Australia',
      src:'../selectedwork/marong hospital australia (1).mp4',
      thumb:'../selectedwork/marong hospital australia (2).png',
      desc:'A professional website built for Maroong Hospital, Australia, using Wix. The project focused on delivering a clean, accessible, and user-friendly experience for patients and staff, including key information such as services, contact details, and hospital resources.',
      tags:[],
      links:[
        { label:'View Project', url:'https://www.marongmedicalpractice.com.au/' }
      ],
      year:'2025', client:'Confidential', category:'Film', duration:'2:10'
    },
    {
      id:'W03', label:'Bathspa Sports',
      src:'../selectedwork/BATHSPA SPORTS.mp4',
      thumb:'../selectedwork/bss logo.png',
      desc:'A sports website designed and built for Bath Spa University, providing students and staff with easy access to sports facilities, events, and team information. The project focused on creating an energetic and engaging layout that reflected the universitys active sports culture.',
      tags:[],
      links:[
        { label:'View Project', url:'https://bathspa-varsity.vercel.app/' }
      ],
      year:'2024', client:'Creative Agency', category:'Web', duration:'—'
    },
    {
      id:'W04', label:'Vogue (Perfume)',
      src:'../selectedwork/vogue.mp4',
      thumb:'../selectedwork/vogue (1).png',
      desc:'A concept website designed for Vogue, a luxury perfume brand, built as a personal project to explore high-end web aesthetics. The project focused on delivering an elegant and immersive user experience through rich visuals, refined typography, and a sophisticated colour palette that captures the essence of a premium fragrance brand.',
      tags:[],
      links:[
        { label:'View Project', url:'https://vouge-six.vercel.app/' }
      ],
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
      links:[],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S02', label:'Liturgy of the Obsidian Bloom',
      thumb:'../selectedwork/sabr.png',
      img:'../selectedwork/IMG_0022.jpeg',
      desc:'A sophisticated exploration of botanical gothicism. This composition utilizes deep ink-like shadows and fluid acanthus scrolls to create a sense of movement that feels both graceful and heavy. It represents the "unseen garden"—the beauty that thrives in total darkness and the elegant power of nature when left to its own magical devices.',
      tags:['Drawing','Anatomy','Process'],
      links:[],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S03', label:'Melting Hand',
      thumb:'../selectedwork/Melting hand (1).png',
      img:'../selectedwork/IMG_0027.jpeg',
      desc:'An exploration of physical and metaphysical dissolution. This work captures the precise moment where the human form yields to an unseen corrosive force, blurring the line between solid matter and fluid energy. Through heavy ink shadows and frantic, detailed hatching, Melting Hand serves as a visual metaphor for the fleeting nature of the self and the inevitable transition into the unknown.',
      tags:['Experimental','Ink','Process'],
      links:[],
      year:'2024', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S04', label:'Whisper of the Hellebore',
      thumb:'../selectedwork/Whisper of the Hellebore.png',
      img:'../selectedwork/IMG_0030.jpeg',
      desc:'Drawing on the tradition of classical botanical illustration, this work transforms a simple garden specimen into a mystical artifact. The gentle overlapping of leaves and the downward tilt of the blooms suggest a hidden world of quiet intention. It is a meditation on the subtle power of growth and the secrets kept by the earth in the early hours of dawn.',
      tags:['Illustration','Sketch','Process'],
      links:[],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S05', label:'Dirge of the Iron Mask',
      thumb:'../selectedwork/Dirge of the Iron Mask.png',
      img:'../selectedwork/IMG_0029.jpeg',
      desc:'A cinematic study of sound and silence. This composition captures a masked figure in a moment of ritualistic performance, where the flute serves as a conduit for ancient, unseen forces. By framing the figure between the sharpness of a blade and the deep shadows of the background, the work explores the duality of the creator and the destroyer. It is an invitation into a world where music is as dangerous as steel.',
      tags:['Drawing','Anatomy','Process'],
      links:[],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S06', label:'Asphalt Anthology: A Custom Decal Series',
      thumb:'../selectedwork/Asphalt Anthology A Custom Decal Series.png',
      img:'../selectedwork/IMG_0028.jpeg',
      desc:'Experimental mark-making exploring the intersection of street culture and fine illustration craft.',
      tags:['Experimental','Ink','Process'],
      links:[],
      year:'2024', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S07', label:'Nocturne of the Pale Bloom',
      thumb:'../selectedwork/Nocturne of the Pale Bloom.png',
      img:'../selectedwork/IMG_0023.jpeg',
      desc:'Part of a series exploring "The Shadow Garden," this work focuses on the dramatic contrast between organic softness and sharp, precise linework. The composition emphasizes the elegant, almost haunting curves of the Lily\'s silhouette against the void of the page. It is a meditation on the fleeting life of a flower, rendered with a permanence that feels both ancient and magical.',
      tags:['Drawing','Anatomy','Process'],
      links:[],
      year:'2025', client:'Self-initiated', category:'Sketch', duration:'—'
    },
    {
      id:'S08', label:'Cipher of the Unseen Eye',
      thumb:'../selectedwork/Cipher of the Unseen Eye.png',
      img:'../selectedwork/IMG_0026.jpeg',
      desc:'Inspired by ancient sigils and arcane symbolism, Cipher of the Unseen Eye acts as a visual hypnotic. The layered, swirling patterns evoke a sense of ancient wisdom being protected by a maze of ink. It is a study in "automatic drawing," where the subconscious mind takes over to create a portal of obsidian curves and shadowed echoes, inviting the viewer to look closer into the void.',
      tags:['Experimental','Ink','Process'],
      links:[],
      year:'2024', client:'Self-initiated', category:'Sketch', duration:'—'
    }
  ],

  other: [
    /* ── Section header: renders as a labelled divider above the Figma cards ── */
    { _sectionHeader: 'Figma' },
    {
      id:'F01', label:'Figma Project I',
      src:'../selectedwork/BATHSPA SPORTS APP.mp4', thumb:'../selectedwork/bss logo.png',
      desc:'A prototype design for a Bath Spa University sports app, created in Figma. The project involved designing an intuitive and visually engaging mobile interface, allowing students to browse sports facilities, book sessions, and stay updated on upcoming events and teams. The prototype focused on delivering a seamless user journey through thoughtful UI/UX design and interactive wireframes.',
      tags:['Figma','UI','Design'],
      links:[{ label:'View Project', url:'https://www.figma.com/proto/n0Zje6CGlPdL7pJsw5Cqvx/Bathspa-Sports?node-id=0-1&t=TztoYCluimlTKv57-1' }],
      year:'', client:'', category:'Figma', duration:'—'
    },

    /* ── Section header for Android Studio projects ── */
    { _sectionHeader: 'Android Studio' },
    {
      id:'A01', label:'Juice Bloom',
      src:'../selectedwork/UICE bLOOM.mp4', thumb:'../selectedwork/JUICE bLOOM.png',
      desc:'A fun and interactive Android app built in Android Studio that lets users customise and create their own personalised juice blend. Users can mix and match ingredients and flavours to craft their perfect drink, offering an engaging and intuitive mobile experience. The project demonstrated skills in Android development, UI design, and building interactive user flows.',
      tags:['Android','App','Mobile'],
      links:[],
      year:'', client:'', category:'Android Studio', duration:'—'
    },
    {
      id:'A02', label:'QSip',
      src:'../selectedwork/QSip.mp4', thumb:'../selectedwork/qsip.png',
      desc:'A sleek and intuitive coffee ordering app built in Android Studio, allowing users to browse a menu, customise their order, and order their perfect coffee with ease. QSip was designed with a smooth and modern mobile experience in mind, focusing on simplicity and speed to get users their coffee fix as quickly as possible.',
      tags:['Android','UI'],
      links:[],
      year:'', client:'', category:'Android Studio', duration:'—'
    },

    /* ── Section header for Unity projects ── */
    { _sectionHeader: 'Unity' },
    {
      id:'U01', label:'4026',
      src:'../selectedwork/4026.mp4',
      thumb:'../selectedwork/4096.png',
      desc:'A game designed and developed in Unity, showcasing skills in game development, mechanics design, and interactive storytelling. 4026 was built with a focus on engaging gameplay and immersive visuals, demonstrating a strong understanding of the Unity engine and core game development principles.',
      tags:['Unity','Game','3D'],
      links:[
        { label:'View Project', url:'https://zahra1.itch.io/4096' }
      ],
      year:'', client:'', category:'Unity', duration:'—'
    }
  ]

};

/* ─── BACKGROUND GRADIENTS ───────────────────────────────────────────────────
   Fallback gradient styles used when a project has no thumbnail image.
   Assigned by index (idx % GRADS.length) so each placeholder looks distinct. */
var GRADS = [
  'linear-gradient(140deg,#111,#1d1d1d)',
  'linear-gradient(140deg,#0e0e0e,#1a1a1a)',
  'linear-gradient(140deg,#131313,#202020)',
  'linear-gradient(140deg,#0c0c0c,#181818)',
  'linear-gradient(140deg,#151515,#222)',
  'linear-gradient(140deg,#101010,#1c1c1c)'
];


/* ─── DOMINANT COLOR CACHE ───────────────────────────────────────────────────
   Extracts the average colour from a thumbnail image by drawing it into a
   tiny 64×64 canvas and averaging the pixel RGBA values.
   Results are stored in colorCache keyed by image URL to avoid re-processing
   the same image on every render.

   Used to tint the page background and fullscreen colour overlay to match
   each project's visual identity.
   ─────────────────────────────────────────────────────────────────────────── */
var colorCache = {};
function getDominantColor(imgSrc, callback) {
  if (!imgSrc) { callback(null); return; }
  if (colorCache[imgSrc]) { callback(colorCache[imgSrc]); return; } // Return cached value

  var img = new Image();
  img.crossOrigin = 'anonymous'; // Required to read pixel data cross-origin

  img.onload = function() {
    // Draw the image scaled down to 64×64 for fast pixel sampling
    var c = document.createElement('canvas'); c.width = 64; c.height = 64;
    var ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0, 64, 64);
    var data = ctx.getImageData(0, 0, 64, 64).data; // Flat RGBA array

    // Accumulate RGB totals, sampling every 4th pixel (i += 16 skips 3 pixels)
    var r = 0, g = 0, b = 0, count = 0;
    for (var i = 0; i < data.length; i += 16) { r += data[i]; g += data[i+1]; b += data[i+2]; count++; }

    // Store averaged colour and pass it to the callback
    colorCache[imgSrc] = 'rgb('+Math.round(r/count)+','+Math.round(g/count)+','+Math.round(b/count)+')';
    callback(colorCache[imgSrc]);
  };
  img.onerror = function() { callback(null); };
  img.src = imgSrc;
}

/* Sets the page background colour based on the active project's thumbnail.
   Falls back to near-black #080808 if no thumbnail is available. */
function applyGridBg(v) {
  if (!v || !v.thumb) {
    document.body.style.background = '#080808';
    document.documentElement.style.setProperty('--page-bg', '#080808');
    return;
  }
  getDominantColor(v.thumb, function(color) {
    var bg = color || '#080808';
    document.body.style.background = bg;
    document.documentElement.style.setProperty('--page-bg', bg); // Also updates CSS var used by edge fades
  });
}

/* Applies the dominant colour as a semi-transparent tint overlay in fullscreen mode.
   mix-blend-mode: color in CSS means it colours without affecting brightness.
   Passing null resets/hides the tint. */
function applyColorTint(color) {
  var tint = document.getElementById('colorTint');
  if (!tint) return;
  tint.style.background = color || '';
  tint.style.opacity    = color ? '0.4' : '0';
}


/* ─── CUSTOM CURSOR ──────────────────────────────────────────────────────────
   Three cursor elements are tracked and moved together via GSAP on every
   mousemove event. GSAP's duration/ease on each produces a lag offset so
   the ring trails behind the dot, giving a sense of depth.

   Cursor size changes:
   - mousedown: shrinks to 5px (press feedback)
   - mouseup:   restores to default
   - hover on interactive elements: grows to 20px
   ─────────────────────────────────────────────────────────────────────────── */
var cursorDot    = document.getElementById('cursorDot');
var scrollRingEl = document.getElementById('cursorScrollRing');
var cursorSize   = 8;
var scrollCursorEl = document.getElementById('scrollCursor');

document.addEventListener('mousemove', function(e) {
  // Dot: quick follow (0.18s lag)
  gsap.to(cursorDot,      { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power3.out' });
  // Ring: slower follow (0.28s lag) — visible trail effect
  gsap.to(scrollRingEl,   { x: e.clientX, y: e.clientY, duration: 0.28, ease: 'power3.out' });
  // "Scroll" text: instant snap (no animation needed — it's barely visible)
  gsap.set(scrollCursorEl,{ x: e.clientX, y: e.clientY });
});

function setCursorSize(size, dur) {
  gsap.to(cursorDot, { width: size, height: size, duration: dur || 0.35, ease: 'expo.out' });
}
document.addEventListener('mousedown', function() { setCursorSize(5, 0.15); });
document.addEventListener('mouseup',   function() { setCursorSize(cursorSize, 0.35); });

// Grow the cursor on interactive elements; shrink when leaving them
document.addEventListener('mouseover', function(e) {
  if (e.target.closest('a,button,.nav-arrow,.video-item,.cat-item,.zoom-btn,.info-link')) { cursorSize = 20; setCursorSize(20); }
});
document.addEventListener('mouseout', function(e) {
  if (e.target.closest('a,button,.nav-arrow,.video-item,.cat-item,.zoom-btn,.info-link')) { cursorSize = 8; setCursorSize(8); }
});


/* ─── NOISE CANVAS ───────────────────────────────────────────────────────────
   Fills a full-screen <canvas> with random greyscale pixel values every
   animation frame, creating an animated film-grain / static texture.
   The canvas is at z-index 9999 with 0.03 opacity — barely visible but adds
   tactile depth to the otherwise smooth dark backgrounds.

   IIFE (immediately-invoked function expression) keeps the variables scoped. */
(function() {
  var c = document.getElementById('noiseCanvas'), ctx = c.getContext('2d');

  // Keep the canvas pixel-for-pixel with the viewport on resize
  function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);

  // rAF loop: generate new noise every frame
  (function draw() {
    var id = ctx.createImageData(c.width, c.height), d = id.data;
    for (var i = 0; i < d.length; i += 4) {
      var v = Math.random() * 255 | 0; // Random greyscale value (| 0 is a fast Math.floor)
      d[i] = d[i+1] = d[i+2] = v; d[i+3] = 255; // Full alpha
    }
    ctx.putImageData(id, 0, 0);
    requestAnimationFrame(draw);
  })();
})();


/* ─── STATE ──────────────────────────────────────────────────────────────────
   Centralised state variables for the gallery and fullscreen view.
   These are read and modified by event handlers and animation functions. */
var activeCategory  = 'websites'; // Which COLLECTIONS key is currently displayed
var currentIndex    = 0;          // Index of the active card within the category
var scrollLocked    = false;      // Prevents scroll/nav during transitions
var infoPanelOpen   = false;      // Tracks whether the info panel is visible
var isFullOpen      = false;      // Tracks whether fullscreen mode is active
var activeVideoEl   = null;       // Reference to the currently playing <video>
var stopScrollTimer = null;       // Timeout handle for pausing video after wheel stops
var builtItems      = [];         // Array of all .video-item DOM nodes in the track

/* Portrait image scroll and pan state (sketch/image fullscreen mode) */
var imgScrollY      = 0;
var imgScrollTarget = 0;
var imgScrollMax    = 0;
var imgRafId        = null;       // rAF handle for the image lerp loop
var activeImgEl     = null;       // Reference to the active <img> in fullscreen

/* Zoom state — used in image fullscreen mode */
var imgZoom         = 1;          // Current rendered zoom scale
var imgZoomTarget   = 1;          // Target zoom (lerped toward)
var imgPanX         = 0;          // Current X pan offset (px)
var imgPanY         = 0;          // Current Y pan offset (px)
var imgPanXTarget   = 0;          // Target X pan (lerped toward)
var imgPanYTarget   = 0;          // Target Y pan (lerped toward)
var ZOOM_LEVELS     = [1, 1.75, 2.75]; // Three discrete zoom steps
var zoomLevelIdx    = 0;          // Which ZOOM_LEVELS step is active
var isZoomed        = false;      // True when zoom > 1

/* Drag-to-pan state — tracks mouse position at the start of a drag */
var dragActive   = false;
var dragStartX   = 0;
var dragStartY   = 0;
var dragOriginX  = 0;
var dragOriginY  = 0;

/* Convenience helpers */
function currentList() { return COLLECTIONS[activeCategory]; }
function isImageCat()  { return activeCategory === 'sketches'; } // Image mode vs video mode


/* ─── TRACK POSITIONING ──────────────────────────────────────────────────────
   The gallery-track is a vertically stacked column of cards.
   To create a seamless infinite-feel scroll, the same set of items is
   duplicated SETS times (5 copies). MID is the middle set index.

   trackY() calculates the CSS transform Y value to position the track so that
   the card at currentIndex in the MID set sits in the vertical centre of the
   viewport. Changing currentIndex then re-runs trackY() for the new position.

   itemH()  — height of one card slot (58vh + 6px gap × 2)
   origY()  — the Y offset that centres one card in the viewport
   ─────────────────────────────────────────────────────────────────────────── */
var SETS = 5, MID = Math.floor(SETS / 2); // 5 sets, middle set = index 2
var track = document.getElementById('galleryTrack');

function itemH() { return window.innerHeight * 0.58 + 12; } // Card height + gap
function origY() { return window.innerHeight / 2 - itemH() / 2; }  // Centre offset
function trackY() {
  var n = realItems(currentList()).length;
  var base = -(MID * itemH() * n);         // Offset to the middle set
  return base + origY() - currentIndex * itemH(); // Then move to active card
}
function snapTrack() { gsap.set(track, { y: trackY() }); }  // Instant position (used on init/resize)
function animTrack()  { gsap.to(track,  { y: trackY(), duration: 0.8, ease: 'expo.out' }); } // Animated move

/* Filters out _sectionHeader objects, returning only real project items */
function realItems(list) {
  return list.filter(function(v) { return !v._sectionHeader; });
}

/* ─── BUILD TRACK ────────────────────────────────────────────────────────────
   Clears the gallery-track and reconstructs it for the given category list.
   Renders SETS copies of the real items to enable infinite-feel scrolling.

   Each .video-item contains:
   - .video-inner (slightly oversized for parallax — 112% w/h, inset -6%)
     - img.video-thumb  OR  .video-placeholder (if no thumb)
   - .video-label  (project name, shown on hover)
   - .click-hint   ("View" text, shown on hover)

   Section header dividers are positioned absolutely after the main build. */
function buildTrack(list) {
  track.innerHTML = '';
  builtItems = [];
  var real = realItems(list);

  for (var s = 0; s < SETS; s++) {
    real.forEach(function(v, i) {
      var item = document.createElement('div');
      item.className = 'video-item';
      item.dataset.index = i; // Used by event handlers to identify which project was clicked

      var inner = document.createElement('div'); inner.className = 'video-inner';

      if (v.thumb) {
        var img = document.createElement('img');
        img.className = 'video-thumb';
        img.src = v.thumb; img.alt = v.label; img.loading = 'lazy';
        inner.appendChild(img);
      } else {
        // Fallback: display the project ID in the gradient placeholder
        var ph = document.createElement('div');
        ph.className = 'video-placeholder';
        ph.style.background = GRADS[i % GRADS.length];
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

  // Position section header dividers if the category uses them
  if (list.some(function(v) { return v._sectionHeader; })) {
    positionSectionHeaders(list, real);
  }

  // Pre-warm the colour cache for all thumbnails so tints apply instantly on open
  real.forEach(function(v) { if (v.thumb) getDominantColor(v.thumb, function(){}); });
}

/* ─── SECTION HEADER DIVIDERS ────────────────────────────────────────────────
   For the 'other' category, renders labelled horizontal dividers
   (e.g. "Figma", "Android Studio", "Unity") positioned absolutely
   just above the first card in each sub-group.

   Positioning maths: the MID set starts at MID * real.length * itemH().
   Each card is at setOffset + realIdx * itemH(). The divider is 44px above that. */
function positionSectionHeaders(list, real) {
  // Remove any previously rendered dividers
  var old = track.querySelectorAll('.section-header-divider');
  old.forEach(function(el) { el.parentNode.removeChild(el); });

  var h = itemH();
  var realIdx = 0;
  list.forEach(function(v) {
    if (v._sectionHeader) {
      var setOffset = MID * real.length * h;
      var cardTop   = setOffset + realIdx * h;
      var hdrTop    = cardTop - 44; // 44px gap above the card

      var hdr = document.createElement('div');
      hdr.className = 'section-header-divider';
      hdr.textContent = v._sectionHeader;
      hdr.style.cssText = [
        'position:absolute',
        'left:50%',
        'transform:translateX(-50%)',
        'width:52vw',
        'top:' + hdrTop + 'px',
        'pointer-events:none'
      ].join(';');
      track.appendChild(hdr);
    } else {
      realIdx++; // Only increment for real project items, not headers
    }
  });
}


/* ─── UI UPDATE ──────────────────────────────────────────────────────────────
   Called whenever currentIndex or activeCategory changes.
   Updates the counter text, progress bar height, and card scale/opacity.
   The active card is scaled up (1.06), all others scaled down (0.94) and dimmed. */
function updateUI() {
  var list  = realItems(currentList());
  var total = list.length;
  var v     = list[currentIndex];

  document.getElementById('counterMain').textContent = String(currentIndex + 1).padStart(3, '0');
  document.querySelector('.counter-sub').textContent = String(total).padStart(3, '0');
  document.getElementById('progressBar').style.height = ((currentIndex + 1) / total * 100) + '%';

  builtItems.forEach(function(item) {
    var d = Math.abs(parseInt(item.dataset.index) - currentIndex); // Distance from active card
    gsap.to(item, { scale: d === 0 ? 1.06 : 0.94, opacity: d === 0 ? 1 : 0.55, duration: 0.6, ease: 'power3.out' });
  });

  if (!isFullOpen) applyGridBg(v); // Update page background colour in grid view
}

/* Advances the active index by dir (+1 or -1), wrapping around.
   scrollLocked is checked to prevent interrupting animations. */
function stepBy(dir) {
  if (scrollLocked) return;
  var total = realItems(currentList()).length;
  currentIndex = (currentIndex + dir + total) % total; // Modulo for circular wrapping
  animTrack(); updateUI();
}

/* Arrow button click handlers */
document.getElementById('arrowUp').addEventListener('click',   function() { stepBy(-1); });
document.getElementById('arrowDown').addEventListener('click', function() { stepBy(1); });

/* Keyboard navigation:
   Arrow keys navigate the gallery in grid mode.
   In fullscreen + zoomed image mode they pan the image instead.
   + / - keys cycle zoom levels. Escape closes panels/fullscreen. */
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp')    { if (isFullOpen && isImageCat() && isZoomed) { imgPanYTarget += 80; clampPan(); } else stepBy(-1); }
  if (e.key === 'ArrowDown')  { if (isFullOpen && isImageCat() && isZoomed) { imgPanYTarget -= 80; clampPan(); } else stepBy(1); }
  if (e.key === 'ArrowLeft')  { if (isFullOpen && isImageCat() && isZoomed) { imgPanXTarget += 80; clampPan(); } else stepBy(-1); }
  if (e.key === 'ArrowRight') { if (isFullOpen && isImageCat() && isZoomed) { imgPanXTarget -= 80; clampPan(); } else stepBy(1); }
  if (e.key === 'Escape') {
    if (infoPanelOpen) closeInfoPanel();
    else if (isFullOpen) closeFullscreen();
  }
  if (isFullOpen && isImageCat()) {
    if (e.key === '+' || e.key === '=') cycleZoom(1);
    if (e.key === '-')                  cycleZoom(-1);
  }
});


/* ─── WHEEL HANDLER ──────────────────────────────────────────────────────────
   Intercepts all wheel events (prevents native scroll).

   In grid mode: accumulates scroll delta; fires stepBy() once the threshold
   (30px) is exceeded, then locks for 850ms to prevent overshooting.

   In fullscreen video mode: plays the video while scrolling, pauses 150ms
   after scrolling stops (simulates a scrub-on-scroll feel).

   In fullscreen image mode: pans the image vertically if zoomed in.
   Ctrl/Cmd + wheel cycles zoom levels.
   ─────────────────────────────────────────────────────────────────────────── */
var wheelAccum = 0, wheelLocked = false, wheelResetTimer = null;

window.addEventListener('wheel', function(e) {
  e.preventDefault(); // Always prevent default to block browser scroll/zoom

  if (isFullOpen) {
    if (!isImageCat()) {
      /* ── Video fullscreen: play while scrolling, pause when idle ── */
      if (!activeVideoEl) return;
      if (activeVideoEl.paused) activeVideoEl.play().catch(function(){});
      clearTimeout(stopScrollTimer);
      stopScrollTimer = setTimeout(function() {
        if (activeVideoEl && !activeVideoEl.paused) activeVideoEl.pause();
      }, 150); // Pause 150ms after last wheel event
      return;
    }

    /* ── Image fullscreen: zoom or pan ── */
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      cycleZoom(e.deltaY > 0 ? -1 : 1); // Ctrl+scroll = zoom in/out
      return;
    }
    if (isZoomed) {
      imgPanYTarget -= e.deltaY * 0.8; // Pan image when zoomed
      clampPan();
    }
    return;
  }

  /* ── Grid mode: accumulate delta and step when threshold is met ── */
  wheelAccum += e.deltaY;
  clearTimeout(wheelResetTimer);
  wheelResetTimer = setTimeout(function() { wheelAccum = 0; }, 80); // Reset accumulator if scroll pauses
  if (wheelLocked) return;
  if (Math.abs(wheelAccum) < 30) return; // Minimum scroll threshold

  var dir = wheelAccum > 0 ? 1 : -1;
  wheelAccum = 0;
  wheelLocked = true;
  stepBy(dir);
  setTimeout(function() { wheelLocked = false; }, 850); // Lock duration matches animTrack duration
}, { passive: false }); // passive:false required to allow preventDefault()

/* Recalculate track position on viewport resize */
window.addEventListener('resize', function() {
  snapTrack(); recalcImgScroll();
  var list = currentList();
  if (list.some(function(v) { return v._sectionHeader; })) {
    positionSectionHeaders(list, realItems(list));
  }
});


/* ─── IMAGE SCROLL / PAN ─────────────────────────────────────────────────────
   recalcImgScroll() resets the pan target when the image changes or resizes.

   clampPan() constrains imgPanXTarget / imgPanYTarget so the image can't be
   panned beyond its own edges (preventing empty space from showing).
   The maximum pan distance scales with the current zoom level.

   applyImgTransform() writes the calculated translate + scale to the image's
   CSS transform property.

   startImgLerp() / stopImgLerp() manage a requestAnimationFrame loop that
   smoothly interpolates imgPanX/Y and imgZoom toward their target values
   each frame, producing the smooth pan/zoom feel.
   ─────────────────────────────────────────────────────────────────────────── */
function recalcImgScroll() {
  if (!activeImgEl) return;
  imgScrollMax = 0;
  imgScrollTarget = 0;
  clampPan();
}

function clampPan() {
  if (!activeImgEl) return;
  // Calculate the rendered size of the image at current zoom
  var rw = activeImgEl.offsetWidth  * imgZoom;
  var rh = activeImgEl.offsetHeight * imgZoom;
  // Max pan = half the overflow in each axis (the portion that extends beyond the viewport)
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
  if (imgRafId) return; // Already running — avoid duplicate loops
  (function loop() {
    // Linear interpolation toward target values (10–12% per frame)
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
  // Reset all image state to defaults
  activeImgEl     = null;
  imgScrollY      = imgScrollTarget = imgScrollMax = 0;
  imgZoom         = imgZoomTarget = 1;
  imgPanX         = imgPanXTarget = 0;
  imgPanY         = imgPanYTarget = 0;
  zoomLevelIdx    = 0;
  isZoomed        = false;
}


/* ─── ZOOM ───────────────────────────────────────────────────────────────────
   cycleZoom(dir) steps through ZOOM_LEVELS by dir (+1 = in, -1 = out).
   Clamped to [0, ZOOM_LEVELS.length - 1].
   Resetting to level 0 also resets pan to centre.

   updateZoomUI() dims the button that has reached its limit. */
function cycleZoom(dir) {
  zoomLevelIdx  = Math.max(0, Math.min(ZOOM_LEVELS.length - 1, zoomLevelIdx + dir));
  imgZoomTarget = ZOOM_LEVELS[zoomLevelIdx];
  isZoomed      = zoomLevelIdx > 0;
  if (!isZoomed) { imgPanXTarget = 0; imgPanYTarget = 0; } // Re-centre when zooming out fully
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
  // Dim buttons at the limits of the zoom range
  if (inBtn)  inBtn.style.opacity  = zoomLevelIdx < ZOOM_LEVELS.length - 1 ? '1' : '0.3';
  if (outBtn) outBtn.style.opacity = zoomLevelIdx > 0 ? '1' : '0.3';
}


/* ─── DRAG TO PAN ────────────────────────────────────────────────────────────
   Attaches mouse and touch drag listeners to an image element.
   Drag is only active when isZoomed = true (no need to pan at 1:1 scale).
   dragOrigin stores the pan offset at the moment the drag began, so the
   pan delta is calculated relative to that starting point each move event. */
function attachDragPan(el) {
  el.addEventListener('mousedown', function(e) {
    if (!isZoomed) return;
    dragActive  = true;
    dragStartX  = e.clientX;
    dragStartY  = e.clientY;
    dragOriginX = imgPanXTarget; // Remember pan position at drag start
    dragOriginY = imgPanYTarget;
    el.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', function(e) {
    if (!dragActive) return;
    imgPanXTarget = dragOriginX + (e.clientX - dragStartX);
    imgPanYTarget = dragOriginY + (e.clientY - dragStartY);
    clampPan(); // Prevent panning beyond image edges
  });
  window.addEventListener('mouseup', function() {
    if (!dragActive) return;
    dragActive = false;
    if (activeImgEl) activeImgEl.style.cursor = isZoomed ? 'grab' : 'default';
  });

  /* Touch equivalents for mobile */
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
    imgPanXTarget = dragOriginX + (e.touches[0].clientX - dragStartX);
    imgPanYTarget = dragOriginY + (e.touches[0].clientY - dragStartY);
    clampPan();
  }, { passive: true });
  el.addEventListener('touchend', function() { dragActive = false; });
}


/* ─── PINCH TO ZOOM ──────────────────────────────────────────────────────────
   Handles two-finger pinch gestures on touch devices.
   Calculates the distance between two touch points and maps the change in
   distance to a proportional change in zoom level (relative to pinchStartZoom).
   The result is clamped to the min/max zoom range and snapped to the nearest
   ZOOM_LEVELS index for the updateZoomUI() display. */
var pinchStartDist = 0;
var pinchStartZoom = 1;

function attachPinch(el) {
  el.addEventListener('touchstart', function(e) {
    if (e.touches.length === 2) {
      var dx = e.touches[0].clientX - e.touches[1].clientX;
      var dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStartDist = Math.sqrt(dx*dx + dy*dy); // Euclidean distance between fingers
      pinchStartZoom = imgZoomTarget;
    }
  }, { passive: true });
  el.addEventListener('touchmove', function(e) {
    if (e.touches.length !== 2) return;
    var dx   = e.touches[0].clientX - e.touches[1].clientX;
    var dy   = e.touches[0].clientY - e.touches[1].clientY;
    var dist = Math.sqrt(dx*dx + dy*dy);
    var raw  = pinchStartZoom * (dist / pinchStartDist); // Scale proportionally to finger spread
    imgZoomTarget = Math.max(ZOOM_LEVELS[0], Math.min(ZOOM_LEVELS[ZOOM_LEVELS.length-1], raw));
    isZoomed      = imgZoomTarget > 1.05;

    // Find the nearest discrete zoom level for the UI indicator
    var closest = 0, minD = Infinity;
    ZOOM_LEVELS.forEach(function(z, i) { var d = Math.abs(z - imgZoomTarget); if (d < minD) { minD = d; closest = i; } });
    zoomLevelIdx = closest;
    recalcImgScroll();
    updateZoomUI();
  }, { passive: true });
  el.addEventListener('touchend', function(e) {
    if (e.touches.length < 2) pinchStartDist = 0;
  });
}


/* ─── DOUBLE-CLICK / DOUBLE-TAP ──────────────────────────────────────────────
   Double-clicking/tapping an image in fullscreen toggles between zoom level 1
   (1.75×) and fully zoomed out (1×).
   lastTap tracks the timestamp of the previous touchend to detect a 300ms
   double-tap window on mobile. */
var lastTap = 0;
function attachDoubleTap(el) {
  el.addEventListener('dblclick', function() {
    if (!isImageCat() || !isFullOpen) return;
    if (isZoomed) resetZoom();
    else { zoomLevelIdx = 1; imgZoomTarget = ZOOM_LEVELS[1]; isZoomed = true; recalcImgScroll(); updateZoomUI(); }
  });
  el.addEventListener('touchend', function() {
    var now = Date.now();
    if (now - lastTap < 300) { // 300ms double-tap window
      if (isZoomed) resetZoom();
      else { zoomLevelIdx = 1; imgZoomTarget = ZOOM_LEVELS[1]; isZoomed = true; recalcImgScroll(); updateZoomUI(); }
    }
    lastTap = now;
  });
}


/* ─── ACTIVE ITEM HELPER ─────────────────────────────────────────────────────
   Finds the .video-item DOM node closest to the vertical centre of the viewport
   that matches currentIndex. Because the track contains 5 copies of each card,
   this ensures we pick the one that's actually visible (closest to screen centre)
   for use as the animation origin in openFullscreen. */
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


/* ─── VIDEO STOP ─────────────────────────────────────────────────────────────
   Cleanly tears down the active video element.
   Removing the src and calling load() releases the browser's media resources,
   preventing memory leaks and background audio when navigating away. */
function stopFullVideo() {
  clearTimeout(stopScrollTimer);
  if (activeVideoEl) {
    activeVideoEl.pause();
    activeVideoEl.removeAttribute('src');
    activeVideoEl.load(); // Triggers the media element to reset and release resources
    activeVideoEl = null;
  }
  var fill = document.getElementById('videoProgressFill');
  if (fill) fill.style.width = '0%';
}


/* ─── FULLSCREEN ELEMENT REFERENCES ─────────────────────────────────────────
   Cached DOM references used by buildFullBg, openFullscreen, and closeFullscreen. */
var fullscreen = document.getElementById('fullscreen');
var fullBg     = document.getElementById('fullBg');
var fullTitle  = document.getElementById('fullTitle');
var fsNum      = document.getElementById('fsNum');
var fsName     = document.getElementById('fsName');
var fullMeta   = document.getElementById('fullMeta');
var fullHeader = document.getElementById('fullHeader');
var zoomInner  = document.getElementById('zoomCloneInner');
var scrollHint = document.getElementById('scrollHint');


/* ─── BUILD FULLSCREEN BACKGROUND ───────────────────────────────────────────
   Populates #fullBg with either a video element or a portrait image,
   depending on whether the active category is 'sketches' (image mode)
   or a video category.

   VIDEO MODE:
   - Creates a <video> element set to muted, looping, and inline playback
   - Plays immediately, then pauses (pre-buffering trick) so first scroll
     resumes from frame 0 without a delay
   - A rAF loop updates the #videoProgressFill width each frame
   - Clicking the video toggles mute

   IMAGE MODE:
   - Wraps the image in a centred flex container
   - Attaches drag, pinch, double-tap, and zoom listeners
   - Starts the lerp loop once the image has loaded
   - Reveals zoom controls with a short GSAP fade

   Both modes apply a colour tint from the thumbnail's dominant colour. */
function buildFullBg(v, idx) {
  stopFullVideo();
  stopImgLerp();
  fullBg.innerHTML = '';
  fullBg.classList.remove('image-mode');

  // Hide zoom controls until an image loads
  var zoomCtrl = document.getElementById('zoomControls');
  if (zoomCtrl) { zoomCtrl.style.opacity = '0'; zoomCtrl.style.pointerEvents = 'none'; }

  // Apply colour tint from thumbnail
  var tintSrc = v.thumb || v.img || '';
  if (tintSrc) getDominantColor(tintSrc, applyColorTint);

  if (!isImageCat()) {
    /* ── VIDEO ── */
    if (v.src) {
      var vid = document.createElement('video');
      vid.muted = true; vid.playsInline = true; vid.preload = 'auto'; vid.loop = true;
      vid.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;opacity:0;will-change:transform;transform:translateZ(0);transition:opacity 0.6s ease';

      var rafId = null;
      // rAF loop to update the video progress bar
      function tickProgress() {
        var fill = document.getElementById('videoProgressFill');
        if (fill && vid.duration) fill.style.width = (vid.currentTime / vid.duration * 100) + '%';
        rafId = requestAnimationFrame(tickProgress);
      }

      vid.addEventListener('canplay', function onReady() {
        vid.removeEventListener('canplay', onReady);
        // Play then immediately pause — pre-buffers the video at frame 0
        vid.play().then(function() { vid.pause(); vid.currentTime = 0; }).catch(function(){});
        setTimeout(function() { vid.style.opacity = '1'; }, 50); // Short delay avoids flash
        tickProgress();
      });
      vid.addEventListener('emptied', function() {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; } // Cancel progress loop when src is cleared
      });
      vid.addEventListener('click', function() { vid.muted = !vid.muted; }); // Click to toggle sound

      fullBg.appendChild(vid);
      activeVideoEl = vid;
      vid.src = v.src; vid.load(); // Setting src after appending prevents double-load
    } else {
      // No video src: show a gradient placeholder with the project ID
      var ph = document.createElement('div');
      ph.className = 'fs-placeholder';
      ph.style.background = GRADS[idx % GRADS.length];
      ph.textContent = v.id;
      fullBg.appendChild(ph);
    }

  } else {
    /* ── PORTRAIT IMAGE (sketches) ── */
    fullBg.classList.add('image-mode'); // CSS flag disables the dark overlay

    var fullImg = v.img || v.thumb;
    if (fullImg) {
      // Wrapper provides the centring flex layout; overflow:hidden prevents pan overflow
      var wrapper = document.createElement('div');
      wrapper.id = 'imgWrapper';
      wrapper.style.cssText = 'position:absolute;inset:0;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#080808;';

      var img = document.createElement('img');
      img.className = 'fs-portrait';
      img.src = fullImg;
      img.style.cssText = [
        'display:block','max-width:100%','max-height:100%',
        'width:auto','height:auto','object-fit:contain',
        'will-change:transform','transform:translate(0px,0px) scale(1)',
        'transform-origin:center center','opacity:0',
        'transition:opacity 0.6s ease','user-select:none',
        '-webkit-user-drag:none','cursor:zoom-in'
      ].join(';');

      img.onload = function() {
        img.style.opacity = '1';
        // Set as active image and reset all pan/zoom state
        activeImgEl = img;
        imgZoom = imgZoomTarget = 1;
        imgPanX = imgPanXTarget = 0;
        imgScrollY = imgScrollTarget = 0;
        imgScrollMax = 0;
        zoomLevelIdx = 0; isZoomed = false;
        startImgLerp();
        updateZoomUI();
        // Reveal zoom controls after image fades in
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
      // No image available: gradient placeholder
      var phI = document.createElement('div');
      phI.className = 'fs-placeholder';
      phI.style.cssText = 'height:100%;display:flex;align-items:center;justify-content:center;';
      phI.style.background = GRADS[idx % GRADS.length];
      phI.textContent = v.id;
      fullBg.appendChild(phI);
    }
  }
}


/* ─── OPEN FULLSCREEN ────────────────────────────────────────────────────────
   Expands the active gallery card to fill the screen using a GSAP scale
   animation, then cross-fades into the real fullscreen content.

   Animation sequence:
   1. Get the bounding rect of the active .video-item (the visual origin)
   2. Set up the fullscreen elements (populate content, hide with opacity 0)
   3. Fade out all non-active gallery cards
   4. Scale the active card up to fill the viewport (scale factor = viewport / card size)
   5. On complete: show fullscreen, restore card scale, animate in meta UI elements

   zoomClone is populated with the card's thumbnail so it can visually bridge
   the gap while the real fullscreen content loads (though it's now mostly used
   as a reference — the card scale animation is the primary transition). */
function openFullscreen(idx) {
  if (scrollLocked) return;
  scrollLocked = true;

  var activeItem = getActiveItem();
  var rect = activeItem ? activeItem.getBoundingClientRect() : null;
  if (!rect) { scrollLocked = false; return; }

  var v     = realItems(currentList())[idx];
  var total = realItems(currentList()).length;

  buildFullBg(v, idx); // Build video or image content in the background

  // Populate fullscreen metadata
  fsNum.textContent     = v.id + ' / ' + String(total).padStart(3, '0');
  fsName.textContent    = v.label;
  fullTitle.textContent = v.label;
  var imgTitleEl = document.getElementById('imgTitle');
  if (imgTitleEl) imgTitleEl.textContent = v.label;

  // Hide all fullscreen UI elements before revealing them on completion
  gsap.set(fullscreen, { opacity: 0 });
  gsap.set(fullMeta,   { opacity: 0, y: 12 });
  gsap.set(fullHeader, { opacity: 0 });
  gsap.set(scrollHint, { opacity: 0, y: 8 });

  // Change the hint text to match the current mode
  var hintSpan = scrollHint.querySelector('span');
  if (hintSpan) hintSpan.textContent = isImageCat() ? 'Double-click to zoom · Drag to pan' : 'Tap for sound';

  // Populate the zoom clone with the card thumbnail
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

  // Calculate the scale needed to make the card fill the full viewport
  var scaleX = window.innerWidth  / rect.width;
  var scaleY = window.innerHeight / rect.height;
  var scale  = Math.max(scaleX, scaleY) * 1.02; // *1.02 ensures no edge gaps

  // Fade out all other cards during the expansion
  builtItems.forEach(function(item) {
    if (parseInt(item.dataset.index) !== idx)
      gsap.to(item, { opacity: 0, duration: 0.3, ease: 'power2.in' });
  });

  // Expand the active card to fill the screen
  gsap.to(activeItem, {
    scale: scale, duration: 0.75, ease: 'expo.inOut',
    onComplete: function() {
      fullscreen.classList.add('active'); // CSS: pointer-events: all
      gsap.set(fullscreen, { opacity: 1 });
      isFullOpen = true;
      document.body.classList.add('fullscreen-open');
      document.body.classList.add(isImageCat() ? 'fullscreen-image' : 'fullscreen-video');
      gsap.set(activeItem, { scale: 1.06 }); // Reset card scale behind fullscreen

      // Animate in the appropriate UI elements for the mode
      if (!isImageCat()) {
        gsap.to(fullMeta,   { opacity: 1, y: 0,   duration: 0.5, delay: 0.05,  ease: 'power2.out' });
        gsap.to(scrollHint, { opacity: 0.6, y: 0, duration: 0.5, delay: 0.15,  ease: 'power2.out' });
      } else {
        gsap.set(fullMeta,   { opacity: 0 }); // Meta hidden in image mode
        gsap.set(scrollHint, { opacity: 0 });
        var itEl = document.getElementById('imgTitle');
        if (itEl) gsap.to(itEl, { opacity: 1, y: 0, duration: 0.5, delay: 0.1, ease: 'power2.out' });
      }
      gsap.to(fullHeader, { opacity: 1, duration: 0.4, delay: 0.05, ease: 'power2.out',
        onStart: function() { fullHeader.style.pointerEvents = 'all'; }
      });
    }
  });
}


/* ─── CLOSE FULLSCREEN ───────────────────────────────────────────────────────
   Reverses the open animation: fades out the fullscreen overlay, then
   scales the active card back down from full-screen size to its normal size.
   The reverse scale is calculated as the inverse of the opening scale
   (viewport size / card natural size).

   During the reverse animation all other cards fade back in. */
function closeFullscreen() {
  if (!isFullOpen) return;
  closeInfoPanel(); // Close info panel if open
  stopFullVideo();
  stopImgLerp();
  applyColorTint(null); // Clear colour tint

  var zc = document.getElementById('zoomControls');
  if (zc) { gsap.to(zc, { opacity: 0, duration: 0.2 }); zc.style.pointerEvents = 'none'; }

  var activeItem = getActiveItem();

  // Fade out all fullscreen UI elements
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

      // Calculate the reverse scale: full screen → card size
      var rect = activeItem.getBoundingClientRect();
      var fillScale = Math.max(
        window.innerWidth  / (rect.width  / 1.06),
        window.innerHeight / (rect.height / 1.06)
      ) * 1.02;

      // Start at the fill scale and animate back to normal card scale
      gsap.set(activeItem, { scale: fillScale });
      gsap.to(activeItem, {
        scale: 1.06, duration: 0.72, ease: 'expo.inOut',
        onComplete: function() {
          scrollLocked = false;
          // Restore all cards to their correct opacity
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

/* Click on a gallery card:
   - If the clicked card is not the active one, step toward it first
   - If it is the active one, open fullscreen */
track.addEventListener('click', function(e) {
  if (scrollLocked) return;
  var item = e.target.closest('.video-item');
  if (!item) return;
  var idx = parseInt(item.dataset.index);
  if (idx !== currentIndex) { stepBy(idx > currentIndex ? 1 : -1); return; }
  openFullscreen(idx);
});


/* ─── ZOOM BUTTON HANDLERS ───────────────────────────────────────────────────
   Only active in fullscreen + image mode. Each click cycles one step. */
document.getElementById('zoomInBtn').addEventListener('click', function() {
  if (!isFullOpen || !isImageCat()) return;
  cycleZoom(1);
});
document.getElementById('zoomOutBtn').addEventListener('click', function() {
  if (!isFullOpen || !isImageCat()) return;
  cycleZoom(-1);
});


/* ─── CATEGORY NAVIGATION ────────────────────────────────────────────────────
   Clicking a category item triggers a multi-step transition:

   1. Animate current cards out (scale down + skew + fade)
   2. Flash a translucent white overlay across the page (glitch effect)
   3. Show the catFlash label with a scrambled-text animation
   4. After 340ms: switch category, rebuild track, snap to position
   5. After 700ms: animate new cards in, hide catFlash, unlock scroll

   scrollLocked prevents new interactions during the transition. */
var catFlash = document.getElementById('catFlash');
var catItems = document.querySelectorAll('.cat-item');

/* ── Glitch text scramble ── */
var GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?/\\|<>[]{}~^*';

/* Animates the text of el by cycling through random GLITCH_CHARS characters
   before resolving each letter to its final value at a randomised time.
   Each letter gets its own <span> with class 'glitch-letter'.
   Letters resolve left-to-right with slight randomness (resolveAt array). */
function scrambleText(el, finalText, duration, onDone) {
  var steps = Math.round(duration / 40), stepsDone = 0, len = finalText.length;
  el.innerHTML = '';
  var spans = [];
  for (var i = 0; i < len; i++) {
    var sp = document.createElement('span');
    sp.className = 'glitch-letter';
    sp.textContent = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    el.appendChild(sp); spans.push(sp);
  }
  // Schedule when each letter resolves: roughly left-to-right with jitter
  var resolveAt = spans.map(function(_, i) {
    return Math.floor(steps * (0.35 + (i / len) * 0.55 + Math.random() * 0.1));
  });

  var iv = setInterval(function() {
    stepsDone++;
    spans.forEach(function(sp, i) {
      if (stepsDone >= resolveAt[i]) {
        sp.textContent = finalText[i]; sp.classList.add('resolved'); // Lock to final character
      } else {
        // Random glitch character with colour variation
        sp.textContent = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        sp.style.color = Math.random() > 0.6
          ? 'rgba(240,237,232,0.35)'
          : Math.random() > 0.5 ? 'rgba(200,180,255,0.8)' : 'rgba(240,237,232,0.9)';
      }
    });
    if (stepsDone >= steps) {
      clearInterval(iv);
      spans.forEach(function(sp, i) { sp.textContent = finalText[i]; sp.classList.add('resolved'); sp.style.color = ''; });
      if (onDone) onDone();
    }
  }, 40); // 40ms per step (25 fps animation)
}

catItems.forEach(function(catEl) {
  catEl.addEventListener('click', function() {
    var newCat = catEl.dataset.category;
    if (newCat === activeCategory || scrollLocked) return;
    scrollLocked = true;

    // Update active tick styles
    catItems.forEach(function(c) { c.classList.remove('active'); });
    catEl.classList.add('active');

    var labelMap = { websites: 'Websites', sketches: 'Sketches', other: 'Other' };
    var finalLabel = (labelMap[newCat] || newCat).toUpperCase();

    // Step 1: Animate existing cards out
    gsap.to(builtItems, {
      opacity: 0, y: -32, scale: 0.88, skewY: 3,
      duration: 0.28, ease: 'power3.in', stagger: { amount: 0.12, from: 'center' }
    });

    // Step 2: White flash overlay (mix-blend-mode:overlay so it bleaches the page)
    var flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;inset:0;z-index:49999;background:rgba(240,237,232,0);pointer-events:none;mix-blend-mode:overlay';
    document.body.appendChild(flash);
    gsap.to(flash, { background: 'rgba(240,237,232,0.18)', duration: 0.08, yoyo: true, repeat: 3,
      onComplete: function() { document.body.removeChild(flash); }
    });

    // Step 3: Show and animate the catFlash label
    gsap.set(catFlash, { opacity: 1, scale: 0.78, y: 0, skewX: -8, skewY: 2, filter: 'blur(12px)', letterSpacing: '0.3em' });
    gsap.to(catFlash,  { scale: 1.08, skewX: 0, skewY: 0, filter: 'blur(0px)', letterSpacing: '0.08em', duration: 0.55, ease: 'expo.out' });
    scrambleText(catFlash, finalLabel, 700, null);

    // Add a 3D perspective context for the incoming track animation
    gsap.set('.gallery-wrapper', { perspective: 800 });
    gsap.fromTo('.gallery-track', { rotateX: 14, z: -180, opacity: 0.3 }, { rotateX: 0, z: 0, opacity: 1, duration: 0 });

    // Step 4 (340ms): Switch data, rebuild track, start new cards from off-screen position
    setTimeout(function() {
      activeCategory = newCat; currentIndex = 0;
      buildTrack(COLLECTIONS[activeCategory]); snapTrack();
      gsap.set(builtItems, { opacity: 0, y: 60, scale: 0.85, skewY: -3 });
    }, 340);

    // Step 5 (700ms): Animate new cards in, hide flash label, unlock
    setTimeout(function() {
      gsap.to(catFlash, { opacity: 0, scale: 1.22, skewX: 5, filter: 'blur(18px)', duration: 0.45, ease: 'power3.in' });
      builtItems.forEach(function(item, i) {
        var d = Math.abs(parseInt(item.dataset.index) - currentIndex);
        gsap.to(item, { opacity: d === 0 ? 1 : 0.55, y: 0, scale: d === 0 ? 1.06 : 0.94, skewY: 0, duration: 0.65, delay: i * 0.035, ease: 'expo.out' });
      });
      updateUI(); scrollLocked = false;
    }, 700);
  });
});


/* ─── INFO PANEL ─────────────────────────────────────────────────────────────
   Slide-in side panel populated with metadata for the current project.
   Opens by translating from off-screen (x: '100%') to x: 0 via GSAP.
   Content is built from the COLLECTIONS data object.

   Renders: index, title, description, tags (pills), links (styled anchors),
   and a 2×2 metadata grid (Year / Client / Category / Duration).

   The links section is hidden entirely if the project has no links array
   or an empty links array. */
function openInfoPanel(idx) {
  var v     = realItems(currentList())[idx];
  var total = realItems(currentList()).length;

  document.getElementById('infoIndex').textContent    = v.id + ' / ' + String(total).padStart(3, '0');
  document.getElementById('infoTitle').textContent    = v.label;
  document.getElementById('infoDesc').textContent     = v.desc || '';
  document.getElementById('infoYear').textContent     = v.year || '';
  document.getElementById('infoClient').textContent   = v.client || '';
  document.getElementById('infoCategory').textContent = v.category || '';
  document.getElementById('infoDuration').textContent = v.duration || '';

  /* Render tags as individual <span> elements */
  var tagsEl = document.getElementById('infoTags');
  tagsEl.innerHTML = '';
  (v.tags || []).forEach(function(t) {
    var span = document.createElement('span');
    span.className = 'info-tag';
    span.textContent = t;
    tagsEl.appendChild(span);
  });

  /* Render external links; hide the whole section if there are none */
  var linksWrap = document.getElementById('infoLinksWrap');
  var linksEl   = document.getElementById('infoLinks');
  linksEl.innerHTML = '';

  if (v.links && v.links.length) {
    v.links.forEach(function(lk) {
      var a = document.createElement('a');
      a.className = 'info-link';
      a.href      = lk.url;
      a.target    = '_blank';
      a.rel       = 'noopener noreferrer'; // Security: prevents opener access
      a.style.cursor = 'none';             // Keep custom cursor active on links
      var labelSpan = document.createElement('span');
      labelSpan.textContent = lk.label;
      var arrow = document.createElement('span');
      arrow.className = 'info-link-arrow';
      arrow.innerHTML = '&#8599;'; // ↗ arrow glyph
      a.appendChild(labelSpan);
      a.appendChild(arrow);
      linksEl.appendChild(a);
    });
    linksWrap.style.display = 'block';
  } else {
    linksWrap.style.display = 'none'; // No links: hide the whole section
  }

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


/* ─── INITIALISATION ─────────────────────────────────────────────────────────
   Runs once on page load:
   1. Builds the gallery track for the default category ('websites')
   2. Snaps to the starting position (no animation)
   3. Sets the correct active state on the category nav
   4. Runs the initial UI update (counter, progress bar, card scales)
   5. Plays the intro animation sequence:
      - Fade in "PROJECTS." text
      - Hold briefly
      - Fade out text, fade out white overlay
      - Fade in grid header, nav arrows, and category nav
   ─────────────────────────────────────────────────────────────────────────── */
buildTrack(COLLECTIONS[activeCategory]);
snapTrack();
catItems.forEach(function(c) { c.classList.toggle('active', c.dataset.category === activeCategory); });
updateUI();

gsap.timeline()
  .to('#introText',    { opacity: 1, y: 0,   duration: 1,   ease: 'power3.out' })
  .to({},              {                      duration: 0.8 })                          // Hold beat
  .to('#introText',    { opacity: 0, y: -28, duration: 0.6, ease: 'power2.in' })
  .to('#introOverlay', { opacity: 0, duration: 0.5, ease: 'power2.inOut',
    onComplete: function() { document.getElementById('introOverlay').style.display = 'none'; } // Remove from layout
  })
  .to('#gridHeader',   { opacity: 1, duration: 0.5 }, '-=0.1')
  .to('#navArrows',    { opacity: 1, duration: 0.4,
    onStart: function() {},
    onComplete: function() { document.getElementById('navArrows').style.pointerEvents = 'all'; } // Enable clicks after fade
  }, '-=0.3')
  .to('#categoryNav',  { opacity: 1, duration: 0.5,
    onComplete: function() { document.getElementById('categoryNav').style.pointerEvents = 'all'; }
  }, '-=0.35');
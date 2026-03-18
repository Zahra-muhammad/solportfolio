/* ══════════════════════════════════════
   ABOUT — main script
   ══════════════════════════════════════ */


/* ─── COLOUR MAP ─────────────────────────────────────────────────────────────
   Maps the data-c attribute values on .ow (obsession word) elements
   to their corresponding hex colours.
   Used by wireObsessions() to look up the correct highlight colour
   for each word on hover without hardcoding it in the HTML. */
var CM = {
  rose:   '#f4b3bb',
  sage:   '#9fc9a0',
  butter: '#f6e2a8',
  sky:    '#9ec5e8',
  lilac:  '#c9b5f5',
  peach:  '#f2c4a4'
};


/* ─── NOISE CANVAS ───────────────────────────────────────────────────────────
   Identical to works.js — fills a full-screen <canvas> with random greyscale
   pixels every animation frame to produce an animated film-grain texture.
   IIFE (immediately-invoked function expression) keeps variables scoped locally.

   resize() keeps the canvas pixel-perfect with the viewport.
   The draw loop generates new random noise each frame via createImageData,
   filling every 4th byte (RGBA) with a random 0–255 greyscale value. */
(function () {
  var c   = document.getElementById('noiseCanvas');
  var ctx = c.getContext('2d');

  function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  (function draw() {
    var id = ctx.createImageData(c.width, c.height), d = id.data;
    for (var i = 0; i < d.length; i += 4) {
      var v = Math.random() * 255 | 0; // | 0 = fast floor to integer
      d[i] = d[i + 1] = d[i + 2] = v; // R, G, B all equal = greyscale
      d[i + 3] = 255;                  // Full alpha
    }
    ctx.putImageData(id, 0, 0);
    requestAnimationFrame(draw); // Loop every frame
  })();
})();


/* ─── CUSTOM CURSOR ──────────────────────────────────────────────────────────
   Identical to works.js.
   Two elements (cursorDot and scrollRingEl) are moved by GSAP on every
   mousemove. Different durations create a lag offset — the dot is quicker
   (0.18s) and the ring is slower (0.28s), making the ring visually trail.

   setCursorSize() scales the dot up/down for interactive feedback.
   - mousedown: shrinks to 5px (press effect)
   - mouseup: restores to whatever cursorSize currently is
   - mouseover on interactive elements: grows to 20px
   - mouseout: restores to 8px default */
var cursorDot    = document.getElementById('cursorDot');
var scrollRingEl = document.getElementById('cursorScrollRing');
var cursorSize   = 8;

document.addEventListener('mousemove', function (e) {
  gsap.to(cursorDot,    { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power3.out' });
  gsap.to(scrollRingEl, { x: e.clientX, y: e.clientY, duration: 0.28, ease: 'power3.out' });
});

function setCursorSize(size, dur) {
  gsap.to(cursorDot, { width: size, height: size, duration: dur || 0.35, ease: 'expo.out' });
}

document.addEventListener('mousedown', function () { setCursorSize(5, 0.15); });
document.addEventListener('mouseup',   function () { setCursorSize(cursorSize, 0.35); });

// Grow on interactive elements; restore on leave
document.addEventListener('mouseover', function (e) {
  if (e.target.closest('a, button, .sn, .proc-row, .ow, .s06-btn')) {
    cursorSize = 20; setCursorSize(20);
  }
});
document.addEventListener('mouseout', function (e) {
  if (e.target.closest('a, button, .sn, .proc-row, .ow, .s06-btn')) {
    cursorSize = 8; setCursorSize(8);
  }
});


/* ─── STATE ──────────────────────────────────────────────────────────────────
   isMob: true when viewport ≤ 768px — disables the JS-driven section engine
          on mobile (sections stack normally in document flow instead).
   current: the index of the currently visible section (0–5).
   busy: lock flag that prevents interrupting a transition animation.
   TOTAL: total number of sections.
   secs/sns: cached NodeList → Array for the section divs and sidenav markers. */
var isMob    = window.innerWidth <= 768;
var current  = 0;
var busy     = false;
var TOTAL    = 6;
var secs     = Array.from(document.querySelectorAll('.sec'));
var sns      = Array.from(document.querySelectorAll('.sn'));


/* ─── SECTION ENGINE — INITIAL SETUP ────────────────────────────────────────
   On desktop only: all sections except section 0 start at opacity:0 and
   yPercent:60 (shifted 60% of their height downward, off-screen below).
   Section 0 starts at opacity:1, yPercent:0 (fully visible).
   GSAP.set() applies these without animation — they are starting states only. */
if (!isMob) {
  secs.forEach(function (s, i) {
    gsap.set(s, { opacity: i === 0 ? 1 : 0, yPercent: i === 0 ? 0 : 60 });
  });
}


/* ─── gotoSec() — SECTION TRANSITION ────────────────────────────────────────
   The core section navigation function. Accepts a target section index.
   Guards against: mobile, animation in progress, same section, out-of-bounds.

   Transition sequence:
   1. Determine direction (dir = +1 for forward, -1 for backward)
   2. Update the sidenav .on class and the counter text
   3. Fade scroll hint out once past section 0
   4. Position the incoming section (opacity:1, yPercent: dir * 60 = just outside viewport)
   5. Run the GSAP timeline:
      - Outgoing section: slides out in the opposite direction (-dir * 30) + fades
      - Incoming section: slides in from dir*60 to 0 + fades in
      Both run simultaneously (position 0 in the timeline)
   6. On complete: clean up old section, set current, call enterSec() for animations */
function gotoSec(idx) {
  if (isMob || busy || idx === current || idx < 0 || idx >= TOTAL) return;
  busy = true;

  var prev = secs[current];
  var next = secs[idx];
  var dir  = idx > current ? 1 : -1; // +1 = scrolling down, -1 = scrolling up

  // Update sidenav: mark the new active dot
  sns.forEach(function (s, i) { s.classList.toggle('on', i === idx); });
  document.getElementById('cn').textContent = String(idx + 1).padStart(2, '0');

  // Hide the scroll hint once the user has navigated away from section 0
  gsap.to('#scrollhint', { opacity: idx > 0 ? 0 : 1, duration: .25 });

  // Place incoming section just outside the viewport in the direction of travel
  gsap.set(next, { opacity: 1, yPercent: dir * 60 });

  gsap.timeline({
    onComplete: function () {
      gsap.set(prev, { opacity: 0 });
      prev.classList.remove('on'); // Disable pointer events on the old section
      next.classList.add('on');    // Enable pointer events on the new section
      current = idx;
      busy    = false;
      enterSec(idx); // Trigger section-specific entrance animations
    }
  })
  // Outgoing: shift away and fade out
  .to(prev, { yPercent: -dir * 30, opacity: 0, duration: .7, ease: 'expo.inOut' }, 0)
  // Incoming: shift into position and fade in (both start at timeline position 0)
  .to(next, { yPercent: 0,          opacity: 1, duration: .7, ease: 'expo.inOut' }, 0);
}

// Side nav dot clicks navigate directly to that section index
sns.forEach(function (el) {
  el.addEventListener('click', function () { gotoSec(+el.dataset.i); });
});


/* ─── WHEEL NAVIGATION ───────────────────────────────────────────────────────
   Accumulates wheel delta into wa. Fires gotoSec() once it exceeds ±35px,
   then resets the accumulator. This prevents rapid multi-section jumps from
   a single high-velocity scroll event. */
var wa = 0;
window.addEventListener('wheel', function (e) {
  if (isMob) return;
  e.preventDefault(); // Prevent native scroll
  if (busy) return;
  wa += e.deltaY;
  if (Math.abs(wa) < 35) return; // Minimum threshold before triggering navigation
  gotoSec(current + (wa > 0 ? 1 : -1));
  wa = 0; // Reset accumulator after each navigation
}, { passive: false }); // passive:false is required to use preventDefault()


/* ─── KEYBOARD NAVIGATION ────────────────────────────────────────────────────
   Arrow Down / Right = next section, Arrow Up / Left = previous section. */
window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') gotoSec(current + 1);
  if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  gotoSec(current - 1);
});


/* ─── TOUCH NAVIGATION ───────────────────────────────────────────────────────
   Records the Y position on touchstart, then calculates the swipe distance
   on touchend. A swipe of ≥38px triggers navigation in the swipe direction
   (positive delta = swiped upward = go to next section). */
var ty = 0;
window.addEventListener('touchstart', function (e) { ty = e.touches[0].clientY; }, { passive: true });
window.addEventListener('touchend',   function (e) {
  var d = ty - e.changedTouches[0].clientY; // Positive = swipe up (next)
  if (Math.abs(d) > 38) gotoSec(current + (d > 0 ? 1 : -1));
}, { passive: true });

// Re-check isMob on resize in case the device orientation changes
window.addEventListener('resize', function () { isMob = window.innerWidth <= 768; });


/* ─── PER-SECTION ENTRANCE ANIMATIONS ───────────────────────────────────────
   Called by gotoSec() after a transition completes.
   Each section index (1–5) has its own GSAP animation sequence.
   Section 0 (hero) is handled separately by startHeroEntrance() after the loader.

   i === 1 (Origin):
   - Heading slides up from y:40
   - Colour bar grows from width:0 to 40px
   - Bio paragraphs stagger in from y:16

   i === 2 (Belief):
   - Quote lines (#q1–#q5) slide up from y:100% with stagger
   - Signature fades in after a delay

   i === 3 (Process):
   - Section label fades in from y:10
   - Process rows (#p1–#p3) slide in from x:-24 with stagger

   i === 4 (Obsessions):
   - Label fades in
   - All .ow words are reset to invisible/offset state, then staggered in
   - clearProps removes inline styles so CSS hover can take over cleanly

   i === 5 (CTA):
   - Eyebrow label fades in
   - Heading words (#c1, #c2) slide up from y:110%
   - Button fades in with a slight delay */
function enterSec(i) {

  if (i === 1) {
    gsap.timeline()
      .from('#s2h',   { y: 40, opacity: 0, duration: .85, ease: 'expo.out' })
      .to  ('#s2b',   { width: 40, duration: .65, ease: 'power3.out' }, '-=.5')
      .from('#s2r p', { y: 16, opacity: 0, duration: .65, stagger: .1, ease: 'power2.out' }, '-=.5');
  }

  if (i === 2) {
    // Slide each quote line up from below its clipping parent (.ql)
    gsap.from(['#q1','#q2','#q3','#q5'],
      { y: '100%', duration: .75, stagger: .08, ease: 'expo.out', delay: .08 });
    gsap.from('#s3sg',
      { opacity: 0, y: 8, duration: .55, delay: .6, ease: 'power2.out' });
  }

  if (i === 3) {
    gsap.from('#s4l',
      { opacity: 0, y: 10, duration: .5, ease: 'power2.out' });
    gsap.from(['#p1','#p2','#p3'],
      { x: -24, opacity: 0, duration: .7, stagger: .12, ease: 'power3.out', delay: .1 });
  }

  if (i === 4) {
    gsap.from('#s5l',
      { opacity: 0, y: 10, duration: .5, ease: 'power2.out' });

    // Reset all obsession words to their invisible starting state before animating in
    gsap.set('.ow', { color: 'rgba(234,230,220,0)', y: 22, scale: 1, opacity: 0 });

    gsap.to('.ow', {
      y: 0, scale: 1, opacity: 1,
      color: 'rgba(234,230,220,0.11)', // Default dim state (CSS hover will override)
      duration: .55, stagger: .04, ease: 'power2.out', delay: .12,
      onComplete: function () {
        // Remove GSAP-set inline styles so the CSS hover transitions can take over
        gsap.set('.ow', { clearProps: 'y,scale,opacity' });
        gsap.set('.ow', { color: 'rgba(234,230,220,0.11)' }); // Reapply base colour
      }
    });
  }

  if (i === 5) {
    gsap.from('#s6e',
      { opacity: 0, y: 8, duration: .5, ease: 'power2.out' });
    gsap.from(['#c1','#c2'],
      { y: '110%', duration: .9, stagger: .1, ease: 'expo.out' });
    gsap.from('#s6btn',
      { opacity: 0, y: 14, duration: .65, ease: 'power2.out', delay: .38 });
  }
}


/* ─── OBSESSIONS HOVER ───────────────────────────────────────────────────────
   Attaches GSAP mouseenter/mouseleave to each .ow (obsession word).
   On enter: the word glows to its accent colour (from CM), scales up 1.12×,
             and lifts 6px. gsap.killTweensOf() prevents competing animations
             if the cursor moves quickly between words.
   On leave: the word returns to its dim base colour, scale 1, y 0. */
function wireObsessions() {
  document.querySelectorAll('.ow').forEach(function (el) {
    var col = CM[el.dataset.c] || '#eae6dc'; // Fallback colour if data-c is unrecognised

    el.addEventListener('mouseenter', function () {
      gsap.killTweensOf(el); // Cancel any running animation on this element first
      gsap.to(el, { color: col, scale: 1.12, y: -6, duration: .3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', function () {
      gsap.killTweensOf(el);
      gsap.to(el, {
        color: 'rgba(234,230,220,0.11)', // Return to near-invisible dim state
        scale: 1, y: 0,
        duration: .35, ease: 'power2.out'
      });
    });
  });
}
wireObsessions();


/* ─── MAGNETIC PULL EFFECT ───────────────────────────────────────────────────
   Applied to all links, side nav items, process rows, and the CTA button.
   On mousemove: calculates the cursor's position relative to the element's
   centre, then shifts the element by 14% of that offset in each axis.
   This gives a subtle "pulling towards the cursor" feel.
   On mouseleave: returns to x:0, y:0 with an elastic spring ease for a
   satisfying snap-back bounce. */
document.querySelectorAll('a, .sn, .proc-row, .s06-btn').forEach(function (el) {
  el.addEventListener('mousemove', function (e) {
    var r = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - (r.left + r.width  / 2)) * .14, // 14% of horizontal offset
      y: (e.clientY - (r.top  + r.height / 2)) * .14, // 14% of vertical offset
      duration: .45, ease: 'power3.out'
    });
  });
  el.addEventListener('mouseleave', function () {
    // elastic.out(1, 0.4): slight overshoot on the snap-back for a spring effect
    gsap.to(el, { x: 0, y: 0, duration: .65, ease: 'elastic.out(1,.4)' });
  });
});


/* ─── LOADER + HERO ENTRANCE ─────────────────────────────────────────────────
   Matches the works.js GSAP timeline pattern exactly.

   Sequence:
   1. "ABOUT." text slides up and fades in (opacity:0/y:24 → visible)
   2. Hold 0.8s
   3. Text slides up off-screen and fades out (y:-28)
   4. White overlay fades out → display:none → startHeroEntrance() called

   The intro-overlay is white (like works.html) so it appears as a clean
   flash before the dark page underneath is revealed. */
gsap.timeline()
  .to('#introText',    { opacity: 1, y: 0,   duration: 1,   ease: 'power3.out' })
  .to({},              {                      duration: 0.8 })  // Hold beat
  .to('#introText',    { opacity: 0, y: -28, duration: 0.6, ease: 'power2.in' })
  .to('#introOverlay', {
    opacity: 0, duration: 0.5, ease: 'power2.inOut',
    onComplete: function () {
      document.getElementById('introOverlay').style.display = 'none';
      startHeroEntrance(); // Start the hero content reveal
    }
  });


/* ─── startHeroEntrance() ────────────────────────────────────────────────────
   Called once, immediately after the intro loader finishes.
   Sets all hero elements to their invisible starting states, then
   runs a GSAP timeline to stagger them into view.

   Sequence:
   1. Set #w1, #w2, #w3 to y:110% (below .wl clip)
   2. Set labels and description to opacity:0, y:8
   3. Set all nav/counter/hint elements to opacity:0
   4. Stagger #w1 → #w2 → #w3 up into view (overlapping via -=.7x offsets)
   5. Fade in the section label and description simultaneously
   6. Fade in the main nav
   7. Stagger in sidenav, counter, vtxt
   8. Fade in the scroll hint last */
function startHeroEntrance() {
  // Set all animated elements to their hidden starting states
  gsap.set(['#w1','#w2','#w3'], { y: '110%' }); // Below overflow:hidden clip
  gsap.set(['#s1d', '.s01 .sec-label'], { opacity: 0, y: 8 });
  gsap.set(['#mainNav','#sidenav','#sec-counter','#scrollhint','#vtxt'], { opacity: 0 });

  gsap.timeline({ delay: .08 })
    // Words stagger up from y:110% to y:0% (the - offsets create overlap)
    .to('#w1',                 { y: '0%',      duration: .9,  ease: 'expo.out' })
    .to('#w2',                 { y: '0%',      duration: .85, ease: 'expo.out' }, '-=.72')
    .to('#w3',                 { y: '0%',      duration: .85, ease: 'expo.out' }, '-=.70')
    // Section label fades in while word 3 is still entering
    .to('.s01 .sec-label',     { opacity: 1, y: 0, duration: .5, ease: 'power2.out' }, '-=.6')
    // Description fades in just after the label
    .to('#s1d',                { opacity: 1, y: 0, duration: .55, ease: 'power2.out' }, '-=.48')
    // Main nav fades in at the same time as the description (<  = same start position)
    .to('#mainNav',            { opacity: 1,        duration: .5,  ease: 'power2.out' }, '<')
    // Side UI elements stagger in
    .to(['#sidenav','#sec-counter','#vtxt'],
                               { opacity: 1,        duration: .45, stagger: .06 }, '-=.35')
    // Scroll hint is last — it's the least urgent piece of UI
    .to('#scrollhint',         { opacity: 1,        duration: .45 }, '-=.3');
}
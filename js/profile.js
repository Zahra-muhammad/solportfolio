document.addEventListener('DOMContentLoaded', () => {

    /* ── TICKER ──────────────────────────────────────────────────────────────
       Builds the scrolling bottom marquee bar dynamically.

       The words array contains the keywords and '·' separators.
       It is spread twice ([...words, ...words]) so the .ticker-track
       contains two identical copies of the content.

       The CSS animation translates the track by -50%, which moves exactly
       one full copy off-screen to the left. Because the second copy is
       identical, the loop appears seamless.

       '·' items get the .sep class, which the CSS styles in the accent colour
       and at a slightly larger font size to visually separate the keywords. */
    const words = [
        'UI/UX Design','·','Frontend Development','·',
        'Visual Direction','·','Motion Design','·',
        'Brand Systems','·','Based in UAE','·',
        'Working Globally','·','Available for Projects','·'
    ];
    const tt = document.getElementById('tt');
    // Duplicate the array to create the seamless loop
    [...words, ...words].forEach(w => {
        const s = document.createElement('span');
        s.textContent = w;
        if (w === '·') s.classList.add('sep'); // Extra styling for separators
        tt.appendChild(s);
    });


    /* ── LIVE TIMESTAMP ──────────────────────────────────────────────────────
       Displays the current time in the UAE (Asia/Dubai = UTC+4).

       Intl.DateTimeFormat is used with explicit options rather than manual
       date maths, making it timezone-aware without any offset calculations.
       The result is a 24-hour HH:MM:SS string followed by " GST".

       tick() runs immediately on load so there's no blank placeholder,
       then repeats every 1000ms via setInterval to update the seconds. */
    function tick() {
        const t = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Dubai',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false // 24-hour format
        }).format(new Date());
        document.getElementById('ts').textContent = t + ' GST';
    }
    tick();                    // Immediate first render
    setInterval(tick, 1000);   // Update every second


    /* ── CUSTOM CURSOR ───────────────────────────────────────────────────────
       Creates a 10px dot element and appends it to the body.
       CSS (cursor: none on body) hides the native OS cursor.

       Position update: raw mouse coordinates are captured on mousemove.
       Each GSAP ticker tick (every animation frame), the cursor position
       lerps 15% of the remaining gap toward the mouse.
       This creates the characteristic smooth "trailing" feel.

       The .hover class is toggled on any element with .hover-el or
       native interactive tags (a, button), making the dot scale up 3.5×
       via a CSS transition as a hover affordance. */
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

    // Track raw mouse position (updated every mousemove)
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Each rAF tick: lerp cursor position toward mouse, then set transform
    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.15; // 15% lerp factor per frame
        cursorY += (mouseY - cursorY) * 0.15;
        gsap.set(cursor, {
            left: cursorX,
            top: cursorY,
            xPercent: -50, // Centre the dot on the cursor point
            yPercent: -50
        });
    });

    // Scale up on interactive elements, restore on leave
    document.querySelectorAll('.hover-el, a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });


    /* ── LOADER + PAGE REVEAL ────────────────────────────────────────────────
       A single GSAP timeline chains the intro and reveal animations in sequence.
       Each .to() call runs after the previous one unless an offset is supplied:
       - '+=0.5' adds a 0.5s pause after the previous animation ends
       - '-=0.3' starts 0.3s BEFORE the previous animation ends (overlap)

       Sequence:
       1. "PROFILE." word slides up and fades in
       2. Hold for 0.5s
       3. Word scales down (0.45×) and fades out
       4. Loader overlay fades out → display:none
       5. Page fades in
       6. Left panel elements stagger in (eyebrow → name lines → sub → bio → divider → stats)
       7. Right panel sections stagger in simultaneously (overlapping with step 6)
       8. Skill bars animate to their target widths (data-w% read by JS)
    */
    const tl = gsap.timeline();

    // Step 1: Loader word enters — slides from translateY(-40px) to 0
    tl.to('#lword', { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' });

    // Step 2 + 3: Hold, then shrink and fade the word out
    tl.to('#lword', { scale: 0.45, opacity: 0, duration: 0.65, ease: 'power4.in' }, '+=0.5');

    // Step 4: Fade out the loader overlay; remove from layout on complete
    tl.to('#loader', {
        opacity: 0, duration: 0.5, ease: 'power2.inOut',
        onComplete: () => document.getElementById('loader').style.display = 'none'
    }, '-=0.2'); // Starts 0.2s before the word animation ends

    // Step 5: Reveal the page (which was at opacity:0 from CSS)
    tl.to('#page', { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2');

    // Step 6: Left panel stagger — each element fades in sequentially
    tl.to('#eyebrow', { opacity: 1, y: 0,    duration: 0.55, ease: 'power3.out' }, '-=0.1');

    // Name lines: each .ln slides from translateY(110%) to 0, staggered 0.1s apart
    tl.to('.ln',      { opacity: 1, y: '0%', duration: 0.75, stagger: 0.1, ease: 'power3.out' }, '-=0.35');

    // Discipline tags, bio, divider, and stats each fade in sequentially
    tl.to('#hsub',    { opacity: 1, duration: 0.5 }, '-=0.35');
    tl.to('#hbio',    { opacity: 1, duration: 0.6 }, '-=0.25');
    tl.to('#hr1',     { opacity: 1, duration: 0.4 }, '-=0.2');
    tl.to('#stats',   { opacity: 1, duration: 0.5 }, '-=0.2');

    // Step 7: Right panel sections fade in with a stagger (overlapping the left panel)
    // y: 0 overrides the translateY(10px) set in CSS
    tl.to(['#s1','#s2','#s3','#s4','#s5'], {
        opacity: 1, y: 0,
        duration: 0.55, stagger: 0.09, // 0.09s between each section
        ease: 'power3.out'
    }, '-=0.5'); // Starts 0.5s before the left panel finishes

    // Step 8: Trigger skill bar animations by setting their width to the data-w value.
    // tl.call() inserts a callback into the timeline at the specified position.
    // The CSS transition on .skill-fill (1.6s cubic-bezier) handles the actual animation.
    tl.call(() => {
        document.querySelectorAll('.skill-fill').forEach(b => {
            b.style.width = b.dataset.w + '%'; // e.g. data-w="92" → width: 92%
        });
    }, [], '-=0.3'); // Triggered 0.3s before the section stagger ends

});
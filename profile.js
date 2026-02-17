document.addEventListener('DOMContentLoaded', () => {

    /* ── TICKER ── */
    const words = [
        'UI/UX Design','·','Frontend Development','·',
        'Visual Direction','·','Motion Design','·',
        'Brand Systems','·','Based in UAE','·',
        'Working Globally','·','Available for Projects','·'
    ];
    const tt = document.getElementById('tt');
    [...words, ...words].forEach(w => {
        const s = document.createElement('span');
        s.textContent = w;
        if (w === '·') s.classList.add('sep');
        tt.appendChild(s);
    });

    /* ── TIMESTAMP ── */
    function tick() {
        const t = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Dubai',
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        }).format(new Date());
        document.getElementById('ts').textContent = t + ' GST';
    }
    tick();
    setInterval(tick, 1000);

    /* ── CURSOR ── */
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
    document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        gsap.set(cursor, { left: cursorX, top: cursorY, xPercent: -50, yPercent: -50 });
    });
    document.querySelectorAll('.hover-el, a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    /* ── LOADER + REVEAL ── */
    const tl = gsap.timeline();

    tl.to('#lword', { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' });
    tl.to('#lword', { scale: 0.45, opacity: 0, duration: 0.65, ease: 'power4.in' }, '+=0.5');
    tl.to('#loader', {
        opacity: 0, duration: 0.5, ease: 'power2.inOut',
        onComplete: () => document.getElementById('loader').style.display = 'none'
    }, '-=0.2');
    tl.to('#page', { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2');

    // Left panel stagger
    tl.to('#eyebrow',  { opacity: 1, y: 0,    duration: 0.55, ease: 'power3.out' }, '-=0.1');
    tl.to('.ln',       { opacity: 1, y: '0%', duration: 0.75, stagger: 0.1, ease: 'power3.out' }, '-=0.35');
    tl.to('#hsub',     { opacity: 1,           duration: 0.5  }, '-=0.35');
    tl.to('#hbio',     { opacity: 1,           duration: 0.6  }, '-=0.25');
    tl.to('#hr1',      { opacity: 1,           duration: 0.4  }, '-=0.2');
    tl.to('#stats',    { opacity: 1,           duration: 0.5  }, '-=0.2');

    // Right panel stagger
    tl.to(['#s1','#s2','#s3','#s4','#s5'], {
        opacity: 1, y: 0,
        duration: 0.55, stagger: 0.09,
        ease: 'power3.out'
    }, '-=0.5');

    // Animate skill bars
    tl.call(() => {
        document.querySelectorAll('.skill-fill').forEach(b => {
            b.style.width = b.dataset.w + '%';
        });
    }, [], '-=0.3');

    /* ── nothing to pulse ── */

});
document.addEventListener('DOMContentLoaded', () => {

    // ── LOADER ──
    const loaderTl = gsap.timeline({
        onComplete: () => {
            document.getElementById('worksLoader').style.display = 'none';
        }
    });

    loaderTl.to('#worksLoaderText', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out'
    });

    loaderTl.to('#worksLoaderText', {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.in'
    }, '+=0.4');

    loaderTl.to('#worksLoader', {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut'
    }, '-=0.3');

    // ── TIMESTAMP ──
    const tick = () => {
        document.getElementById('ts').textContent = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Dubai',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(new Date()) + ' GST';
    };
    tick();
    setInterval(tick, 1000);

    // ── CURSOR ──
    const cur = document.getElementById('cur');
    let mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
    });

    gsap.ticker.add(() => {
        cx += (mx - cx) * 0.14;
        cy += (my - cy) * 0.14;
        gsap.set(cur, { left: cx, top: cy });
    });

    document.querySelectorAll('a, .p-card').forEach(el => {
        el.addEventListener('mouseenter', () => cur.classList.add('big'));
        el.addEventListener('mouseleave', () => cur.classList.remove('big'));
    });

    // ── GALLERY AUTO-DRIFT ──
    const track = document.getElementById('track');
    let scrollY = 0, targetY = 0;

    gsap.ticker.add(() => {
        targetY += 0.45;
        scrollY += (targetY - scrollY) * 0.05;
        const h = track.scrollHeight / 2;
        gsap.set(track, { y: -(scrollY % h) });
    });

    // wheel speeds up drift
    window.addEventListener('wheel', e => {
        targetY += e.deltaY * 0.5;
    }, { passive: true });

    // ── MOUSE PARALLAX ON GALLERY ──
    document.addEventListener('mousemove', e => {
        const px = (e.clientX / window.innerWidth - 0.5) * 20;
        gsap.to(track, { x: px, duration: 2, ease: 'power2.out' });
    });

    // ── SCROLL REVEAL ──
    const obs = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('vis'), i * 60);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.p-card').forEach(el => obs.observe(el));

    // ── PARALLAX ON CARD IMAGES WHILE SCROLLING ──
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.p-card img').forEach(img => {
            const rect = img.parentElement.getBoundingClientRect();
            const p = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            img.style.transform = `scale(1.06) translateY(${(p - 0.5) * 28}px)`;
        });
    }, { passive: true });

    // ── HERO BG WORD MOUSE FOLLOW ──
    const bgW = document.querySelector('.hero-bg-word');
    document.addEventListener('mousemove', e => {
        const px = (e.clientX / window.innerWidth - 0.5) * 18;
        const py = (e.clientY / window.innerHeight - 0.5) * 8;
        if (bgW) bgW.style.transform = `translate(${px}px, ${py}px)`;
    });

});
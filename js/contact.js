// ===== LOADER =====
const loaderTl = gsap.timeline({
    onComplete: () => { document.getElementById('loader').style.display = 'none'; }
});

loaderTl
    .to('#loaderText', { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' })
    .to('#loaderText', { scale: 0.5, opacity: 0, duration: 0.8, ease: 'power4.in' }, '+=0.5')
    .to('#loader', { opacity: 0, duration: 0.5, ease: 'power2.inOut' }, '-=0.3');

loaderTl
    .from('.header', { y: -30, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
    .to('.big-title .line span', {
        y: '0%',
        duration: 0.9,
        stagger: 0.1,
        ease: 'power4.out'
    }, '-=0.3')
    .to('.reveal', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.side-ticker, .project-counter', {
        opacity: 0,
        duration: 0.5
    }, '-=0.3');

// ===== TIMESTAMP =====
function updateTime() {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(now);
    document.getElementById('timestamp').textContent = fmt + ' GMT+4';
}
updateTime();
setInterval(updateTime, 1000);

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, input, textarea, .contact-row').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
});

document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
document.addEventListener('mouseenter', () => cursor.style.opacity = '1');

// ===== FORM SUBMIT =====
function handleSubmit(e) {
    e.preventDefault();
    const btn = document.querySelector('.submit-btn span');
    const msg = document.getElementById('successMsg');

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'New Project Inquiry';
    const message = document.getElementById('message').value.trim();

    const body = encodeURIComponent(
        `Hi Zahra,\n\nName: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=zahraimtiaz1826@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;

    gsap.to('.submit-btn', { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 });

    setTimeout(() => {
        window.open(mailtoLink, '_blank');
        msg.classList.add('show');
        btn.textContent = 'SENT ✓';
        document.getElementById('contactForm').reset();
        setTimeout(() => {
            msg.classList.remove('show');
            btn.textContent = 'SEND MESSAGE →';
        }, 4000);
    }, 300);
}

// ===== CONTACT ROW HOVER =====
document.querySelectorAll('.contact-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
        gsap.to(row.querySelector('.row-value'), { x: 4, duration: 0.3, ease: 'power2.out' });
    });
    row.addEventListener('mouseleave', () => {
        gsap.to(row.querySelector('.row-value'), { x: 0, duration: 0.3, ease: 'power2.out' });
    });
});
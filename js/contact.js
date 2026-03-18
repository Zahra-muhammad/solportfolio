// ===== LOADER + PAGE REVEAL ===========================================
// A single GSAP timeline (loaderTl) chains the intro and reveal animations.
// onComplete removes the loader from the layout once all animations finish.
//
// The timeline sequence:
// 1. "CONTACT." word slides up and fades in
// 2. Hold for 0.5s
// 3. Word scales down (0.5×) and fades out
// 4. Loader wrapper fades out
// 5. Header slides down from above
// 6. Big title lines slide up from below (stagger per line)
// 7. All .reveal elements fade in (stagger per element)
// 8. Side ticker and counter fade in
// =====================================================================
const loaderTl = gsap.timeline({
    onComplete: () => { document.getElementById('loader').style.display = 'none'; }
});

loaderTl
    // Step 1: Animate "CONTACT." in from translateY(-40px)
    .to('#loaderText', { y: 0, opacity: 1, duration: 1.1, ease: 'power4.out' })

    // Step 2 + 3: Hold 0.5s, then scale down and fade out
    .to('#loaderText', { scale: 0.5, opacity: 0, duration: 0.8, ease: 'power4.in' }, '+=0.5')

    // Step 4: Fade out the black loader overlay (starts 0.3s before step 3 finishes)
    .to('#loader', { opacity: 0, duration: 0.5, ease: 'power2.inOut' }, '-=0.3');

loaderTl
    // Step 5: Header slides down into view from 30px above (overlaps loader fade-out)
    .from('.header', { y: -30, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')

    // Step 6: Title lines — each .line span goes from translateY(100%) to 0%.
    // The .line parent has overflow:hidden so the text is clipped until it emerges.
    // stagger: 0.1 means each line starts 0.1s after the previous one.
    .to('.big-title .line span', {
        y: '0%',
        duration: 0.9,
        stagger: 0.1,
        ease: 'power4.out'
    }, '-=0.3')

    // Step 7: All .reveal elements fade in and shift from y:20 to y:0.
    // They already have CSS opacity:0 and translateY(20px) applied.
    // stagger: 0.08 creates a cascading entrance effect across all .reveal items.
    .to('.reveal', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out'
    }, '-=0.6')

    // Step 8: Decorative elements fade in last (no transform needed)
    .from('.side-ticker, .project-counter', {
        opacity: 0,
        duration: 0.5
    }, '-=0.3');


// ===== LIVE TIMESTAMP =====================================================
// Updates the #timestamp element every second with the current UAE time.
// Intl.DateTimeFormat with timeZone: 'Asia/Dubai' handles the UTC+4 offset
// automatically without manual maths, and respects DST changes.
// The result is formatted as HH:MM:SS followed by " GMT+4".
// =========================================================================
function updateTime() {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false // Use 24-hour format
    }).format(now);
    document.getElementById('timestamp').textContent = fmt + ' GMT+4';
}

updateTime();                    // Render immediately on load (no blank placeholder)
setInterval(updateTime, 1000);   // Then update every second


// ===== CUSTOM CURSOR =====================================================
// A simple CSS-positioned dot (#cursor) tracks the mouse directly via
// style.left / style.top on every mousemove event.
// No GSAP lerp is used here — movement is instant (no trail).
//
// .is-hovering is added/removed via mouseenter/mouseleave on all
// interactive elements, growing the dot from 14px to 22px via CSS transition.
//
// The cursor is hidden when the mouse leaves the window entirely,
// and restored when it re-enters. This prevents a stale dot floating
// at the last known position after the mouse exits the viewport.
// =========================================================================
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
});

// Grow cursor on any interactive element
document.querySelectorAll('a, button, input, textarea, .contact-row').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
});

// Hide/show when mouse leaves/enters the browser viewport
document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
document.addEventListener('mouseenter', () => cursor.style.opacity = '1');


// ===== FORM SUBMIT ========================================================
// handleSubmit() is called by the form's onsubmit attribute.
// It does NOT send data to a server — instead it builds a Gmail compose URL
// from the form field values and opens it in a new tab.
//
// Process:
// 1. Prevent the default form POST behaviour
// 2. Read and trim all field values; default subject if empty
// 3. Build a mailto body string with the user's details
// 4. Double-encode with encodeURIComponent for URL safety
// 5. Construct the Gmail compose URL with to / su / body params
// 6. Play a quick GSAP scale pulse on the button (tactile feedback)
// 7. After 300ms: open Gmail, show success flash, reset form, update button text
// 8. After 4s: hide success flash, restore original button text
// =========================================================================
function handleSubmit(e) {
    e.preventDefault(); // Stop the form from navigating away

    const btn = document.querySelector('.submit-btn span');
    const msg = document.getElementById('successMsg');

    // Read form values
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'New Project Inquiry'; // Fallback subject
    const message = document.getElementById('message').value.trim();

    // Build the email body string and encode it for URL use
    const body = encodeURIComponent(
        `Hi Zahra,\n\nName: ${name}\nEmail: ${email}\n\n${message}`
    );

    // Gmail compose URL structure:
    // view=cm    → compose mode
    // fs=1       → full screen compose window
    // to=        → recipient
    // su=        → subject (also encoded)
    // body=      → pre-filled message body
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=zahraimtiaz1826@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;

    // Brief press-down animation on the button for tactile feedback
    // yoyo:true + repeat:1 = scale down then back up (one pulse)
    gsap.to('.submit-btn', { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 });

    // Short delay so the animation plays before the tab opens
    setTimeout(() => {
        window.open(mailtoLink, '_blank'); // Open Gmail compose in new tab
        msg.classList.add('show');         // Slide up the success notification
        btn.textContent = 'SENT ✓';        // Update button text to confirm

        document.getElementById('contactForm').reset(); // Clear all fields

        // Auto-hide the success message and restore button after 4 seconds
        setTimeout(() => {
            msg.classList.remove('show');
            btn.textContent = 'SEND MESSAGE →';
        }, 4000);
    }, 300);
}


// ===== CONTACT ROW HOVER =================================================
// Adds a subtle 4px rightward nudge to the .row-value text when hovering
// over each .contact-row link, complementing the CSS fill-sweep animation.
//
// GSAP is used (rather than CSS transform) for smooth easing control:
// power2.out on enter, power2.out on leave.
// =========================================================================
document.querySelectorAll('.contact-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
        // Nudge the value text 4px to the right
        gsap.to(row.querySelector('.row-value'), { x: 4, duration: 0.3, ease: 'power2.out' });
    });
    row.addEventListener('mouseleave', () => {
        // Return the text to its original position
        gsap.to(row.querySelector('.row-value'), { x: 0, duration: 0.3, ease: 'power2.out' });
    });
});
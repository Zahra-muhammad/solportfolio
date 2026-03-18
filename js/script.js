// Wait for the entire DOM to be parsed before running any JavaScript
document.addEventListener('DOMContentLoaded', () => {

    // Add a 'loading' class to the body so CSS can hide overflow during the intro animation
    document.body.classList.add('loading');

    // Register the GSAP ScrollTrigger plugin so it can be used later
    gsap.registerPlugin(ScrollTrigger);


    // ==================== LOADER ANIMATION ====================
    // A GSAP timeline chains all intro animations in sequence.
    // onComplete removes the 'loading' class once the sequence finishes.

    const loaderTimeline = gsap.timeline({
        onComplete: () => {
            document.body.classList.remove('loading');
        }
    });

    // Step 1: Slide the "SOL." text up into view and fade it in
    loaderTimeline.to('.loader-text', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out'
    });

    // Step 2: Flash the text to white (0.3s after step 1 ends)
    loaderTimeline.to('.loader-text', {
        color: '#ffffff',
        duration: 0.4,
        ease: 'none'
    }, '+=0.3');

    // Step 3: Scale down and fade out the loader text (0.4s after step 2)
    loaderTimeline.to('.loader-text', {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.in'
    }, '+=0.4');

    // Step 4: Fade out the entire loader wrapper, overlapping slightly with step 3
    loaderTimeline.to('.loader-wrapper', {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
            // Fully remove loader from layout once it's invisible
            document.querySelector('.loader-wrapper').style.display = 'none';
        }
    }, '-=0.3'); // '-=0.3' means start 0.3s before the previous animation ends

    // Step 5: Reveal the main content at the same time the loader is fading
    loaderTimeline.to('.main-content', {
        opacity: 1,
        visibility: 'visible',
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.4');


    // ==================== PAGE ENTRANCE ANIMATIONS ====================
    // These run as extensions of the same loader timeline,
    // so they begin right after the main content becomes visible.

    // Stagger in each gallery image from slightly scaled-down and transparent
    loaderTimeline.from('.gallery-item', {
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        stagger: 0.03,  // each item starts 0.03s after the previous one
        ease: 'power3.out'
    }, '-=0.8');

    // Drop in corner text labels from above (used for the navigation strip)
    loaderTimeline.from('.corner-text', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=1');

    // Slide in corner buttons from the right
    loaderTimeline.from('.corner-btn', {
        x: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.8');


    // ==================== TRUE INFINITE SCROLL WITH SMOOTH SHUFFLE ====================
    // The gallery grid moves upward as the user scrolls.
    // A counter triggers a random re-shuffle of grid items every 800px of scroll.

    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

    let scrollVelocity = 0;    // Current scroll speed (used to track momentum)
    let currentY = 0;          // Actual rendered Y position (lerped)
    let targetY = 0;           // Desired Y position (updated on wheel events)
    let lastScrollTime = Date.now();
    let shuffleCounter = 0;    // Accumulates scroll distance; triggers shuffle at threshold

    // Randomly reorder gallery items using the Fisher-Yates shuffle algorithm.
    // GSAP animates each item's CSS order property so the reorder appears smooth.
    function shuffleGrid() {
        const itemsArray = Array.from(galleryItems);

        // Fisher-Yates shuffle: walk backwards, swap each element with a random earlier element
        for (let i = itemsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [itemsArray[i], itemsArray[j]] = [itemsArray[j], itemsArray[i]];
        }

        // Apply the new order to each item with a smooth tween
        itemsArray.forEach((item, index) => {
            gsap.to(item, {
                order: index,
                duration: 1.5,
                ease: 'power2.inOut'
            });
        });
    }

    // Listen for mouse wheel events to drive the gallery scroll
    window.addEventListener('wheel', (e) => {
        e.preventDefault(); // Prevent native page scroll — we handle it manually

        // Move target position based on scroll delta (1.5x multiplier for speed)
        targetY += e.deltaY * 1.5;
        scrollVelocity = e.deltaY;

        // Accumulate absolute scroll distance; trigger a shuffle every 800px
        shuffleCounter += Math.abs(e.deltaY);
        if (shuffleCounter > 800) {
            shuffleGrid();
            shuffleCounter = 0; // Reset counter after each shuffle
        }

    }, { passive: false }); // passive: false is required to allow preventDefault()

    // rAF loop: smoothly interpolates currentY toward targetY each frame (lerp)
    function animate() {
        // Linear interpolation — moves 10% of the remaining gap each frame
        // This creates the smooth "easing" effect on scroll
        currentY += (targetY - currentY) * 0.1;

        // Wrap the Y value to avoid scrolling infinitely far down.
        // Modulo half the grid height creates the seamless loop.
        const normalizedY = currentY % (galleryGrid.offsetHeight / 2);
        gsap.set(galleryGrid, {
            y: -normalizedY
        });

        requestAnimationFrame(animate); // Schedule the next frame
    }

    animate(); // Kick off the animation loop


    // ==================== CUSTOM CURSOR ====================
    // Replaces the default OS cursor with a small white dot
    // that follows the mouse with a slight lag for a fluid feel.

    // Create the cursor element and add it to the page
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;    // Raw mouse position
    let mouseY = 0;
    let cursorX = 0;   // Smoothed cursor position
    let cursorY = 0;

    // Update raw mouse position on every mouse move
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Each GSAP tick: lerp the cursor toward the real mouse position
    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.15; // 15% lerp factor
        cursorY += (mouseY - cursorY) * 0.15;

        gsap.set(cursor, {
            left: cursorX,
            top: cursorY,
            xPercent: -50, // Center the dot on the cursor point
            yPercent: -50
        });
    });

    // Scale up the cursor dot when hovering over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .corner-btn, .nav-link, .social-link');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover'); // CSS scales it up via transform
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });


    // ==================== LIVE TIMESTAMP ====================
    // Reads the current local time, converts it to UAE (GST, UTC+4),
    // and displays it in the .timestamp element, updating every second.

    function updateTimestamp() {
        const now = new Date();

        // Convert to GST (UTC+4) by adding 4 hours worth of milliseconds,
        // then subtracting the browser's own UTC offset to get a neutral UTC base
        const uaeTime = new Date(now.getTime() + (4 * 60 * 60 * 1000) - (now.getTimezoneOffset() * 60 * 1000));

        // Pad hours, minutes, seconds to always show two digits (e.g. "09" not "9")
        const hours   = String(uaeTime.getUTCHours()).padStart(2, '0');
        const minutes = String(uaeTime.getUTCMinutes()).padStart(2, '0');
        const seconds = String(uaeTime.getUTCSeconds()).padStart(2, '0');

        const timestamp = document.querySelector('.timestamp');
        if (timestamp) {
            timestamp.textContent = `${hours}:${minutes}:${seconds} GST`;
        }
    }

    // Run immediately so there's no blank flash, then repeat every 1000ms
    updateTimestamp();
    setInterval(updateTimestamp, 1000);

    console.log('🚀 True infinite scroll loaded!');
});
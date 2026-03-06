// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set body to loading state
    document.body.classList.add('loading');
    
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // ==================== LOADER ANIMATION ====================
    const loaderTimeline = gsap.timeline({
        onComplete: () => {
            document.body.classList.remove('loading');
        }
    });
    
    loaderTimeline.to('.loader-text', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power4.out'
    });
    
    loaderTimeline.to('.loader-text', {
        color: '#ffffff',
        duration: 0.4,
        ease: 'none'
    }, '+=0.3');
    
    loaderTimeline.to('.loader-text', {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.in'
    }, '+=0.4');
    
    loaderTimeline.to('.loader-wrapper', {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }
    }, '-=0.3');
    
    loaderTimeline.to('.main-content', {
        opacity: 1,
        visibility: 'visible',
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.4');
    
    // ==================== PAGE ENTRANCE ANIMATIONS ====================
    
    loaderTimeline.from('.gallery-item', {
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        stagger: 0.03,
        ease: 'power3.out'
    }, '-=0.8');
    
    loaderTimeline.from('.corner-text', {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=1');
    
    loaderTimeline.from('.corner-btn', {
        x: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.8');
    
    // ==================== TRUE INFINITE SCROLL WITH SMOOTH SHUFFLE ====================
    
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    
    let scrollVelocity = 0;
    let currentY = 0;
    let targetY = 0;
    let lastScrollTime = Date.now();
    let shuffleCounter = 0;
    
    // Shuffle function
    function shuffleGrid() {
        const itemsArray = Array.from(galleryItems);
        
        // Fisher-Yates shuffle
        for (let i = itemsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [itemsArray[i], itemsArray[j]] = [itemsArray[j], itemsArray[i]];
        }
        
        // Apply new order smoothly
        itemsArray.forEach((item, index) => {
            gsap.to(item, {
                order: index,
                duration: 1.5,
                ease: 'power2.inOut'
            });
        });
    }
    
    // Smooth scroll handler
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        targetY += e.deltaY * 1.5;
        scrollVelocity = e.deltaY;
        
        // Shuffle every certain amount of scroll
        shuffleCounter += Math.abs(e.deltaY);
        if (shuffleCounter > 800) {
            shuffleGrid();
            shuffleCounter = 0;
        }
        
    }, { passive: false });
    
    // Animation loop for smooth infinite scroll
    function animate() {
        // Smooth interpolation
        currentY += (targetY - currentY) * 0.1;
        
        // Apply transform to grid
        const normalizedY = currentY % (galleryGrid.offsetHeight / 2);
        gsap.set(galleryGrid, {
            y: -normalizedY
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // ==================== CURSOR EFFECT ====================
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    gsap.ticker.add(() => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        gsap.set(cursor, {
            left: cursorX,
            top: cursorY,
            xPercent: -50,
            yPercent: -50
        });
    });
    
    const interactiveElements = document.querySelectorAll('a, button, .corner-btn, .nav-link, .social-link');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // ==================== TIMESTAMP UPDATE ====================
    
    function updateTimestamp() {
        const now = new Date();
        const uaeTime = new Date(now.getTime() + (4 * 60 * 60 * 1000) - (now.getTimezoneOffset() * 60 * 1000));
        const hours = String(uaeTime.getUTCHours()).padStart(2, '0');
        const minutes = String(uaeTime.getUTCMinutes()).padStart(2, '0');
        const seconds = String(uaeTime.getUTCSeconds()).padStart(2, '0');
        const timestamp = document.querySelector('.timestamp');
        if (timestamp) {
            timestamp.textContent = `${hours}:${minutes}:${seconds} GST`;
        }
    }
    
    updateTimestamp();
    setInterval(updateTimestamp, 1000);
    
    console.log('🚀 True infinite scroll loaded!');
});
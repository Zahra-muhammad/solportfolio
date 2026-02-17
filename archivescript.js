// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// ==================== SOL. LOADER ====================
const loaderTl = gsap.timeline({
    onComplete: () => {
        document.getElementById('archiveLoader').style.display = 'none';
    }
});

loaderTl.to('#archiveLoaderText', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: 'power4.out'
});

loaderTl.to('#archiveLoaderText', {
    color: '#000',
    duration: 0.4,
    ease: 'none'
}, '+=0.3');

loaderTl.to('#archiveLoaderText', {
    scale: 0.5,
    opacity: 0,
    duration: 0.8,
    ease: 'power4.in'
}, '+=0.4');

loaderTl.to('#archiveLoader', {
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut'
}, '-=0.3');

// ==================== LIVE UAE TIME ====================
function updateUAETime() {
    const now = new Date();
    const uaeTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(now);
    
    document.querySelector('.timestamp').textContent = uaeTime + ' GMT+4';
}

updateUAETime();
setInterval(updateUAETime, 1000);

// ==================== PROJECT CASES DATA ====================
const projectCases = {
    0: [
        'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
        'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&q=80',
        'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=800&q=80',
        'https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=800&q=80',
        'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&q=80',
        'https://images.unsplash.com/photo-1682687219356-e820ca126c92?w=800&q=80',
        'https://images.unsplash.com/photo-1682687218147-9806132dc697?w=800&q=80'
    ],
    1: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80',
        'https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=800&q=80',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80',
        'https://images.unsplash.com/photo-1478827536114-da961b7f86c0?w=800&q=80',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
    ],
    2: [
        'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
        'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=800&q=80',
        'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80',
        'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&q=80',
        'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80'
    ],
    3: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
        'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&q=80',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
        'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80'
    ],
    4: [
        'pictures/download (52).jpg',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
        'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80',
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'
    ],
    5: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80',
        'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80',
        'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80',
        'https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800&q=80',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80'
    ],
    6: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=800&q=80',
        'https://images.unsplash.com/photo-1561212044-bac5ef688a07?w=800&q=80',
        'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=800&q=80',
        'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80',
        'https://images.unsplash.com/photo-1554034483-04fda0d3507b?w=800&q=80',
        'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80'
    ]
};

// Variables
let currentProjectIndex = 4;
let currentIndex = 0;
let images = document.querySelectorAll('.main-image');
let thumbnails = document.querySelectorAll('.thumbnail');
let totalImages = images.length;
let isAnimating = false;

function loadProjectImages(projectIndex) {
    const imageContainer = document.querySelector('.image-container');
    const thumbnailGrid = document.querySelector('.thumbnail-grid');
    
    imageContainer.innerHTML = '';
    thumbnailGrid.innerHTML = '';
    
    const projectImages = projectCases[projectIndex];
    
    projectImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;
        img.className = `main-image${index === 0 ? ' active' : ''}`;
        img.dataset.index = index;
        img.style.zIndex = index === 0 ? 1 : 0;
        img.style.opacity = 0;
        img.style.clipPath = 'inset(50% 50% 50% 50%)';
        imageContainer.appendChild(img);
    });
    
    const firstImage = imageContainer.querySelector('.main-image.active');
    gsap.fromTo(firstImage, 
        { opacity: 1, clipPath: 'inset(50% 50% 50% 50%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: "power2.out" }
    );
    
    projectImages.forEach((src, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail${index === 0 ? ' active' : ''}`;
        thumb.dataset.index = index;
        
        const thumbImg = document.createElement('img');
        thumbImg.src = src.replace('w=800', 'w=200');
        thumbImg.alt = `Thumb ${index + 1}`;
        
        thumb.appendChild(thumbImg);
        thumbnailGrid.appendChild(thumb);
        
        thumb.addEventListener('click', () => {
            changeImage(index);
            const scrollProgress = index / (projectImages.length - 1);
            const scrollTo = scrollProgress * (document.body.scrollHeight - window.innerHeight);
            gsap.to(window, { scrollTo, duration: 1, ease: "power2.inOut" });
        });
    });
    
    images = document.querySelectorAll('.main-image');
    thumbnails = document.querySelectorAll('.thumbnail');
    totalImages = images.length;
    currentIndex = 0;
    
    setupScrollTrigger();
}

function setupScrollTrigger() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
            if (isAnimating) return;
            const progress = self.progress;
            const targetIndex = Math.floor(progress * (totalImages - 1));
            if (targetIndex !== currentIndex) changeImage(targetIndex);
        }
    });
    
    const thumbnailGrid = document.querySelector('.thumbnail-grid');
    const totalThumbnailHeight = totalImages * 112;
    const containerHeight = window.innerHeight - 160;
    
    gsap.to('.thumbnail-grid', {
        y: () => -(totalThumbnailHeight - containerHeight + 50),
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5
        }
    });
}

function changeImage(newIndex) {
    if (isAnimating || newIndex === currentIndex) return;
    
    isAnimating = true;
    
    const currentImage = images[currentIndex];
    const newImage = images[newIndex];
    
    gsap.killTweensOf([currentImage, newImage]);
    
    newImage.style.zIndex = 2;
    currentImage.style.zIndex = 1;
    
    gsap.fromTo(newImage, 
        { opacity: 1, clipPath: 'inset(50% 50% 50% 50%)' },
        {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 0.5,
            ease: "power2.out",
            onStart: () => { newImage.classList.add('active'); },
            onComplete: () => {
                currentImage.classList.remove('active');
                currentImage.style.opacity = 0;
                currentImage.style.zIndex = 0;
                currentImage.style.clipPath = 'inset(50% 50% 50% 50%)';
                isAnimating = false;
            }
        }
    );
    
    thumbnails[currentIndex].classList.remove('active');
    thumbnails[newIndex].classList.add('active');
    
    currentIndex = newIndex;
}

const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach((item, projectIndex) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.project-name').forEach(name => name.classList.remove('active'));
        item.querySelector('.project-name').classList.add('active');
        currentProjectIndex = projectIndex;
        loadProjectImages(projectIndex);
        gsap.to(window, { scrollTo: 0, duration: 0.8, ease: "power2.inOut" });
    });
});

// Initial setup — delayed to run after loader
setupScrollTrigger();

// Page entrance animations — fire after loader finishes
loaderTl.from('.header', { y: -100, opacity: 0, duration: 0.8, ease: "power2.out" }, '-=0.2');
loaderTl.from('.sidebar', { x: -100, opacity: 0, duration: 0.8, ease: "power2.out" }, '-=0.6');
loaderTl.from('.right-sidebar', { x: 100, opacity: 0, duration: 0.8, ease: "power2.out" }, '-=0.8');
loaderTl.from('.main-image.active', { opacity: 0, duration: 1, ease: "power2.out" }, '-=0.6');

// ================= CUSTOM CURSOR =================

const cursor = document.querySelector('.custom-cursor');
const cursorText = document.querySelector('.cursor-text');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
    });
});

// Elements that trigger circle mode
const interactiveElements = document.querySelectorAll(
    '.project-item, .thumbnail, a'
);

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('circle');
    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('circle');
    });
});

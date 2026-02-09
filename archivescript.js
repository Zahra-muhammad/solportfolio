// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Variables
let currentIndex = 0;
const images = document.querySelectorAll('.main-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const totalImages = images.length;

// Change images on scroll without zoom animation
ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
        const progress = self.progress;
        const targetIndex = Math.floor(progress * (totalImages - 1));
        
        if (targetIndex !== currentIndex) {
            changeImage(targetIndex);
        }
    }
});

// Function to change main image - NO SCALE ANIMATION
function changeImage(newIndex) {
    const currentImage = images[currentIndex];
    const newImage = images[newIndex];
    
    // Simple fade out current image
    gsap.to(currentImage, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
            currentImage.classList.remove('active');
        }
    });
    
    // Simple fade in new image - NO SCALE
    gsap.fromTo(newImage, 
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onStart: () => {
                newImage.classList.add('active');
            }
        }
    );
    
    // Update thumbnails
    thumbnails[currentIndex].classList.remove('active');
    thumbnails[newIndex].classList.add('active');
    
    currentIndex = newIndex;
}

// Thumbnail scroll animation - moves up and down with scroll
const thumbnailGrid = document.querySelector('.thumbnail-grid');
const totalThumbnailHeight = thumbnails.length * 112; // 100px height + 12px gap
const containerHeight = window.innerHeight - 160; // viewport height - header/footer

gsap.to('.thumbnail-grid', {
    y: () => {
        // Calculate max scroll distance
        const maxScroll = totalThumbnailHeight - containerHeight + 50;
        return -maxScroll;
    },
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        onUpdate: (self) => {
            // Optional: Add parallax effect
            const progress = self.progress;
            thumbnailGrid.style.transform = `translateY(${-progress * (totalThumbnailHeight - containerHeight + 50)}px)`;
        }
    }
});

// Thumbnail click events
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        changeImage(index);
        
        // Scroll to corresponding position
        const scrollProgress = index / (totalImages - 1);
        const scrollTo = scrollProgress * (document.body.scrollHeight - window.innerHeight);
        
        gsap.to(window, {
            scrollTo: scrollTo,
            duration: 1,
            ease: "power2.inOut"
        });
    });
});

// Project items - NO GSAP, pure CSS
const projectItems = document.querySelectorAll('.project-item');

// Footer links - NO GSAP, pure CSS

// Initial animation on page load
gsap.from('.header', {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from('.sidebar', {
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

gsap.from('.right-sidebar', {
    x: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
});

gsap.from('.main-image.active', {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
});

gsap.from('.footer', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
});
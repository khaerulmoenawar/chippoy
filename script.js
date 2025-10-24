// Memory details for popups
const memoryDetails = {
    'first-date': {
        title: 'Our First Romantic Day',
        content: `
            <p>November 2, 2023 will forever be etched in my heart as the day our beautiful journey began. I remember the butterflies in my stomach as I got ready to meet you, not knowing that this day would change my life forever.</p>
            <p>We spent hours talking, laughing, and discovering each other's souls. The way your eyes lit up when you talked about your passions, the gentle sound of your laughter, and the comfort I felt in your presence - it all felt so right.</p>
            <p>That evening, as we walked under the stars, I knew I had found someone truly special. The connection we shared was undeniable, and I went home that night with a heart full of hope and excitement for what was to come.</p>
        `
    },
    'christmas': {
        title: 'First Christmas Together',
        content: `
            <p>Our first Christmas together was nothing short of magical. The twinkling lights, the warmth of the fireplace, and the joy of experiencing the holiday season with you created memories I'll cherish forever.</p>
            <p>I'll never forget the thoughtful gifts we exchanged - not just material things, but the promises and dreams we shared. The way your face lit up when you opened my present reminded me of the pure, childlike joy that love can bring.</p>
            <p>That Christmas taught me that the greatest gift isn't something you can wrap in paper - it's having you by my side, sharing laughter, warmth, and creating traditions that would last a lifetime.</p>
        `
    },
    'valentines': {
        title: 'Our First Valentine\'s Day',
        content: `
            <p>Our first Valentine's Day was a celebration of the love that had blossomed between us over the past few months. The careful planning, the romantic gestures, and the sheer effort you put into making the day special touched my heart deeply.</p>
            <p>I remember the beautiful dinner, the heartfelt card you wrote, and the way you looked at me across the table. In that moment, surrounded by candlelight and romance, I felt like the luckiest person in the world.</p>
            <p>That Valentine's Day wasn't just about roses and chocolates - it was a testament to the beautiful connection we share and the commitment we were building together, one precious moment at a time.</p>
        `
    },
    'trip': {
        title: 'Our First Trip Together',
        content: `
            <p>Our first trip together was an adventure that brought us even closer. Exploring new places with you by my side made every moment special, from the breathtaking views to the simple joy of sharing meals together.</p>
            <p>I'll always remember getting lost in that charming little town and how we turned what could have been a stressful situation into one of our fondest memories. Your calm demeanor and sense of adventure reminded me why I fell in love with you.</p>
            <p>That trip taught me that with you, every journey is an adventure, and every destination feels like home when we're together. It solidified our bond and created memories that I'll treasure forever.</p>
        `
    },
    'one-year': {
        title: 'One Year Anniversary',
        content: `
            <p>Celebrating our first year together was a milestone that filled my heart with gratitude and joy. Looking back on those 365 days, I was overwhelmed by how much we had grown together and how deeply our love had rooted itself in both our lives.</p>
            <p>The way we celebrated - reminiscing about our favorite moments, laughing about our silly arguments, and dreaming about our future - made me realize how perfectly we complement each other.</p>
            <p>That first anniversary wasn't just a celebration of time passed; it was a promise of all the beautiful years to come, a reaffirmation of the love that had become the foundation of my happiness.</p>
        `
    },
    'today': {
        title: 'Two Years Together',
        content: `
            <p>Today, as we celebrate two years together, I'm filled with overwhelming gratitude for every moment we've shared. These 730 days have been a beautiful journey of growth, understanding, and deepening love.</p>
            <p>Through challenges and triumphs, laughter and tears, you've been my constant. Your unwavering support, your understanding heart, and your incredible capacity to love have made these two years the most meaningful of my life.</p>
            <p>As I look toward our future, I do so with excitement and confidence, knowing that with you by my side, every day will be an adventure and every challenge will be faced together. Here's to us, to our love, and to all the beautiful years ahead.</p>
        `
    }
};

// Create floating hearts in background
function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartCount = 50;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.1;
        container.appendChild(heart);
    }
}

// Create animated background elements
function createAnimatedBackground() {
    const container = document.getElementById('animatedBg');
    const elementCount = 15;
    
    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.classList.add('bg-element');
        const size = Math.random() * 200 + 50;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${Math.random() * 30 + 20}s`;
        element.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(element);
    }
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to pink
    const savedTheme = localStorage.getItem('anniversaryTheme') || 'pink';
    body.setAttribute('data-theme', savedTheme);
    
    // Update toggle icon based on current theme
    updateToggleIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'pink' ? 'dark' : 'pink';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('anniversaryTheme', newTheme);
        
        updateToggleIcon(newTheme);
        
        // Add a subtle animation to the toggle
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0)';
        }, 300);
    });
    
    function updateToggleIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'pink') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
}

// Custom cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    // Use requestAnimationFrame for smoother cursor movement
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Smooth movement for cursor
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        
        // Smooth movement for follower with delay
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('clicked');
        
        // Create click effect
        const clickEffect = document.createElement('div');
        clickEffect.classList.add('click-effect');
        clickEffect.style.left = (mouseX - 10) + 'px';
        clickEffect.style.top = (mouseY - 10) + 'px';
        document.body.appendChild(clickEffect);
        
        setTimeout(() => {
            clickEffect.remove();
        }, 500);
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('clicked');
    });
    
    // Change cursor on hover interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .love-lock, .note, .promise, .memory-content');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Enhanced Love Lock with Heart Confetti
function initLoveLock() {
    const loveLock = document.getElementById('loveLock');
    let isUnlocked = false;
    
    loveLock.addEventListener('click', () => {
        isUnlocked = !isUnlocked;
        loveLock.classList.toggle('unlocked', isUnlocked);
        
        if (isUnlocked) {
            // Create floating hearts when unlocked
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createFloatingHeart(loveLock);
                }, i * 100);
            }
            
            // Add sparkle effect
            addSparkleEffect(loveLock);
            
            // Create heart confetti effect
            createHeartConfetti();
        }
    });
    
    function createFloatingHeart(lockElement) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        heart.style.fontSize = '20px';
        heart.style.left = lockElement.getBoundingClientRect().left + 'px';
        heart.style.top = lockElement.getBoundingClientRect().top + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = `floatHeart 2s ease-out forwards`;
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
    
    function addSparkleEffect(lockElement) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'fixed';
                sparkle.style.width = '10px';
                sparkle.style.height = '10px';
                sparkle.style.background = 'white';
                sparkle.style.borderRadius = '50%';
                sparkle.style.left = (lockElement.getBoundingClientRect().left + Math.random() * 100) + 'px';
                sparkle.style.top = (lockElement.getBoundingClientRect().top + Math.random() * 100) + 'px';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '9999';
                sparkle.style.animation = 'sparkle 1s ease-out forwards';
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }, i * 150);
        }
    }
    
    function createHeartConfetti() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.classList.add('heart-confetti');
                confetti.innerHTML = '❤';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.color = getRandomColor();
                confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
                confetti.style.opacity = '1';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.animation = `heartConfettiFall ${Math.random() * 3 + 2}s ease-in forwards`;
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 100);
        }
        
        // Add CSS for heart confetti animation if not already added
        if (!document.querySelector('#heartConfettiAnimation')) {
            const style = document.createElement('style');
            style.id = 'heartConfettiAnimation';
            style.textContent = `
                @keyframes heartConfettiFall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    function getRandomColor() {
        const colors = [
            getComputedStyle(document.documentElement).getPropertyValue('--primary'),
            getComputedStyle(document.documentElement).getPropertyValue('--accent'),
            '#ff6b8b', '#8db600', '#ffcc00', '#00b4d8', '#ff6b6b'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Add CSS for animations if not already added
    if (!document.querySelector('#floatHeartAnimation')) {
        const style = document.createElement('style');
        style.id = 'floatHeartAnimation';
        style.textContent = `
            @keyframes floatHeart {
                0% {
                    opacity: 1;
                    transform: translate(0, 0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate(${Math.random() * 100 - 50}px, -100px) scale(0.5);
                }
            }
            @keyframes sparkle {
                0% {
                    opacity: 1;
                    transform: scale(1);
                }
                100% {
                    opacity: 0;
                    transform: scale(2);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Music Player with "November the 2nd" by Adhitya Sofyan - AUTOPLAY
function initMusicPlayer() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const musicPlayer = document.getElementById('musicPlayer');
    let isPlaying = true; // Start with playing
    
    // Create audio element
    const audio = new Audio();
    // Using a placeholder - replace with actual song URL
    audio.src = 'November the 2nd.wav';
    audio.loop = true;
    
    // Autoplay the music when page loads
    audio.play().catch(e => {
        console.log('Autoplay prevented:', e);
        // If autoplay is prevented, show play button instead
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        musicPlayer.querySelector('.music-info').textContent = 'November the 2nd - Click to play';
    });
    
    playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            musicPlayer.querySelector('.music-info').textContent = 'November the 2nd - Playing';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            musicPlayer.querySelector('.music-info').textContent = 'November the 2nd - Paused';
        }
    });
}

// Popup functionality
function initPopups() {
    const galleryPopup = document.getElementById('galleryPopup');
    const memoryPopup = document.getElementById('memoryPopup');
    const galleryClose = document.getElementById('galleryClose');
    const memoryClose = document.getElementById('memoryClose');
    const galleryLink = document.getElementById('galleryLink');
    
    // Gallery popup triggers
    const galleryTriggers = document.querySelectorAll('.gallery-item, #galleryLink');
    galleryTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            galleryPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Memory popup triggers
    const memoryTriggers = document.querySelectorAll('.memory-content');
    memoryTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const memoryId = trigger.getAttribute('data-memory');
            const memory = memoryDetails[memoryId];
            
            if (memory) {
                document.getElementById('memoryPopupTitle').textContent = memory.title;
                document.getElementById('memoryPopupContent').innerHTML = memory.content;
                memoryPopup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close buttons
    galleryClose.addEventListener('click', () => {
        galleryPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    memoryClose.addEventListener('click', () => {
        memoryPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close popups when clicking outside content
    [galleryPopup, memoryPopup].forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
}

// Typewriter effect for love letter
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriterGreeting');
    if (typewriterElement) {
        // Reset and trigger the typewriter animation
        typewriterElement.classList.remove('typing');
        void typewriterElement.offsetWidth; // Trigger reflow
        typewriterElement.classList.add('typing');
    }
}

// Scroll animations with performance optimization
function checkVisibility() {
    const sections = document.querySelectorAll('section');
    const sectionTitles = document.querySelectorAll('.section-title');
    const notes = document.querySelectorAll('.note');
    const promises = document.querySelectorAll('.promise');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const memoryItems = document.querySelectorAll('.memory-item');
    const loveLetter = document.querySelector('.love-letter');
    const letterParagraphs = document.querySelectorAll('.letter-content p');
    const signature = document.querySelector('.signature');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    });
    
    sectionTitles.forEach(title => {
        const titleTop = title.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (titleTop < windowHeight * 0.85) {
            title.classList.add('visible');
        }
    });
    
    notes.forEach((note, index) => {
        const noteTop = note.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (noteTop < windowHeight * 0.85) {
            setTimeout(() => {
                note.classList.add('visible');
            }, index * 200);
        }
    });
    
    promises.forEach((promise, index) => {
        const promiseTop = promise.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (promiseTop < windowHeight * 0.85) {
            setTimeout(() => {
                promise.classList.add('visible');
            }, index * 200);
        }
    });
    
    galleryItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.85) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        }
    });
    
    memoryItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.85) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        }
    });
    
    if (loveLetter) {
        const letterTop = loveLetter.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (letterTop < windowHeight * 0.85) {
            loveLetter.classList.add('visible');
            
            // Trigger typewriter effect when love letter becomes visible
            initTypewriter();
            
            letterParagraphs.forEach((p, index) => {
                setTimeout(() => {
                    p.classList.add('visible');
                }, index * 500 + 1000); // Delay after typewriter
            });
            
            setTimeout(() => {
                signature.classList.add('visible');
            }, 4000);
        }
    }
}

// Countdown timer starting from November 2, 2023 WIB (Western Indonesian Time)
function updateCountdown() {
    const startDate = new Date('2023-11-02T00:00:00+07:00'); // November 2, 2023 in WIB timezone
    
    const now = new Date();
    
    // Calculate years
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();
    
    // Adjust for negative values
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Get days in previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    
    // Update DOM elements if they exist
    const elYears = document.getElementById('years');
    const elMonths = document.getElementById('months');
    const elDays = document.getElementById('days');
    const elHours = document.getElementById('hours');
    const elMinutes = document.getElementById('minutes');
    const elSeconds = document.getElementById('seconds');
    
    if (elYears) elYears.textContent = years;
    if (elMonths) elMonths.textContent = months;
    if (elDays) elDays.textContent = days;
    if (elHours) elHours.textContent = hours;
    if (elMinutes) elMinutes.textContent = minutes;
    if (elSeconds) elSeconds.textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call


// Initialize features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    createAnimatedBackground();
    initThemeToggle();
    initCustomCursor();
    initLoveLock();
    initMusicPlayer();
    initPopups();
    checkVisibility();
    
    // Re-run visibility checks on scroll/resize
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);
});

// Gallery functionality
document.addEventListener('DOMContentLoaded', () => {
    const galleryPopup = document.getElementById('galleryPopup');
    const popupGallery = galleryPopup.querySelector('.popup-gallery');
    const galleryClose = document.getElementById('galleryClose');
    // Use explicit asset lists (images/videos) so you can replace each URL later
    const galleryAssets = {
        galleryTrigger: [
            { type: 'image', src: 'kw1.jpg', },
            { type: 'image', src: 'kw2.jpg' },
            { type: 'image', src: 'kw3.jpg' },
            { type: 'image', src: 'kw4.jpg' },
            { type: 'image', src: 'kw5.jpg' },
            { type: 'image', src: 'kw6.jpg' }
        ],
        galleryTrigger2: [
            { type: 'image', src: 'mr1.jpg' },
            { type: 'image', src: 'mr2.jpg' },
            { type: 'image', src: 'mr3.jpg' },
            { type: 'image', src: 'mr4.jpg' },
            { type: 'image', src: 'mr5.jpg' },
            { type: 'image', src: 'mr6.jpg' }
        ],
        galleryTrigger3: [
            { type: 'image', src: 'lv1.jpg' },
            { type: 'image', src: 'lv2.jpg' },
            { type: 'image', src: 'lv3.jpg' },
            { type: 'image', src: 'lv4.jpg' },
            { type: 'image', src: 'lv5.jpg' },
            { type: 'image', src: 'lv6.jpg' }
        ],
        galleryTrigger4: [
            { type: 'image', src: 'pb1.jpg' },
            { type: 'image', src: 'pb2.jpg' },
            { type: 'image', src: 'pb3.jpg' },
            { type: 'image', src: 'pb4.jpg' },
            { type: 'image', src: 'pb5.jpg' },
            { type: 'image', src: 'pb6.jpg' }
        ],
        galleryTrigger5: [
            { type: 'video', src: 'vid1.mp4' },
            { type: 'video', src: 'vid2.mp4' },
            { type: 'video', src: 'vid3.mp4' },
            { type: 'video', src: 'vid4.mp4' },
            { type: 'video', src: 'vid5.mp4' },
            { type: 'video', src: 'vid6.mp4' }
        ],
        galleryTrigger6: [
            { type: 'image', src: 'fn1.jpg' },
            { type: 'image', src: 'fn2.jpg' },
            { type: 'image', src: 'fn3.jpg' },
            { type: 'image', src: 'fn4.jpg' },
            { type: 'image', src: 'fn5.jpg' },
            { type: 'image', src: 'fn6.jpg' }
        ],
        'all-memories': []
    };

    // Build combined list for 'all-memories' by concatenating others (once)
    (function buildAllMemories() {
        const keys = Object.keys(galleryAssets).filter(k => k !== 'all-memories');
        const combined = [];
        keys.forEach(k => {
            combined.push(...galleryAssets[k]);
        });
        galleryAssets['all-memories'] = combined;
    })();

    // Ensure lightbox CSS exists (with smooth open/close animations)
    if (!document.getElementById('lightboxStyles')) {
        const style = document.createElement('style');
        style.id = 'lightboxStyles';
        style.textContent = `
            .image-lightbox-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0,0,0,0.85);
                z-index: 30000;
                opacity: 0;
                transition: opacity 260ms ease;
            }
            .image-lightbox-overlay.visible {
                opacity: 1;
            }
            .image-lightbox-media {
                max-width: 94vw;
                max-height: 92vh;
                border-radius: 10px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.6);
                transform: scale(0.96);
                opacity: 0;
                transition: transform 300ms cubic-bezier(.2,.8,.2,1), opacity 220ms ease;
                will-change: transform, opacity;
            }
            .image-lightbox-media.visible {
                transform: scale(1);
                opacity: 1;
            }
            .image-lightbox-close {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 30001;
                background: rgba(255,255,255,0.9);
                border-radius: 50%;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                font-size: 18px;
                color: #333;
                opacity: 0;
                transform: translateY(-6px) scale(0.96);
                transition: transform 200ms ease, opacity 160ms ease;
            }
            .image-lightbox-close.visible {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        `;
        document.head.appendChild(style);
    }

    // Populate popup with assets (images/videos) for given key
    function populatePopupGallery(key, count = 6) {
        popupGallery.innerHTML = '';

        const assets = (galleryAssets[key] && galleryAssets[key].slice()) || galleryAssets['all-memories'].slice() || [];

        // If fewer assets than requested, use random placeholder images
        if (assets.length === 0) {
            // Generate random placeholder images
            for (let i = 0; i < count; i++) {
                assets.push({ 
                    type: 'image', 
                    src: `https://picsum.photos/400/300?random=${i}&key=love${key}`,
                    alt: 'Our beautiful memory'
                });
            }
        }

        const assetsToShow = assets.slice(0, count);

        assetsToShow.forEach((asset) => {
            const item = document.createElement('div');
            item.className = 'popup-gallery-item';

            if (asset.type === 'video') {
                const video = document.createElement('video');
                video.src = asset.src;
                video.controls = true;
                video.preload = 'metadata';
                video.style.width = '100%';
                video.style.height = '100%';
                video.style.objectFit = 'cover';
                video.setAttribute('aria-label', asset.alt || '');
                // mark for lightbox
                video.dataset.lightboxType = 'video';
                video.dataset.lightboxSrc = asset.src;
                item.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = asset.src;
                img.alt = asset.alt || key;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.display = 'block';
                // mark for lightbox
                img.dataset.lightboxType = 'image';
                img.dataset.lightboxSrc = asset.src;
                item.appendChild(img);
            }

            popupGallery.appendChild(item);
        });

        // Attach click-to-enlarge handling (delegated)
        attachPopupItemClickHandlers();

        // Small title update (optional) - shows which gallery was clicked
        const titleEl = document.getElementById('memoryPopupTitle');
        if (titleEl) titleEl.textContent = `Gallery — ${key}`;
    }

    // Lightbox open/close helpers with smooth animations
    function openLightbox(type, src, alt) {
        // prevent multiple lightboxes
        if (document.querySelector('.image-lightbox-overlay')) return;

        const overlay = document.createElement('div');
        overlay.className = 'image-lightbox-overlay';
        overlay.tabIndex = -1;
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');

        let media;
        if (type === 'video') {
            media = document.createElement('video');
            media.src = src;
            media.controls = true;
            media.autoplay = true;
            media.playsInline = true;
        } else {
            media = document.createElement('img');
            media.src = src;
            media.alt = alt || '';
        }

        media.className = 'image-lightbox-media';
        overlay.appendChild(media);

        const closeBtn = document.createElement('button');
        closeBtn.className = 'image-lightbox-close';
        closeBtn.setAttribute('aria-label', 'Close');
        closeBtn.innerHTML = '&times;';
        document.body.appendChild(overlay);
        document.body.appendChild(closeBtn);

        // prevent background scroll
        document.body.style.overflow = 'hidden';

        // show with smooth animation: add 'visible' in next frame
        requestAnimationFrame(() => {
            overlay.classList.add('visible');
            // small delay to trigger media transition nicely
            requestAnimationFrame(() => {
                media.classList.add('visible');
                closeBtn.classList.add('visible');
            });
        });

        function close() {
            // start closing animation
            media.classList.remove('visible');
            closeBtn.classList.remove('visible');
            overlay.classList.remove('visible');

            // wait for transition to finish, then remove
            const cleanup = () => {
                if (overlay.parentNode) overlay.remove();
                if (closeBtn.parentNode) closeBtn.remove();
                document.body.style.overflow = 'auto';
                document.removeEventListener('keydown', onKey);
                media.removeEventListener('transitionend', cleanup);
            };

            // Use transitionend on media with a fallback timeout
            let called = false;
            const safeTimeout = setTimeout(() => {
                if (!called) {
                    called = true;
                    cleanup();
                }
            }, 400);

            media.addEventListener('transitionend', () => {
                if (!called) {
                    called = true;
                    clearTimeout(safeTimeout);
                    cleanup();
                }
            });
        }

        overlay.addEventListener('click', (e) => {
            // close when clicking outside media
            if (e.target === overlay) close();
        });

        closeBtn.addEventListener('click', close);

        function onKey(e) {
            if (e.key === 'Escape') close();
        }
        document.addEventListener('keydown', onKey);
    }

    // Add event listeners to items inside popupGallery so clicking an image/video opens lightbox
    function attachPopupItemClickHandlers() {
        // delegated: listen once on popupGallery
        popupGallery.querySelectorAll('.popup-gallery-item img, .popup-gallery-item video').forEach(mediaEl => {
            // ensure no duplicate listeners
            if (mediaEl.dataset.listenerAttached) return;
            mediaEl.dataset.listenerAttached = '1';
            mediaEl.style.cursor = 'zoom-in';
            mediaEl.addEventListener('click', (e) => {
                e.stopPropagation();
                const type = mediaEl.dataset.lightboxType || (mediaEl.tagName.toLowerCase() === 'video' ? 'video' : 'image');
                const src = mediaEl.dataset.lightboxSrc || mediaEl.src;
                openLightbox(type, src, mediaEl.alt || '');
            });
        });
    }

    // Open popup with images based on key
    function openGalleryForKey(key) {
        populatePopupGallery(key);
        galleryPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Attach capturing click listeners to override earlier generic handlers
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(el => {
        const key = el.dataset.gallery || el.id || 'gallery';
        // capturing handler prevents previously attached generic handlers from opening the default popup
        el.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            openGalleryForKey(key);
        }, true);
    });

    // If the top nav "Gallery" link should open a combined/random gallery:
    const galleryLink = document.getElementById('galleryLink');
    if (galleryLink) {
        galleryLink.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            openGalleryForKey('all-memories');
        }, true);
    }

    // Clean up popup on close
    if (galleryClose) {
        galleryClose.addEventListener('click', () => {
            galleryPopup.classList.remove('active');
            popupGallery.innerHTML = '';
            document.body.style.overflow = 'auto';
            // reset title
            const titleEl = document.getElementById('memoryPopupTitle');
            if (titleEl) titleEl.textContent = 'Our Memories Gallery';
        });
    }

    // Close when clicking outside content (keeps existing behavior but clears images)
    galleryPopup.addEventListener('click', (e) => {
        if (e.target === galleryPopup) {
            galleryPopup.classList.remove('active');
            popupGallery.innerHTML = '';
            document.body.style.overflow = 'auto';
            const titleEl = document.getElementById('memoryPopupTitle');
            if (titleEl) titleEl.textContent = 'Our Memories Gallery';
        }
    });
});

// Cursor popup fix
(function(){
    // Ensure custom cursor appears above popups and responds to popup controls.
    // This lightweight patch injects CSS to raise cursor z-index and adds delegated
    // hover handling so popup elements trigger the same cursor scale behavior.
    function injectCursorStyles() {
        if (document.getElementById('cursor-popup-fix')) return;
        var css = `
            /* make custom cursor and effects sit above modals/popup overlays */
            .cursor, .cursor-follower, .click-effect, .heart-confetti {
                z-index: 20001 !important;
                pointer-events: none !important;
            }
        `;
        var s = document.createElement('style');
        s.id = 'cursor-popup-fix';
        s.appendChild(document.createTextNode(css));
        (document.head || document.documentElement).appendChild(s);
    }

    function initPopupCursorDelegation() {
        var interactiveSelector = [
            'a', 'button',
            '.gallery-item', '.gallery-item *',
            '.popup-content', '.popup-content *',
            '.popup-gallery-item', '.popup-gallery-item *',
            '.popup-close', '.popup-close *',
            '.love-lock', '.memory-content', '.note', '.promise'
        ].join(',');

        var cursorEl = function(){ return document.querySelector('.cursor'); };
        // track mouse to determine element under pointer for robust leave handling
        var lastHoveredInteractive = false;
        document.addEventListener('mousemove', function(e){
            // update hovered state using elementFromPoint
            var el = document.elementFromPoint(e.clientX, e.clientY);
            var isInteractive = el && el.closest && !!el.closest(interactiveSelector);
            if (isInteractive && !lastHoveredInteractive) {
                var c = cursorEl();
                if (c) c.style.transform = 'scale(1.5)';
                lastHoveredInteractive = true;
            } else if (!isInteractive && lastHoveredInteractive) {
                var c2 = cursorEl();
                if (c2) c2.style.transform = 'scale(1)';
                lastHoveredInteractive = false;
            }
        }, {passive:true});

        // also respond to focus events for accessibility (keyboard focus inside popups)
        document.addEventListener('focusin', function(e){
            if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
                var c = cursorEl();
                if (c) c.style.transform = 'scale(1.5)';
            }
        });
        document.addEventListener('focusout', function(){
            var c = cursorEl();
            if (c) c.style.transform = 'scale(1)';
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function(){
            injectCursorStyles();
            initPopupCursorDelegation();
        }, { once: true });
    } else {
        injectCursorStyles();
        initPopupCursorDelegation();
    }
})();

// Mobile adaptation
(function(){
    // Lightweight early mobile-adapt that improves layout & interaction on touch/small screens.
    var isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0 || window.innerWidth <= 768;
    window.__IS_TOUCH = isTouch;

    function inject(css) {
        function append() {
            var s = document.createElement('style');
            s.id = 'mobile-adapt-styles';
            s.appendChild(document.createTextNode(css));
            (document.head || document.documentElement).appendChild(s);
        }
        if (document.head) append();
        else document.addEventListener('DOMContentLoaded', append, { once: true });
    }

    if (isTouch) {
        inject(`
            /* Restore default cursor & hide custom cursor artifacts for touch devices */
            * { cursor: auto !important; }
            .cursor, .cursor-follower, .click-effect, .heart-confetti { display: none !important; }

            /* Make header more flexible on small screens */
            header { height: auto !important; padding: 60px 20px !important; }
            h1 { font-size: 2.4rem !important; line-height: 1.15 !important; }
            .subtitle { font-size: 1rem !important; margin-bottom: 18px !important; }

            /* More compact countdown */
            .countdown-container { padding: 16px !important; }
            .countdown-item { padding: 12px 10px !important; min-width: 64px !important; }

            /* Single-column galleries & popup friendly sizes */
            .gallery, .popup-gallery { grid-template-columns: 1fr !important; gap: 12px !important; }
            .gallery-item, .popup-gallery-item { height: 180px !important; border-radius: 12px !important; }

            /* Bigger touch targets */
            .music-player { left: 12px !important; bottom: 12px !important; padding: 10px 12px !important; border-radius: 12px !important; }
            .music-control, .theme-toggle, .popup-close, .scroll-to-top { min-width: 44px !important; min-height: 44px !important; }

            /* Make popups and letters easier to read on small screens */
            .popup-content { padding: 18px !important; width: 94% !important; max-width: 720px !important; }
            .love-letter { padding: 22px !important; border-radius: 14px !important; }

            /* Reduce distracting background/float animation intensity */
            .bg-element, .heart, .floating { animation-duration: 6s !important; opacity: 0.15 !important; }
            .animated-bg { opacity: 0.7 !important; }

            /* Ensure nav is usable (hide desktop links, rely on anchors) */
            .nav-links { display: none !important; }

            /* Improve performance: avoid heavy transitions on low-width screens */
            @media (max-width: 480px) {
                * { transition: none !important; }
            }
        `);
    }
})();

// Resource preloading
(function(){
    // Early preconnects & preloads to speed up critical third-party resources
    var preconnects = [
        {rel:'preconnect', href:'https://fonts.googleapis.com'},
        {rel:'preconnect', href:'https://fonts.gstatic.com', crossorigin:''},
        {rel:'preconnect', href:'https://cdnjs.cloudflare.com', crossorigin:''}
    ];
    var preloads = [
        {rel:'preload', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', as:'style'},
        {rel:'preload', href:'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap', as:'style'},
        {rel:'preload', href:'November the 2nd.wav', as:'audio'}
    ];

    function appendLink(def){
        try {
            var l = document.createElement('link');
            for (var k in def) if (def[k] !== undefined) l[k] = def[k];
            // ensure crossorigin attribute exists when provided
            if (def.crossorigin !== undefined) l.setAttribute('crossorigin', def.crossorigin);
            // if head exists, append immediately; otherwise wait until it's ready
            if (document.head) document.head.appendChild(l);
            else document.addEventListener('DOMContentLoaded', function(){ document.head.appendChild(l); });
        } catch(e) {}
    }

    preconnects.forEach(appendLink);
    preloads.forEach(appendLink);

    // Apply rel=stylesheet for font-awesome and fonts after head is available to avoid render-block
    document.addEventListener('DOMContentLoaded', function(){
        var fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        fa.crossOrigin = '';
        document.head.appendChild(fa);

        var fonts = document.createElement('link');
        fonts.rel = 'stylesheet';
        fonts.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600&display=swap';
        document.head.appendChild(fonts);
    }, {once:true});

})();




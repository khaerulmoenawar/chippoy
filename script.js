let layoutCache = new Map();

function getCachedRect(element) {
    if (!layoutCache.has(element)) {
        layoutCache.set(element, element.getBoundingClientRect()); 
    }
    return layoutCache.get(element);
}

window.addEventListener('resize', () => layoutCache.clear());
window.addEventListener('scroll', () => layoutCache.clear());

const memoryDetails = {
    'first-date': {
        title: 'The Beginning of Our Love Story',
        content: `
            <p>November 2, 2023 will forever be the day our beautiful love story began. I remember the mix of nervous excitement and anticipation as I prepared to meet you, little knowing this evening would become the foundation of our forever.</p>
            <p>That magical afternoon at GBK Urban Forest witnessed the start of something extraordinary. As the golden hour embraced us, we found ourselves opening our hearts beneath the canopy of trees. The way your smile caught the fading sunlight, the gentle rhythm of our conversation, and the unspoken understanding that grew between us - every moment felt like destiny unfolding.</p>
            <p>Walking together as dusk settled around us, I realized I had found not just someone special, but my person. The connection we discovered that evening felt like coming home to a place I never knew existed, yet had been searching for my entire life.</p>
        `
    },
    'my-birthday': {
        title: 'My Birthday Celebration at the Aquarium',
        content: `
            <p>December 5, 2023 (the day is December 7th honestly) became our own personal festival of joy as we celebrated my birthday in the most magical way possible. The aquarium transformed into our underwater wonderland, where colorful fish danced around us like living confetti celebrating your special day.</p>
            <p>I'll never forget the priceless moment you gifted me that analog camera - and how we managed to ruin the film roll in the most hilariously typical us fashion that very same day! That became our most extravagantly wonderful date, filled with laughter that echoed through the ocean tunnels.</p>
            <p>Our first and only motorcycle adventure through Jakarta's chaotic streets, though utterly exhausting, became our romantic comedy - two souls navigating the city's heartbeat while finding our rhythm together. That day taught me that the most precious gifts are the memories we create, not the things we possess.</p>
        `
    },
    'our-cafe-spot': {
        title: 'Our First Cafe Sanctuary in Bogor',
        content: `
            <p>February 7, 2024 marked our discovery of what would become our sacred space - Jiwan Cafe. That first visit felt like uncovering a hidden gem where time slowed down just for us, where every corner seemed designed for whispered secrets and shared dreams.</p>
            <p>I remember the warmth of our hands clasped across the table, the way the afternoon light painted your features, and how our conversations flowed as smoothly as the drink we enjoyed. In that cozy sanctuary, we built another layer of our story.</p>
            <p>That cafe became more than just a place - it transformed into the backdrop of our growing love, witness to our laughter, our dreams, and the quiet comfort of simply being together. Every visit since has felt like adding another beautiful chapter to our ongoing romance.</p>
        `
    },
    'your-birthday': {
        title: 'Your First Birthday Celebration as My Love',
        content: `
            <p>July 28, 2024 (well 29 July to be precised) became a testament to love's creativity when resources were scarce but affection overflowed. Your first birthday celebration during our relationship challenged me to find magic in simplicity, and what emerged was more beautiful than any store-bought gift.</p>
            <p>The cake that my mother and sister baked with such heartfelt effort - though not quite bakery-perfect - represented something purer: the welcoming of you into our family fold. Their slightly lopsided creation became a symbol of how many hearts you had touched.</p>
            <p>Our adventure at Bogor Botanical Gardens, punctuated by sudden rain showers that we have to wait there until the rain stopped, became our liquid sunshine memory. Getting drenched together felt like nature's blessing on our journey, washing us clean for the beautiful year ahead.</p>
        `
    },
    'our-graduation': {
        title: 'Our Graduation Day & Family Encounters',
        content: `
            <p>September 19, 2024 marked not just our academic achievement but the beautiful merging of our worlds. As we stood there in our graduation gowns, we were celebrating more than degrees - we were honoring the journey we had navigated together.</p>
            <p>The profound moment you met my families, and I first met you mother, felt like the official weaving of our lives together. These weren't just first meetings; they were the beginning of family bonds that would strengthen and grow alongside our love.</p>
            <p>That day symbolized how far we had come - not just as individuals pursuing dreams, but as partners building a future. Our families' proud smiles reflected the joy we had found in each other, making the achievement doubly sweet.</p>
        `
    },
    'one-year': {
        title: 'One Year Anniversary - Surviving and Thriving',
        content: `
            <p>November 2, 2024 marked our first anniversary - a milestone that proved our love could withstand any storm. Looking back on those 366 days, I marveled at how we navigated emotional rollercoasters, survived near-breakups, and emerged stronger than ever.</p>
            <p>Our journey through that first year was like a dramatic novel filled with intense emotions, passionate reconciliations, and hard-won understanding. The challenges we faced didn't break us; they forged our bond in fire, teaching us the depth of our commitment to each other.</p>
            <p>Amidst all the emotional turbulence, we somehow managed to achieve our academic goals together, proving that our love could be both our greatest challenge and our strongest motivation. That first anniversary wasn't just about celebrating time - it was about honoring the resilience we built and the love that refused to give up, even when things got tough.</p>
        `
    },
    'second-year': {
        title: 'Growing Through Distance - Our Separate Battles',
        content: `
            <p>Our second year unfolded differently than our passionate first - it became a season of quiet support and individual growth. While I navigated the turbulent waters of career searching, you embarked on your own challenging quest for scholarship opportunities abroad.</p>
            <p>The distance between us grew not just emotionally but physically, with fewer meetings and simpler conversations. Yet, in that space, we discovered a new depth to our love - one that didn't need constant drama or grand gestures to survive. Our support became subtler but no less profound: late-night video calls of encouragement, understanding when plans changed, and celebrating small victories together or even us doing our own things but still spend it together.</p>
            <p>I'll always cherish our first movie date during this period - a simple evening that felt like an oasis in our busy lives. Sitting there in the dark theater, your hand in mine, we forgot about resumes and applications and just existed together. The shared laughter during the comedy scenes and the comfortable silence during the dramatic moments reminded me that despite our separate struggles, we were still very much together in what mattered most.</p>
            <p>This chapter taught us that love isn't always about being in the same place physically or even emotionally every moment. Sometimes, it's about trusting that the other person is fighting their own battles while still holding space for you in their heart. Our separate journeys didn't pull us apart; they showed us that our bond could withstand the pressure of real-world challenges.</p>
            <p>Through job rejections and scholarship applications, through quiet weeks and brief meetings, we learned to love each other not just in the grand romantic moments, but in the mundane, difficult spaces of adult life. And somehow, that felt even more meaningful than all the dramatic declarations of our first year.</p>
        `
    },
    'today': {
        title: 'Two Years of Growing Together',
        content: `
            <p>Today, as we celebrate two years together, my heart overflows with gratitude for every sunrise we've witnessed as partners. These 731 days have been a beautiful tapestry woven with threads of growth, understanding, and ever-deepening love.</p>
            <p>This second year has brought a different rhythm to our relationship - fewer dramatic storms, but new opportunities for growth. Though we've spent less physical time together than in our passionate first year, this has become our unexpected blessing.</p>
            <p>The distance has taught us that love isn't measured by constant proximity, but by the unwavering connection that survives separation. It has proven that our bond can evolve, adapt, and strengthen through changing circumstances.</p>
            <p>We've learned that love matures not by eliminating challenges, but by facing them with wisdom earned from our history together. The improvements we continue to make aren't repairs to something broken, but enhancements to something already beautiful.</p>
            <p>As I look toward our future, I see not perfection, but promise - the beautiful, ongoing journey of two souls choosing each other day after day, growing together while allowing space for individual blossoming. Here's to the love that has learned, adapted, and flourished - and to all the beautiful evolution still to come.</p>
        `
    }
};

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

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
   
    const savedTheme = localStorage.getItem('anniversaryTheme') || 'pink';
    body.setAttribute('data-theme', savedTheme);

    updateToggleIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'pink' ? 'dark' : 'pink';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('anniversaryTheme', newTheme);
        
        updateToggleIcon(newTheme);
    
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

function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';

        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('clicked');

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

function initLoveLock() {
    const loveLock = document.getElementById('loveLock');
    let isUnlocked = false;
    
    loveLock.addEventListener('click', () => {
        isUnlocked = !isUnlocked;
        loveLock.classList.toggle('unlocked', isUnlocked);
        
        if (isUnlocked) {
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createFloatingHeart(loveLock);
                }, i * 100);
            }

            addSparkleEffect(loveLock);

            createHeartConfetti();
        }
    });
    
    function createFloatingHeart(lockElement) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        heart.style.fontSize = '20px';
        heart.style.left = getCachedRect(lockElement).left + 'px';
        heart.style.top = getCachedRect(lockElement).top + 'px';
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
                sparkle.style.left = (getCachedRect(lockElement).left + Math.random() * 100) + 'px';
                sparkle.style.top = (getCachedRect(lockElement).top + Math.random() * 100) + 'px';
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

function initMusicPlayer() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const musicPlayer = document.getElementById('musicPlayer');
    let isPlaying = true;

    const audio = new Audio();
    audio.src = 'November the 2nd.wav';
    audio.loop = true;

    audio.play().catch(e => {
        console.log('Autoplay prevented:', e);
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

function initPopups() {
    const galleryPopup = document.getElementById('galleryPopup');
    const memoryPopup = document.getElementById('memoryPopup');
    const galleryClose = document.getElementById('galleryClose');
    const memoryClose = document.getElementById('memoryClose');
    const galleryLink = document.getElementById('galleryLink');

    const galleryTriggers = document.querySelectorAll('.gallery-item, #galleryLink');
    galleryTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            galleryPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

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

    galleryClose.addEventListener('click', () => {
        galleryPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    memoryClose.addEventListener('click', () => {
        memoryPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    [galleryPopup, memoryPopup].forEach(popup => {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
}

function initTypewriter() {
    const typewriterElement = document.getElementById('typewriterGreeting');
    if (typewriterElement) {
        typewriterElement.classList.remove('typing');
        void typewriterElement.offsetWidth;
        typewriterElement.classList.add('typing');
    }
}

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
        const sectionTop = getCachedRect(section).top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    });
    
    sectionTitles.forEach(title => {
        const titleTop = getCachedRect(title).top;
        const windowHeight = window.innerHeight;
        
        if (titleTop < windowHeight * 0.85) {
            title.classList.add('visible');
        }
    });
    
    notes.forEach((note, index) => {
        const noteTop = getCachedRect(note).top;
        const windowHeight = window.innerHeight;
        
        if (noteTop < windowHeight * 0.85) {
            setTimeout(() => {
                note.classList.add('visible');
            }, index * 200);
        }
    });
    
    promises.forEach((promise, index) => {
        const promiseTop = getCachedRect(promise).top;
        const windowHeight = window.innerHeight;
        
        if (promiseTop < windowHeight * 0.85) {
            setTimeout(() => {
                promise.classList.add('visible');
            }, index * 200);
        }
    });
    
    galleryItems.forEach((item, index) => {
        const itemTop = getCachedRect(item).top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.85) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        }
    });
    
    memoryItems.forEach((item, index) => {
        const itemTop = getCachedRect(item).top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.85) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        }
    });
    
    if (loveLetter) {
        const letterTop = getCachedRect(loveLetter).top;
        const windowHeight = window.innerHeight;
        
        if (letterTop < windowHeight * 0.85) {
            loveLetter.classList.add('visible');

            initTypewriter();
            
            letterParagraphs.forEach((p, index) => {
                setTimeout(() => {
                    p.classList.add('visible');
                }, index * 500 + 1000);
            });
            
            setTimeout(() => {
                signature.classList.add('visible');
            }, 4000);
        }
    }
}

function updateCountdown() {
    const startDate = new Date('2023-11-02T00:00:00+07:00');
    
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

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
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

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
    
    console.log(`Time elapsed: ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
}

document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();

    setInterval(updateCountdown, 1000);
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCountdown);
} else {
    updateCountdown();
}
setInterval(updateCountdown, 1000);

document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    createAnimatedBackground();
    initThemeToggle();
    initCustomCursor();
    initLoveLock();
    initMusicPlayer();
    initPopups();
    checkVisibility();

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);
});

document.addEventListener('DOMContentLoaded', () => {
    const galleryPopup = document.getElementById('galleryPopup');
    const popupGallery = galleryPopup.querySelector('.popup-gallery');
    const galleryClose = document.getElementById('galleryClose');
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

    (function buildAllMemories() {
        const keys = Object.keys(galleryAssets).filter(k => k !== 'all-memories');
        const combined = [];
        keys.forEach(k => {
            combined.push(...galleryAssets[k]);
        });
        galleryAssets['all-memories'] = combined;
    })();

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

    function populatePopupGallery(key, count = 6) {
        popupGallery.innerHTML = '';

        const assets = (galleryAssets[key] && galleryAssets[key].slice()) || galleryAssets['all-memories'].slice() || [];

        if (assets.length === 0) {
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
                img.dataset.lightboxType = 'image';
                img.dataset.lightboxSrc = asset.src;
                item.appendChild(img);
            }

            popupGallery.appendChild(item);
        });

        attachPopupItemClickHandlers();

        const titleEl = document.getElementById('memoryPopupTitle');
        if (titleEl) titleEl.textContent = `Gallery — ${key}`;
    }

    function openLightbox(type, src, alt) {
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

        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            overlay.classList.add('visible');
            requestAnimationFrame(() => {
                media.classList.add('visible');
                closeBtn.classList.add('visible');
            });
        });

        function close() {
            media.classList.remove('visible');
            closeBtn.classList.remove('visible');
            overlay.classList.remove('visible');

            const cleanup = () => {
                if (overlay.parentNode) overlay.remove();
                if (closeBtn.parentNode) closeBtn.remove();
                document.body.style.overflow = 'auto';
                document.removeEventListener('keydown', onKey);
                media.removeEventListener('transitionend', cleanup);
            };

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
            if (e.target === overlay) close();
        });

        closeBtn.addEventListener('click', close);

        function onKey(e) {
            if (e.key === 'Escape') close();
        }
        document.addEventListener('keydown', onKey);
    }

    function attachPopupItemClickHandlers() {
        popupGallery.querySelectorAll('.popup-gallery-item img, .popup-gallery-item video').forEach(mediaEl => {
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

    function openGalleryForKey(key) {
        populatePopupGallery(key);
        galleryPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(el => {
        const key = el.dataset.gallery || el.id || 'gallery';
        el.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            openGalleryForKey(key);
        }, true);
    });

    const galleryLink = document.getElementById('galleryLink');
    if (galleryLink) {
        galleryLink.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            openGalleryForKey('all-memories');
        }, true);
    }

    if (galleryClose) {
        galleryClose.addEventListener('click', () => {
            galleryPopup.classList.remove('active');
            popupGallery.innerHTML = '';
            document.body.style.overflow = 'auto';
            const titleEl = document.getElementById('memoryPopupTitle');
            if (titleEl) titleEl.textContent = 'Our Memories Gallery';
        });
    }

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

(function(){
    function injectCursorStyles() {
        if (document.getElementById('cursor-popup-fix')) return;
        var css = `
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
        var lastHoveredInteractive = false;
        document.addEventListener('mousemove', function(e){
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

(function(){
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
            * { cursor: auto !important; }
            .cursor, .cursor-follower, .click-effect, .heart-confetti { display: none !important; }

            header { height: auto !important; padding: 60px 20px !important; }
            h1 { font-size: 2.4rem !important; line-height: 1.15 !important; }
            .subtitle { font-size: 1rem !important; margin-bottom: 18px !important; }

            .countdown-container { padding: 16px !important; }
            .countdown-item { padding: 12px 10px !important; min-width: 64px !important; }

            .gallery, .popup-gallery { grid-template-columns: 1fr !important; gap: 12px !important; }
            .gallery-item, .popup-gallery-item { height: 180px !important; border-radius: 12px !important; }

            .music-player { left: 12px !important; bottom: 12px !important; padding: 10px 12px !important; border-radius: 12px !important; }
            .music-control, .theme-toggle, .popup-close, .scroll-to-top { min-width: 44px !important; min-height: 44px !important; }

            .popup-content { padding: 18px !important; width: 94% !important; max-width: 720px !important; }
            .love-letter { padding: 22px !important; border-radius: 14px !important; }

            .bg-element, .heart, .floating { animation-duration: 6s !important; opacity: 0.15 !important; }
            .animated-bg { opacity: 0.7 !important; }

            .nav-links { display: none !important; }

            @media (max-width: 480px) {
                * { transition: none !important; }
            }
        `);
    }
})();

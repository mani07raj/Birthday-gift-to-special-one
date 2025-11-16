// Countdown Animation
window.addEventListener('DOMContentLoaded', () => {
    const countdown = document.getElementById('countdown');
    const number = countdown.querySelector('.number');
    let count = 3;
    
    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            number.textContent = count;
            number.style.animation = 'none';
            setTimeout(() => {
                number.style.animation = 'countdownAnimation 1s ease-out';
            }, 10);
        } else {
            clearInterval(countdownInterval);
            countdown.style.opacity = '0';
            countdown.style.transform = 'scale(0)';
            setTimeout(() => {
                countdown.style.display = 'none';
            }, 500);
        }
    }, 1000);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Music Player
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        isPlaying = false;
    } else {
        backgroundMusic.play().catch(err => {
            console.log('Autoplay prevented. User interaction required.');
        });
        musicToggle.classList.add('playing');
        isPlaying = true;
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// About Her Section Animations
const aboutItems = document.querySelectorAll('.about-item');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

aboutItems.forEach(item => {
    aboutObserver.observe(item);
});

// Love About Her Section Animations
const loveItems = document.querySelectorAll('.love-item');
const loveObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 150);
        }
    });
}, { threshold: 0.1 });

loveItems.forEach(item => {
    loveObserver.observe(item);
});

// Shayari Section Animations
const shayariCards = document.querySelectorAll('.shayari-card');
const shayariObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

shayariCards.forEach(card => {
    shayariObserver.observe(card);
});

// Confetti Effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];
const colors = ['#ff6b9d', '#4facfe', '#43e97b', '#f8b500', '#c44569', '#ffd700'];

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 10 + 5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 + 2;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }
    
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

// Initialize confetti
for (let i = 0; i < 50; i++) {
    confettiParticles.push(new Confetti());
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateConfetti);
}

// Start confetti animation
animateConfetti();

// Burst confetti on scroll to final section
const finalSection = document.getElementById('finalSection');
const finalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Create burst effect
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const burst = new Confetti();
                    burst.speedX = Math.random() * 6 - 3;
                    burst.speedY = Math.random() * 6 - 3;
                    confettiParticles.push(burst);
                }, i * 10);
            }
        }
    });
}, { threshold: 0.5 });

finalObserver.observe(finalSection);

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Gallery Image Lightbox (optional enhancement)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        // You can add a lightbox modal here if desired
        console.log('Image clicked:', img.src);
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    
    if (stars) {
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    if (twinkling) {
        twinkling.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add sparkle effect to emojis
const emojis = document.querySelectorAll('.emoji');
emojis.forEach((emoji, index) => {
    emoji.addEventListener('mouseenter', () => {
        emoji.style.transform = 'scale(1.3) rotate(15deg)';
        emoji.style.transition = 'transform 0.3s ease';
    });
    
    emoji.addEventListener('mouseleave', () => {
        emoji.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Cake Cutting Functionality
window.addEventListener('DOMContentLoaded', () => {
    const decorationButtons = document.querySelectorAll('.decoration-btn');
    const cakeDecorations = document.getElementById('cakeDecorations');
    const cakeCandles = document.getElementById('cakeCandles');
    const cutCakeBtn = document.getElementById('cutCakeBtn');
    const birthdayCake = document.getElementById('birthdayCake');
    const cuttingLine = document.getElementById('cuttingLine');
    
    if (!decorationButtons.length || !cakeDecorations || !cutCakeBtn) {
        return; // Elements not found, skip initialization
    }
    
    let decorations = {
        candles: false,
        sprinkles: false,
        flowers: false,
        stars: false
    };

    // Decoration button handlers
    decorationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const decorationType = btn.getAttribute('data-decoration');
            
            if (decorationType === 'reset') {
                resetDecorations();
            } else {
                toggleDecoration(decorationType);
            }
        });
    });

    function toggleDecoration(type) {
        decorations[type] = !decorations[type];
        
        if (type === 'candles') {
            if (decorations.candles) {
                addCandles();
            } else {
                removeCandles();
            }
        } else if (type === 'sprinkles') {
            if (decorations.sprinkles) {
                addSprinkles();
            } else {
                removeSprinkles();
            }
        } else if (type === 'flowers') {
            if (decorations.flowers) {
                addFlowers();
            } else {
                removeFlowers();
            }
        } else if (type === 'stars') {
            if (decorations.stars) {
                addStars();
            } else {
                removeStars();
            }
        }
    }

    function addCandles() {
        if (!cakeCandles) return;
        cakeCandles.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const candle = document.createElement('div');
            candle.className = 'candle';
            cakeCandles.appendChild(candle);
        }
    }

    function removeCandles() {
        if (!cakeCandles) return;
        cakeCandles.innerHTML = '';
    }

    function addSprinkles() {
        if (!cakeDecorations) return;
        const existingSprinkles = cakeDecorations.querySelectorAll('.sprinkle');
        if (existingSprinkles.length > 0) return;
        
        for (let i = 0; i < 20; i++) {
            const sprinkle = document.createElement('div');
            sprinkle.className = 'sprinkle';
            sprinkle.style.left = Math.random() * 100 + '%';
            sprinkle.style.top = Math.random() * 80 + 20 + '%';
            sprinkle.style.animationDelay = Math.random() * 3 + 's';
            cakeDecorations.appendChild(sprinkle);
        }
    }

    function removeSprinkles() {
        if (!cakeDecorations) return;
        const sprinkles = cakeDecorations.querySelectorAll('.sprinkle');
        sprinkles.forEach(sprinkle => sprinkle.remove());
    }

    function addFlowers() {
        if (!cakeDecorations) return;
        const existingFlowers = cakeDecorations.querySelectorAll('.flower-decoration');
        if (existingFlowers.length > 0) return;
        
        for (let i = 0; i < 6; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-decoration';
            flower.textContent = '🌸';
            flower.style.left = Math.random() * 80 + 10 + '%';
            flower.style.top = Math.random() * 70 + 15 + '%';
            flower.style.animationDelay = Math.random() * 3 + 's';
            cakeDecorations.appendChild(flower);
        }
    }

    function removeFlowers() {
        if (!cakeDecorations) return;
        const flowers = cakeDecorations.querySelectorAll('.flower-decoration');
        flowers.forEach(flower => flower.remove());
    }

    function addStars() {
        if (!cakeDecorations) return;
        const existingStars = cakeDecorations.querySelectorAll('.star-decoration');
        if (existingStars.length > 0) return;
        
        for (let i = 0; i < 8; i++) {
            const star = document.createElement('div');
            star.className = 'star-decoration';
            star.textContent = '⭐';
            star.style.left = Math.random() * 80 + 10 + '%';
            star.style.top = Math.random() * 70 + 15 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            cakeDecorations.appendChild(star);
        }
    }

    function removeStars() {
        if (!cakeDecorations) return;
        const stars = cakeDecorations.querySelectorAll('.star-decoration');
        stars.forEach(star => star.remove());
    }

    function resetDecorations() {
        decorations = {
            candles: false,
            sprinkles: false,
            flowers: false,
            stars: false
        };
        if (cakeCandles) cakeCandles.innerHTML = '';
        if (cakeDecorations) cakeDecorations.innerHTML = '';
    }

    // Cake cutting functionality
    let isCut = false;

    if (cutCakeBtn) {
        cutCakeBtn.addEventListener('click', () => {
            if (!isCut) {
                cutCake();
            } else {
                resetCake();
            }
        });
    }

    function cutCake() {
        isCut = true;
        
        // Show cutting line
        if (cuttingLine) cuttingLine.classList.add('active');
        
        // Animate cake cutting
        setTimeout(() => {
            if (birthdayCake) birthdayCake.classList.add('cut');
            if (cutCakeBtn) cutCakeBtn.textContent = '🎂 Reset Cake';
            
            // Create confetti burst
            createCakeConfetti();
            
            // Remove candles (blow them out)
            setTimeout(() => {
                removeCandles();
            }, 500);
        }, 500);
    }

    function resetCake() {
        isCut = false;
        if (birthdayCake) birthdayCake.classList.remove('cut');
        if (cuttingLine) cuttingLine.classList.remove('active');
        if (cutCakeBtn) cutCakeBtn.textContent = '🎂 Cut the Cake!';
        
        // Restore decorations if they were active
        if (decorations.candles) {
            addCandles();
        }
    }

    function createCakeConfetti() {
        const cakeSection = document.getElementById('cakeSection');
        if (!cakeSection) return;
        
        const colors = ['#ff6b9d', '#4facfe', '#43e97b', '#f8b500', '#ffd700', '#c44569'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'absolute';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = '50%';
                confetti.style.top = '50%';
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '1000';
                
                const angle = (Math.PI * 2 * i) / 50;
                const velocity = 5 + Math.random() * 5;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                cakeSection.appendChild(confetti);
                
                let x = 50;
                let y = 50;
                let opacity = 1;
                
                const animate = () => {
                    x += vx * 0.5;
                    y += vy * 0.5 + 0.5; // gravity
                    opacity -= 0.02;
                    
                    confetti.style.left = x + '%';
                    confetti.style.top = y + '%';
                    confetti.style.opacity = opacity;
                    
                    if (opacity > 0 && y < 100) {
                        requestAnimationFrame(animate);
                    } else {
                        confetti.remove();
                    }
                };
                
                animate();
            }, i * 20);
        }
    }
});


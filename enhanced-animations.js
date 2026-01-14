// ========== PARALLAX EFFECT ==========
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 5;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// ========== SMOOTH SCROLL WITH OFFSET ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== HERO BUTTONS ==========
const heroActionButtons = document.querySelectorAll('.hero-actions button');
heroActionButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.includes('Shop')) {
            window.location.href = 'shop.html';
        } else if (this.textContent.includes('specs')) {
            // Scroll to products section
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                // Fallback to shop page if products section not found
                window.location.href = 'shop.html#products';
            }
        }
    });
});

// ========== RIPPLE EFFECT ==========
document.querySelectorAll('button, .btn-add').forEach(button => {
    button.classList.add('ripple');
});

// ========== IMAGE LAZY LOADING ==========
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ========== NAVBAR SCROLL EFFECT ==========
let lastScroll = 0;
const navbar = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
        navbar.style.backdropFilter = 'none';
        navbar.style.background = 'var(--card)';
    }
    
    lastScroll = currentScroll;
});

// ========== TYPING EFFECT ==========
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ========== NUMBER COUNTER ANIMATION ==========
const counters = document.querySelectorAll('.stat strong');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = counter.textContent;
            const number = parseInt(target.replace(/\D/g, ''));
            const suffix = target.replace(/\d/g, '');
            let current = 0;
            const increment = number / 50;
            
            const updateCounter = () => {
                current += increment;
                if (current < number) {
                    counter.textContent = Math.ceil(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ========== MOUSE TRAIL EFFECT ==========
const trail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY });
    if (trail.length > trailLength) trail.shift();
});

// ========== ADD HOVER SOUND (OPTIONAL) ==========
const hoverSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZRA0PVqzn77BdGAg+ltryxnMpBSh+zPLaizsIGGS57OihUBELTKXh8bllHgU2jdXzzn0vBSF1xe/glEILElyx6OyrWBUIQ5zd8sFuJAUuhM/z1YU4Bx1rsO3mn1ANEFKq5O+zYBoGO5HV8sh0KgUme8rx3I4+CRZht+nrpVIRC0mi4fG8aCAFMIjQ886AMgYeb8Dv45lEDQ9WrOfvsF0YCD6W2vLGcykFKH7M8tqLOwgYZLns6KFQEQtMpeHxuWUeBTaN1fPOfS8FIXXF7+CUQgsSXLHo7KtYFQhDnN3ywW4kBS6Ez/PVhTgHHWuw7eafUA0QUqrk77NgGgY7kdXyyHQqBSZ7yvHcjj4JFmG36eulUhELSaLh8bxoIAUwiNDzzoAyBh5vwO/jmUQND1as5++wXRgIPpba8sZzKQUofszy2os7CBhkuezoA==');
    audio.volume = 0.1;
    audio.play().catch(() => {});
};

// ========== TILT EFFECT ON CARDS ==========
document.querySelectorAll('.product-card, .service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========== PROGRESS BAR ON SCROLL ==========
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #ef4444, #f97316);
    width: 0%;
    z-index: 10000;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPercentage + '%';
});

// ========== TEXT REVEAL ON SCROLL ==========
const textElements = document.querySelectorAll('h1, h2, h3');
textElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
});

const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

textElements.forEach(el => textObserver.observe(el));

// ========== CURSOR CUSTOM ==========
const cursor = document.createElement('div');
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #ef4444;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 10000;
    transition: all 0.15s ease;
    transform: translate(-50%, -50%);
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

console.log('🚀 All animations loaded successfully!');




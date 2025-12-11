// FOSScraft Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
});

/**
 * Initialize Navigation
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's an internal anchor link
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Initialize Scroll Effects
 */
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll(
        '.feature-card, .download-card, .community-card, ' +
        '.build-card, .download-option, .platform, .contrib-card, ' +
        '.sponsor-item, .dev-build'
    ).forEach(el => {
        observer.observe(el);
    });
}

/**
 * Initialize Animations
 */
function initializeAnimations() {
    // Add fade-in animation to page on load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Add hover effects to interactive elements
    addHoverEffects();
}

/**
 * Add Hover Effects to Interactive Elements
 */
function addHoverEffects() {
    const cards = document.querySelectorAll(
        '.feature-card, .download-card, .community-card, ' +
        '.build-card, .download-option, .platform, .contrib-card'
    );

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

/**
 * Add CSS for animations
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .slide-down {
        animation: slideDown 0.5s ease-out;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }

    .pulse {
        animation: pulse 2s ease-in-out infinite;
    }
`;

document.head.appendChild(style);

/**
 * Utility: Smooth Scroll Polyfill for Older Browsers
 */
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScroll = (element) => {
        const targetPosition = element.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) smoothScroll(target);
        });
    });
}

/**
 * Add Loading Animation to Download Buttons
 */
document.querySelectorAll('.btn-download, .btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Add loading state
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        // Simulate load time and restore
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 1000);
    });
});

/**
 * Analytics Helper (ready for integration)
 */
const Analytics = {
    trackClick: (label) => {
        console.log('Tracked click:', label);
        // Ready for Google Analytics or similar integration
        // window.gtag('event', 'click', { 'event_label': label });
    },
    trackScroll: (section) => {
        console.log('Scrolled to:', section);
        // window.gtag('event', 'scroll', { 'event_label': section });
    }
};

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const label = this.textContent.trim();
        Analytics.trackClick(label);
    });
});

// Track section views
document.querySelectorAll('section[id]').forEach(section => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Analytics.trackScroll(entry.target.id);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(section);
});

/**
 * Mobile Menu Toggle (if needed in future)
 */
function initializeMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu if element exists
if (document.querySelector('.nav-toggle')) {
    initializeMobileMenu();
}

/**
 * Dark/Light Mode Toggle (ready for implementation)
 */
const ThemeToggle = {
    init: function() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    },
    
    setTheme: function(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },
    
    toggle: function() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
};

// Uncomment to enable theme toggle
// ThemeToggle.init();

console.log('FOSScraft Website loaded successfully!');

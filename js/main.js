// ======================
// THEME MANAGEMENT
// ======================
class ThemeManager {
    constructor() {
        this.theme = this.getInitialTheme();
        this.applyTheme(this.theme);
    }

    getInitialTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.theme = theme;
        this.updateThemeIcon();
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    updateThemeIcon() {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.textContent = this.theme === 'light' ? '🌙' : '☀️';
        }
    }
}

// ======================
// MOBILE MENU
// ======================
class MobileMenu {
    constructor() {
        this.menuButton = document.getElementById('mobile-menu-btn');
        this.menu = document.getElementById('nav-menu');
        this.menuLinks = document.querySelectorAll('.nav-links a');

        if (this.menuButton && this.menu) {
            this.init();
        }
    }

    init() {
        this.menuButton.addEventListener('click', () => this.toggleMenu());

        // Close menu when clicking on a link
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.menu.contains(e.target) && !this.menuButton.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.menu.classList.toggle('active');
        this.menuButton.classList.toggle('active');
    }

    closeMenu() {
        this.menu.classList.remove('active');
        this.menuButton.classList.remove('active');
    }
}

// ======================
// SMOOTH SCROLLING
// ======================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ======================
// SCROLL ANIMATIONS
// ======================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ======================
// ACTIVE NAV LINK
// ======================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ======================
// BLOG FILTERING
// ======================
class BlogFilter {
    constructor() {
        this.categoryButtons = document.querySelectorAll('.category-filter');
        this.articles = document.querySelectorAll('.blog-card');

        if (this.categoryButtons.length > 0) {
            this.init();
        }
    }

    init() {
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                this.filterArticles(category);
                this.updateActiveButton(button);
            });
        });
    }

    filterArticles(category) {
        this.articles.forEach(article => {
            if (category === 'all' || article.getAttribute('data-category') === category) {
                article.style.display = 'block';
                setTimeout(() => article.classList.add('animate-in'), 10);
            } else {
                article.style.display = 'none';
                article.classList.remove('animate-in');
            }
        });
    }

    updateActiveButton(activeButton) {
        this.categoryButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
}

// ======================
// SHARE BUTTONS
// ======================
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl = '';

            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// ======================
// INITIALIZATION
// ======================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    window.themeManager = new ThemeManager();

    // Initialize mobile menu
    new MobileMenu();

    // Initialize other features
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavLink();
    new BlogFilter();
    initShareButtons();

    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            window.themeManager.toggleTheme();
        });
    }

    // Language selector - set correct selected option based on current page
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        const currentPath = window.location.pathname;
        const options = languageSelector.options;
        
        for (let i = 0; i < options.length; i++) {
            const optionValue = options[i].value;
            // Check if current path ends with the option value or matches the pattern
            if (currentPath.endsWith(optionValue) || 
                currentPath.endsWith(optionValue.replace('index.html', '')) ||
                (optionValue.includes('/en/') && currentPath.includes('/en/')) ||
                (optionValue.includes('/es/') && currentPath.includes('/es/')) ||
                (!optionValue.includes('/en/') && !optionValue.includes('/es/') && !currentPath.includes('/en/') && !currentPath.includes('/es/'))) {
                
                // More precise check
                const isEnglish = currentPath.includes('/en/');
                const isSpanish = currentPath.includes('/es/');
                const isPortuguese = !isEnglish && !isSpanish;
                
                const optionIsEnglish = optionValue.includes('/en/') || (optionValue === 'index.html' && document.documentElement.lang === 'en');
                const optionIsSpanish = optionValue.includes('/es/') || optionValue.includes('../es/');
                const optionIsPortuguese = !optionIsEnglish && !optionIsSpanish && (optionValue.includes('../index.html') || (optionValue === 'index.html' && document.documentElement.lang === 'pt-BR'));
                
                if ((isEnglish && (optionValue === 'index.html' || optionValue.endsWith('/index.html')) && !optionValue.includes('../')) ||
                    (isSpanish && optionIsSpanish) ||
                    (isPortuguese && optionIsPortuguese)) {
                    // Skip, will be handled below
                }
            }
        }
        
        // Simpler approach: detect language from URL path
        const path = window.location.pathname;
        let currentLang = 'pt'; // default
        
        if (path.includes('/en/')) {
            currentLang = 'en';
        } else if (path.includes('/es/')) {
            currentLang = 'es';
        }
        
        // Find and select the correct option
        for (let i = 0; i < options.length; i++) {
            const optVal = options[i].value;
            const isEnOption = optVal.includes('/en/') || (optVal === 'index.html' && currentLang === 'en') || (!optVal.includes('../') && !optVal.includes('/es/') && currentLang === 'en');
            const isEsOption = optVal.includes('/es/') || optVal.includes('../es/');
            const isPtOption = optVal.includes('../index.html') || (optVal === 'index.html' && currentLang === 'pt') || (!optVal.includes('/en/') && !optVal.includes('/es/') && optVal.includes('index.html') && currentLang === 'pt');
            
            if ((currentLang === 'en' && options[i].text === 'English') ||
                (currentLang === 'es' && options[i].text === 'Español') ||
                (currentLang === 'pt' && options[i].text === 'Português')) {
                languageSelector.selectedIndex = i;
                break;
            }
        }
    }
});

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            window.themeManager.applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

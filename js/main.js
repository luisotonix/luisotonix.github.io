// ======================
// TRANSLATIONS
// ======================
const translations = {
    pt: {
        // Navigation
        nav_home: 'Início',
        nav_about: 'Sobre',
        nav_portfolio: 'Portfólio',
        nav_services: 'Serviços',
        nav_blog: 'Blog',
        nav_contact: 'Contato',

        // Hero Section
        hero_greeting: 'Olá, meu nome é',
        hero_title: 'Luís Otoni',
        hero_subtitle: 'System Administrator | Microsoft Specialist',
        hero_description: 'Especialista em Microsoft Azure, Microsoft 365, Power Platform e administração de sistemas corporativos. Transformando infraestrutura em soluções eficientes e seguras.',
        hero_cta: 'Ver Projetos',
        hero_contact: 'Entre em Contato',

        // About
        about_title: 'Sobre Mim',
        about_subtitle: 'Conheça minha trajetória',

        // Skills
        skills_title: 'Habilidades',

        // Experience
        experience_title: 'Experiência',

        // Portfolio
        portfolio_title: 'Portfólio',
        portfolio_subtitle: 'Projetos e implementações',
        portfolio_view: 'Ver Detalhes',

        // Services
        services_title: 'Serviços',
        services_subtitle: 'Como posso ajudar',

        // Blog
        blog_title: 'Blog',
        blog_subtitle: 'Artigos e insights',
        blog_read_more: 'Ler Mais',
        blog_category: 'Categoria',
        blog_tags: 'Tags',
        blog_share: 'Compartilhar',
        blog_all: 'Todos os Artigos',

        // Contact
        contact_title: 'Contato',
        contact_subtitle: 'Vamos conversar',
        contact_name: 'Nome',
        contact_email: 'Email',
        contact_message: 'Mensagem',
        contact_send: 'Enviar Mensagem',

        // Footer
        footer_rights: 'Todos os direitos reservados',
        footer_developed: 'Desenvolvido com',

        // Common
        read_more: 'Saiba Mais',
        view_project: 'Ver Projeto',
        back_home: 'Voltar ao Início',
        back_portfolio: 'Voltar ao Portfólio',
        back_blog: 'Voltar ao Blog',
    },

    en: {
        // Navigation
        nav_home: 'Home',
        nav_about: 'About',
        nav_portfolio: 'Portfolio',
        nav_services: 'Services',
        nav_blog: 'Blog',
        nav_contact: 'Contact',

        // Hero Section
        hero_greeting: 'Hi, my name is',
        hero_title: 'Luís Otoni',
        hero_subtitle: 'System Administrator | Microsoft Specialist',
        hero_description: 'Microsoft Azure, Microsoft 365, Power Platform, and corporate systems administration specialist. Transforming infrastructure into efficient and secure solutions.',
        hero_cta: 'View Projects',
        hero_contact: 'Get in Touch',

        // About
        about_title: 'About Me',
        about_subtitle: 'Know my journey',

        // Skills
        skills_title: 'Skills',

        // Experience
        experience_title: 'Experience',

        // Portfolio
        portfolio_title: 'Portfolio',
        portfolio_subtitle: 'Projects and implementations',
        portfolio_view: 'View Details',

        // Services
        services_title: 'Services',
        services_subtitle: 'How I can help',

        // Blog
        blog_title: 'Blog',
        blog_subtitle: 'Articles and insights',
        blog_read_more: 'Read More',
        blog_category: 'Category',
        blog_tags: 'Tags',
        blog_share: 'Share',
        blog_all: 'All Articles',

        // Contact
        contact_title: 'Contact',
        contact_subtitle: "Let's talk",
        contact_name: 'Name',
        contact_email: 'Email',
        contact_message: 'Message',
        contact_send: 'Send Message',

        // Footer
        footer_rights: 'All rights reserved',
        footer_developed: 'Developed with',

        // Common
        read_more: 'Learn More',
        view_project: 'View Project',
        back_home: 'Back to Home',
        back_portfolio: 'Back to Portfolio',
        back_blog: 'Back to Blog',
    },

    es: {
        // Navigation
        nav_home: 'Inicio',
        nav_about: 'Acerca',
        nav_portfolio: 'Portafolio',
        nav_services: 'Servicios',
        nav_blog: 'Blog',
        nav_contact: 'Contacto',

        // Hero Section
        hero_greeting: 'Hola, mi nombre es',
        hero_title: 'Luís Otoni',
        hero_subtitle: 'Administrador de Sistemas | Especialista en Microsoft',
        hero_description: 'Especialista en Microsoft Azure, Microsoft 365, Power Platform y administración de sistemas corporativos. Transformando infraestructura en soluciones eficientes y seguras.',
        hero_cta: 'Ver Proyectos',
        hero_contact: 'Contactar',

        // About
        about_title: 'Sobre Mí',
        about_subtitle: 'Conoce mi trayectoria',

        // Skills
        skills_title: 'Habilidades',

        // Experience
        experience_title: 'Experiencia',

        // Portfolio
        portfolio_title: 'Portafolio',
        portfolio_subtitle: 'Proyectos e implementaciones',
        portfolio_view: 'Ver Detalles',

        // Services
        services_title: 'Servicios',
        services_subtitle: 'Cómo puedo ayudar',

        // Blog
        blog_title: 'Blog',
        blog_subtitle: 'Artículos e insights',
        blog_read_more: 'Leer Más',
        blog_category: 'Categoría',
        blog_tags: 'Etiquetas',
        blog_share: 'Compartir',
        blog_all: 'Todos los Artículos',

        // Contact
        contact_title: 'Contacto',
        contact_subtitle: 'Hablemos',
        contact_name: 'Nombre',
        contact_email: 'Email',
        contact_message: 'Mensaje',
        contact_send: 'Enviar Mensaje',

        // Footer
        footer_rights: 'Todos los derechos reservados',
        footer_developed: 'Desarrollado con',

        // Common
        read_more: 'Saber Más',
        view_project: 'Ver Proyecto',
        back_home: 'Volver al Inicio',
        back_portfolio: 'Volver al Portafolio',
        back_blog: 'Volver al Blog',
    }
};

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
// LANGUAGE MANAGEMENT
// ======================
class LanguageManager {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        this.applyLanguage(this.currentLang);
    }

    getInitialLanguage() {
        // Check localStorage first
        const savedLang = localStorage.getItem('language');
        if (savedLang) return savedLang;

        // Check browser language
        const browserLang = navigator.language.toLowerCase().split('-')[0];
        if (['pt', 'en', 'es'].includes(browserLang)) {
            return browserLang;
        }

        return 'en'; // Default to English
    }

    applyLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
        this.translatePage();
        this.updateLanguageSelector();
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[this.currentLang][key];
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    updateLanguageSelector() {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = this.currentLang;
        }
    }

    setLanguage(lang) {
        if (['pt', 'en', 'es'].includes(lang)) {
            this.applyLanguage(lang);
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
// FORM VALIDATION
// ======================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.validateForm()) {
                this.submitForm();
            }
        });
    }

    validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            this.showError('Por favor, preencha todos os campos.');
            return false;
        }

        if (!this.isValidEmail(email)) {
            this.showError('Por favor, insira um email válido.');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showError(message) {
        // You can implement a toast/alert system here
        alert(message);
    }

    showSuccess(message) {
        alert(message);
    }

    submitForm() {
        // Here you would normally send the form data to a server
        // For now, we'll just show a success message
        this.showSuccess('Mensagem enviada com sucesso!');
        this.form.reset();
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
    // Initialize theme and language managers
    window.themeManager = new ThemeManager();
    window.languageManager = new LanguageManager();

    // Initialize mobile menu
    new MobileMenu();

    // Initialize other features
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavLink();
    new BlogFilter();
    new ContactForm();
    initShareButtons();

    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            window.themeManager.toggleTheme();
        });
    }

    // Language selector
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            window.languageManager.setLanguage(e.target.value);
        });
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

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Toggle body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Sesuaikan dengan tinggi navbar
                    behavior: 'smooth'
                });

                // Update URL tanpa reload halaman
                history.pushState(null, null, targetId);
            }
        });
    });

    // Animasi scroll untuk sections
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('.product-section, .collection-section, .gender-section, .cta-section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    const setupAnimations = function() {
        const sections = document.querySelectorAll('.product-section, .collection-section, .gender-section, .cta-section');
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });

        // Trigger animation for hero section
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }
    };

    // Navbar background change on scroll
    const handleNavbarScroll = function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    };

    // Inisialisasi animasi dan scroll
    setupAnimations();
    animateOnScroll();
    handleNavbarScroll();

    // Event listeners untuk scroll
    window.addEventListener('scroll', () => {
        animateOnScroll();
        handleNavbarScroll();
    });

    // Form submission handling
    const ctaForm = document.querySelector('.cta-form');
    if (ctaForm) {
        ctaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;

            // Simpan ke localStorage (simulasi)
            localStorage.setItem('userEmail', email);

            // Tampilkan pesan sukses
            alert('Thank you for signing up! You will receive our newsletter soon.');
            this.reset();

            // Scroll ke atas setelah submit
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Product hover effect
    const productCards = document.querySelectorAll('.product-card, .gender-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Application Master Orchestrator - Animation Observers, Counters, & Core Dynamic Micro Interactions
document.addEventListener('DOMContentLoaded', () => {
    
    // Deactivate Loader Screen Element Fluidly Once DOM Registers Content Fully
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('opacity-0');
            setTimeout(() => loader.remove(), 700);
        }, 800);
    }

    // Modern Mouse Tracking Radial Pointer Backglow Actions
    const glow = document.getElementById('cursor-glow');
    if (glow) {
        window.addEventListener('mousemove', (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }

    // Intersection Observer Configuration for Advanced Scroll Reveal Layout Effects
    const revealElements = document.querySelectorAll('.reveal-element');
    const options = { threshold: 0.12, rootMargin: "0px 0px -50px 0px" };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    revealElements.forEach(el => revealObserver.observe(el));

    // Numerical Increment Metrics Counter Animation Matrix Execution Loop
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'), 10);
                let current = 0;
                const increment = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.innerText = target;
                        clearInterval(timer);
                    } else {
                        entry.target.innerText = current;
                    }
                }, 30);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(cnt => counterObserver.observe(cnt));

    // Testimonial Custom Internal Horizontal Carousel Slide Drivers
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev-test');
    const nextBtn = document.getElementById('next-test');
    let currentSlideIndex = 0;

    function renderSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.add('translate-x-full', 'opacity-0');
            slide.classList.remove('translate-x-0', 'opacity-100', '-translate-x-full');
            if (idx === index) {
                slide.classList.remove('translate-x-full', 'opacity-0');
                slide.classList.add('translate-x-0', 'opacity-100');
            } else if (idx < index) {
                slide.classList.add('-translate-x-full');
            }
        });
    }

    if (prevBtn && nextBtn && slides.length > 0) {
        prevBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1;
            renderSlide(currentSlideIndex);
        });
        nextBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1;
            renderSlide(currentSlideIndex);
        });
    }

    // Dynamic Height Collapsing FAQ Layout Expanders Engine
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parent = trigger.parentElement;
            const content = parent.querySelector('.faq-content');
            const icon = trigger.querySelector('.faq-icon');

            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Collapse alternative visible entries smooth styling patterns
                document.querySelectorAll('.faq-content').forEach(c => c.style.maxHeight = '0px');
                document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');
                
                content.style.maxHeight = `${content.scrollHeight}px`;
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });
});
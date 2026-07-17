// Sticky Responsive Hamburger & Progress Matrix Processing
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    const drawerMenu = drawer ? drawer.querySelector('div') : null;
    const scrollProgressBar = document.getElementById('scroll-progress');

    // Sticky Scroll Layout Reductions Handling Parameters
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2', 'shadow-xl', 'bg-[rgba(253,251,247,0.95)]', 'dark:bg-[rgba(15,23,42,0.95)]');
            navbar.classList.remove('h-24');
        } else {
            navbar.classList.remove('py-2', 'shadow-xl', 'bg-[rgba(253,251,247,0.95)]', 'dark:bg-[rgba(15,23,42,0.95)]');
            navbar.classList.add('h-24');
        }

        // Compute Scroll Metrics Value Progress
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            if(scrollProgressBar) scrollProgressBar.style.width = `${progress}%`;
        }
    });

    // Mobile Drawer Drawer Interactivity
    if (burger && drawer && drawerMenu) {
        function toggleDrawer() {
            const isOpen = !drawer.classList.contains('pointer-events-none');
            const spans = burger.querySelectorAll('span');

            if (!isOpen) {
                // Open Drawer Panel Menu
                drawer.classList.remove('pointer-events-none', 'opacity-0');
                drawerMenu.classList.remove('translate-x-full');
                spans[0].classList.add('rotate-45', 'translate-y-2');
                spans[1].classList.add('opacity-0');
                spans[2].classList.add('-rotate-45', '-translate-y-2');
            } else {
                // Close Drawer Panel Menu
                drawer.classList.add('pointer-events-none', 'opacity-0');
                drawerMenu.classList.add('translate-x-full');
                spans[0].classList.remove('rotate-45', 'translate-y-2');
                spans[1].classList.remove('opacity-0');
                spans[2].classList.remove('-rotate-45', '-translate-y-2');
            }
        }

        burger.addEventListener('click', toggleDrawer);
        drawer.addEventListener('click', toggleDrawer);
        drawerMenu.addEventListener('click', (e) => e.stopPropagation());
        
        drawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', toggleDrawer);
        });
    }
});
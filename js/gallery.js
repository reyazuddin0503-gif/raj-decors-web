//  Grid Interactive Portfolio Filtering Logic Execution Matrix
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedFilter = button.getAttribute('data-filter');

            // Toggle active style rules inside buttons array elements
            filterButtons.forEach(btn => {
                btn.classList.remove('text-[#D4AF37]', 'bg-white', 'dark:bg-[#111827]');
                btn.classList.add('hover:border-[#D4AF37]');
            });
            button.classList.add('text-[#D4AF37]', 'bg-white', 'dark:bg-[#111827]');

            // Filter item arrays visually cleanly
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                // Add soft transition scale compression parameters
                item.style.transform = 'scale(0.95)';
                item.style.opacity = '0';
                
                setTimeout(() => {
                    if (selectedFilter === 'all' || itemCategory === selectedFilter) {
                        item.classList.remove('hidden');
                        setTimeout(() => {
                            item.style.transform = 'scale(1)';
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.classList.add('hidden');
                    }
                }, 300);
            });
        });
    });
});
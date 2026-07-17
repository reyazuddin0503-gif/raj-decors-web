// Theme Initialization System Engine Rules
(function() {
    const themeBtn = document.getElementById('theme-btn');
    const themeDropdown = document.getElementById('theme-dropdown');
    const mobileThemeBtn = document.getElementById('mobile-theme-btn');
    
    function setTheme(mode) {
        if (mode === 'dark' || (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            if(mobileThemeBtn) mobileThemeBtn.innerText = '☀';
        } else {
            document.documentElement.classList.remove('dark');
            if(mobileThemeBtn) mobileThemeBtn.innerText = '🌙';
        }
        localStorage.setItem('raj-decors-theme', mode);
    }

    // Load initial layout settings parameter directly
    const storedTheme = localStorage.getItem('raj-decors-theme') || 'system';
    setTheme(storedTheme);

    if (themeBtn && themeDropdown) {
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle('hidden');
            setTimeout(() => {
                themeDropdown.classList.toggle('opacity-0');
                themeDropdown.classList.toggle('translate-y-2');
            }, 20);
        });

        themeDropdown.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const selectedMode = btn.getAttribute('data-theme');
                setTheme(selectedMode);
                themeDropdown.classList.add('hidden', 'opacity-0', 'translate-y-2');
            });
        });
    }

    if (mobileThemeBtn) {
        mobileThemeBtn.addEventListener('click', () => {
            const isCurrentlyDark = document.documentElement.classList.contains('dark');
            setTheme(isCurrentlyDark ? 'light' : 'dark');
        });
    }

    document.addEventListener('click', () => {
        if (themeDropdown) themeDropdown.classList.add('hidden', 'opacity-0', 'translate-y-2');
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (localStorage.getItem('raj-decors-theme') === 'system') {
            setTheme('system');
        }
    });
})();
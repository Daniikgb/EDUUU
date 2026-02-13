/**
 * Lily Field - Moonlight Stardust Edition
 */

const CONFIG = {
    lilyCount: 50,
    starCount: 80,
    fireflyCount: 15
};

document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initFireflies();
    initLilies();
});

function initStars() {
    const container = document.querySelector('.sky-decorations');
    for (let i = 0; i < CONFIG.starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--speed', `${2 + Math.random() * 3}s`);
        container.appendChild(star);
    }
}

function initFireflies() {
    const container = document.querySelector('.sky-decorations');
    for (let i = 0; i < CONFIG.fireflyCount; i++) {
        const ff = document.createElement('div');
        ff.className = 'firefly';
        ff.style.left = `${Math.random() * 100}%`;
        ff.style.top = `${60 + Math.random() * 30}%`;
        ff.style.setProperty('--speed', `${10 + Math.random() * 10}s`);
        ff.style.setProperty('--x', `${(Math.random() - 0.5) * 200}px`);
        ff.style.setProperty('--y', `${(Math.random() - 0.5) * 200}px`);
        container.appendChild(ff);
    }
}

function initLilies() {
    const container = document.querySelector('.field-container');
    const isMobile = window.innerWidth < 600;
    const count = isMobile ? 30 : CONFIG.lilyCount;

    for (let i = 0; i < count; i++) {
        const lily = document.createElement('div');
        lily.className = 'lily';

        // Distribute lilies across the lower screen
        const left = Math.random() * 100;
        const bottom = Math.random() * 40; // bottom 40%

        lily.style.left = `${left}%`;
        lily.style.bottom = `${bottom}%`;
        lily.style.zIndex = Math.floor(bottom);

        // Random scale for depth
        const scale = 0.5 + (bottom / 40) * 0.8;
        lily.style.transform = `scale(${scale})`;

        lily.innerHTML = createLilySVG();
        container.appendChild(lily);

        // Fade in
        setTimeout(() => {
            lily.style.transition = 'opacity 2s ease-out';
            lily.style.opacity = '1';
        }, Math.random() * 2000);
    }
}

function createLilySVG() {
    return `
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <path class="lily-stem" d="M 50,120 Q 45,80 50,40" />
        <g transform="translate(50, 40)">
            <!-- Simple but elegant lily head -->
            <path class="lily-petal" d="M 0,0 Q -15,-25 0,-40 Q 15,-25 0,0" transform="rotate(0)"/>
            <path class="lily-petal" d="M 0,0 Q -15,-25 0,-40 Q 15,-25 0,0" transform="rotate(60)"/>
            <path class="lily-petal" d="M 0,0 Q -15,-25 0,-40 Q 15,-25 0,0" transform="rotate(120)"/>
            <path class="lily-petal" d="M 0,0 Q -15,-25 0,-40 Q 15,-25 0,0" transform="rotate(180)"/>
            <path class="lily-petal" d="M 0,0 Q -15,-25 0,-40 Q 15,-25 0,0" transform="rotate(240)"/>
            <path class="lily-petal" d="M 0,0 Q -15,-25 0,-40 Q 15,-25 0,0" transform="rotate(300)"/>
            <circle cx="0" cy="0" r="4" fill="#f9e79f" />
        </g>
    </svg>`;
}

// Re-init on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        location.reload(); // Simplest way to re-init
    }, 500);
});

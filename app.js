// Translations
const translations = {
    en: {
        nav_home: "Home",
        nav_work: "Work",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title: 'Elevate Your <span>Digital</span> Presence',
        hero_desc: "Crafting immersive experiences through cutting-edge design and modern technology. Experience the zenith of web development.",
        btn_start: "Start Project",
        btn_view: "View Showcase",
        work_title: "Featured <span>Works</span>",
        work_desc: "Exploration of digital boundaries and aesthetic innovation.",
        card1_title: "Innovation",
        card1_desc: "We push the boundaries of what's possible on the web, creating unique interactions that captivate users.",
        card2_title: "Aesthetics",
        card2_desc: "Beauty meets function. Every pixel is carefully placed to create a harmonious and premium visual language.",
        card3_title: "Performance",
        card3_desc: "Blazing fast load times and buttery smooth animations. We don't compromise on speed or quality.",
        footer_text: "&copy; 2024 ZENITH Digital Studio. Built with passion."
    },
    id: {
        nav_home: "Beranda",
        nav_work: "Karya",
        nav_about: "Tentang",
        nav_contact: "Kontak",
        hero_title: 'Tingkatkan Kehadiran <span>Digital</span> Anda',
        hero_desc: "Menciptakan pengalaman imersif melalui desain mutakhir dan teknologi modern. Rasakan puncak pengembangan web.",
        btn_start: "Mulai Proyek",
        btn_view: "Lihat Galeri",
        work_title: "Karya <span>Unggulan</span>",
        work_desc: "Eksplorasi batasan digital dan inovasi estetika.",
        card1_title: "Inovasi",
        card1_desc: "Kami mendobrak batasan apa yang mungkin dilakukan di web, menciptakan interaksi unik yang memikat pengguna.",
        card2_title: "Estetika",
        card2_desc: "Keindahan bertemu fungsi. Setiap piksel ditempatkan dengan hati-hati untuk menciptakan bahasa visual yang harmonis dan premium.",
        card3_title: "Performa",
        card3_desc: "Waktu pemuatan yang sangat cepat dan animasi yang sangat halus. Kami tidak berkompromi pada kecepatan atau kualitas.",
        footer_text: "&copy; 2024 ZENITH Digital Studio. Dibuat dengan penuh semangat."
    }
};

let currentLang = localStorage.getItem('zenith_lang') || 'en';

function updateLanguage() {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    const enBtn = document.getElementById('lang-en');
    const idBtn = document.getElementById('lang-id');
    if (enBtn) enBtn.classList.toggle('active', currentLang === 'en');
    if (idBtn) idBtn.classList.toggle('active', currentLang === 'id');
    
    localStorage.setItem('zenith_lang', currentLang);
}

// Particle Background Effect
function initParticles() {
    const bgGlow = document.querySelector('.bg-glow');
    if (!bgGlow) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.setProperty('--duration', (Math.random() * 10 + 5) + 's');
        particle.style.setProperty('--delay', (Math.random() * 5) + 's');
        bgGlow.appendChild(particle);
    }
}

// Scroll Reveal
function initReveal() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
    initParticles();
    initReveal();

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'id' : 'en';
            updateLanguage();
        });
    }
});

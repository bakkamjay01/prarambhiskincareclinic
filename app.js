
// Remove hash on page load
if (window.location.hash) {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function () {

    // ================= SPLASH =================
    const splash = document.getElementById("splash");
    if (splash) {
        setTimeout(() => {
            splash.classList.add("hide");
        }, 2000);
    }

    // ================= HERO TYPING =================
    const heroText = `Join us and take care of your skin.
The services that will make you feel confident in your daily life.`;

    const heroElement = document.getElementById("hero-text");
    let heroIndex = 0;

    function typeHero() {
        if (!heroElement) return;

        if (heroIndex < heroText.length) {
            heroElement.innerHTML += heroText.charAt(heroIndex);
            heroIndex++;
            setTimeout(typeHero, 40);
        }
    }

    if (heroElement) typeHero();

    // ================= ABOUT TYPING =================
    const aboutText = `Prarambhi Ramraj Aryamane is a professionally trained and certified cosmetologist.
She has successfully completed her professional cosmetology training, followed by 6 months of hands-on internship, and holds 1.5 years of practical experience in advanced skin and aesthetic treatments.
With dedicated clinical practice and real client experience, she focuses on delivering safe, personalized, and result-oriented treatments at Prarambhi™ Divine Aesthetic Beauty Clinic.
Her expertise includes customized skin treatments, hydrafacial therapies, acne solutions, pigmentation care, Korean facial treatment and advanced procedures.`;

    const aboutElement = document.getElementById("about-text");
    let aboutIndex = 0;
    let aboutStarted = false;

    function typeAbout() {
        if (!aboutElement) return;

        if (aboutIndex < aboutText.length) {
            aboutElement.innerHTML += aboutText.charAt(aboutIndex);
            aboutIndex++;
            setTimeout(typeAbout, 20);
        }
    }

    window.addEventListener("scroll", function () {
        const aboutSection = document.getElementById("about");
        if (!aboutSection) return;

        const sectionTop = aboutSection.offsetTop - 300;

        if (window.scrollY > sectionTop && !aboutStarted) {
            aboutStarted = true;
            typeAbout();
        }
    });

    // ================= THEME TOGGLE =================
    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");

            toggleBtn.textContent =
                document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
        });
    }

    // ================= SLIDESHOW =================
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");

        if (slides.length === 0) return; // 🔥 Prevent error

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;

        slides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 3000);
    }

    showSlides();

    // ================= HAMBURGER =================
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navul");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

});




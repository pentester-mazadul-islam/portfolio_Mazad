// Make function global
window.showSection = function (sectionId) {
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.style.display = 'block';
    }

    // navbar active state
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
};

// --- Section Switching Logic ---
function showSection(sectionId) {
    // 1. Get all sections and nav links
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.navbar a');

    // 2. Hide all sections and remove active class from links
    sections.forEach(sec => {
        sec.classList.remove('active');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Show the target section and highlight its link
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        // Scroll to top of the page so the new section starts at the top
        window.scrollTo(0, 0);
    }

    const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Ensure the page starts at "Home" correctly on load
window.onload = () => {
    showSection('home');
};

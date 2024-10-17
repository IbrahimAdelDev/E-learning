// search icon
const headerSearch = document.querySelector('.header-search');
const miniSearchIcon = document.querySelector('.mini-search-icon');
const sideBarLinks = document.querySelectorAll('.sidebar-links');

// sidebar
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu-btn');
const bageBody = document.querySelector('.bage-body');
const footer = document.querySelector('.footer');

// search icon logic
miniSearchIcon.addEventListener('click', () => {
    headerSearch.classList.toggle('active');
});

// sidebar logic
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    bageBody.classList.toggle('active');
    footer.classList.toggle('active');
    
});

// theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleIcon = document.querySelector('.theme-icon');

// theme toggle logic
themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('theme');
    console.log(currentTheme);

    if (currentTheme === 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
       
        localStorage.setItem('theme', 'dark');
    }
    root.classList.toggle('dark');
    themeToggleIcon.classList.toggle('fa-sun');
    themeToggleIcon.classList.toggle('fa-moon');
});

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    const root = document.documentElement;
    const themeToggleIcon = document.querySelector('.theme-icon');
    if (savedTheme === 'dark') {
        root.classList.toggle('dark');
        themeToggleIcon.classList.toggle('fa-sun');
        themeToggleIcon.classList.toggle('fa-moon');
    }
});

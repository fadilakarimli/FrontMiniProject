"use -strict"


document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const submenu = dropdown.querySelector(".submenu");

    dropdown.addEventListener("mouseenter", function () {
        submenu.style.display = "block";
        submenu.style.visibility = "visible";
        submenu.style.opacity = "1";
        submenu.style.transform = "perspective(600px) rotateX(0deg)"; 
    });

    dropdown.addEventListener("mouseleave", function () {
        submenu.style.transform = "perspective(600px) rotateX(-90deg)"; 
        submenu.style.opacity = "0";

        setTimeout(() => {
            submenu.style.visibility = "hidden";
            submenu.style.display = "none";
        }, 500); 
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown-shop");
    const submenu = dropdown.querySelector(".submenu-shop");

    dropdown.addEventListener("mouseenter", function () {
        submenu.style.display = "block";
        submenu.style.visibility = "visible";
        submenu.style.opacity = "1";
        submenu.style.transform = "perspective(600px) rotateX(0deg)"; 
    });

    dropdown.addEventListener("mouseleave", function () {
        submenu.style.transform = "perspective(600px) rotateX(-90deg)";
        submenu.style.opacity = "0";

        setTimeout(() => {
            submenu.style.visibility = "hidden";
            submenu.style.display = "none";
        }, 500);
    });
});


const searchIcon = document.querySelector('.search .fa-magnifying-glass');
const searchOverlay = document.createElement('div');
searchOverlay.classList.add('search-overlay');

searchOverlay.innerHTML = `
    <div class="search-box">
        <input type="text" placeholder="Type your search...">
    </div>
`;

const closeIcon = document.createElement('div');
closeIcon.classList.add('close-icon');
closeIcon.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;

searchOverlay.appendChild(closeIcon);

document.body.appendChild(searchOverlay);

searchIcon.addEventListener('click', () => {
    searchOverlay.classList.add('active'); 
});

closeIcon.addEventListener('click', () => {
    searchOverlay.classList.remove('active'); 
});



const menuBar = document.querySelector('.menu-bar i'); 
const body = document.body;

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');

const closeBtn = document.createElement('div');
closeBtn.classList.add('close-menu');
closeBtn.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;

const socialIcons = document.createElement('div');
socialIcons.classList.add('social-icons');

const socialMedia = [
    { href: '#', className: 'fa fa-facebook' },
    { href: '#', className: 'fa fa-twitter' },
    { href: '#', className: 'fa fa-instagram' },
    { href: '#', className: 'fa fa-linkedin' },
];

socialMedia.forEach(media => {
    const link = document.createElement('a');
    link.href = media.href;
    link.innerHTML = `<i class="${media.className}"></i>`;
    socialIcons.appendChild(link);
});

sidebar.appendChild(closeBtn);
sidebar.appendChild(socialIcons);

body.appendChild(sidebar);

menuBar.addEventListener('click', () => {
    sidebar.classList.add('active'); 
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active'); 
});

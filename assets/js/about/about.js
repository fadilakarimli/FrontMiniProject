"use strict"


// features

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown-features");
    const submenu = dropdown.querySelector(".submenu-features-list");
  
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
        }, 10000); 
    });
  });



  // shop
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown-shop");
    const submenuContainer = dropdown.querySelector(".submenu-container");
  
    dropdown.addEventListener("mouseenter", function () {
        submenuContainer.style.visibility = "visible";
        submenuContainer.style.opacity = "1";
        submenuContainer.style.transform = "perspective(600px) rotateX(0deg)";
    });
  
    dropdown.addEventListener("mouseleave", function () {
        submenuContainer.style.transform = "perspective(600px) rotateX(-90deg)";
        submenuContainer.style.opacity = "0";
  
        setTimeout(() => {
            submenuContainer.style.visibility = "hidden";
        }, 10000);
    });
  });
  
// blog

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".submenu-blog");
    const submenu = dropdown.querySelector(".submenu-blog-list");
  
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
        }, 10000); 
    });
  });


  // about

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".submenu-about");
    const submenu = dropdown.querySelector(".submenu-about-list");
  
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
        }, 10000); 
    });
  });
  
  


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
        }, 10000); 
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
        }, 10000);
    });
});


const searchIcon = document.querySelector('.search .fa-magnifying-glass');
const searchOverlay = document.createElement('div');
searchOverlay.classList.add('search-overlay');

searchOverlay.innerHTML = `
    <div class="search-box">
        <input type="text" class="typesearch" placeholder="Type keyword(s) here...">
        <span class="search-tag">Search</span>
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

const logoBar = document.createElement('div');
logoBar.classList.add('logo-bar'); 

const closeBtn = document.createElement('div');
closeBtn.classList.add('close-menu');
closeBtn.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;

const contactInfo = document.createElement('div');
contactInfo.classList.add('contact-info');
contactInfo.innerHTML = `
    <p><strong>Address:</strong> Your address goes here.</p>
    <p><strong>Call Us:</strong> 0123456789, 0123456789</p>
    <p><strong>Email:</strong> demo@example.com</p>
`;

const socialIcons = document.createElement('div');
socialIcons.classList.add('social-icons');

const socialMedia = [
    { href: '#', className: 'fa fa-facebook face' },
    { href: '#', className: 'fa fa-twitter twit' },
    { href: '#', className: 'fa fa-instagram insta' },
    { href: '#', className: 'fa fa-linkedin lk' },
];

socialMedia.forEach(media => {
    const link = document.createElement('a');
    link.href = media.href;
    link.innerHTML = `<i class="${media.className}"></i>`;
    socialIcons.appendChild(link);
});

sidebar.appendChild(closeBtn);
sidebar.appendChild(logoBar); 
sidebar.appendChild(contactInfo);
sidebar.appendChild(socialIcons);

body.appendChild(sidebar);

menuBar.addEventListener('click', () => {
    sidebar.classList.add('active'); 
    logoBar.style.display = 'block'; 
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active'); 
    logoBar.style.display = 'none'; 
});

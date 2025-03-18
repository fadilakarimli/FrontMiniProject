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


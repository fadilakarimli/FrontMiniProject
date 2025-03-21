"use strict"




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

const logoBar = document.createElement('div');
logoBar.classList.add('logo-bar'); 

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
sidebar.appendChild(logoBar); 
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


// tabmenu

const productData = {
  "NEW ARRIVAL": [
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-blue.png", label: "New", price: 29.99 },
    { image: "./assets/img/home/dress-blue.png", hoverImage: "./assets/img/home/women-dress.png", label: "Hot", price: 29.12 },
    { image: "./assets/img/home/dress-white-glass.png", hoverImage: "./assets/img/home/women-white.png", label: "New", price: 29.21 },
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "New", price: 29.13 },
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "Hot", price: 29.56 },
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "New" , price: 29.34},
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "New" , price: 345.99},
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "Hot" , price: 34.345}
  ],
  "TRENDING": [
    { image: "./assets/img/home/dress-white-glass.png", hoverImage: "./assets/img/home/women-white.png", label: "New", price: 45.99 },
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-blue.png", label: "Hot", price: 39.12 },
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "New", price: 55.21 },
    { image: "./assets/img/home/dress-blue.png", hoverImage: "./assets/img/home/women-dress.png", label: "Hot", price: 25.99 },
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-blue.png", label: "New", price: 49.00 }
  ],
  "BEST SELLERS": [
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "Hot",price: 49.00 },
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-blue.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-blue.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-blue.png", label: "New",price: 49.00 },


  ],
  "FEATURED": [
    { image: "./assets/img/home/dress-blue.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "New" ,price: 49.00},
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/women-white.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-blue.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/dress-blue.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "Hot",price: 49.00 },
    { image: "./assets/img/home/dress-white-glass.png", hoverImage: "./assets/img/home/women-dress.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-blue.png", label: "New",price: 49.00 }
  ],
  "ON SALE": [
    { image: "./assets/img/home/dress-blue.png", hoverImage: "./assets/img/home/women-dress.png", label: "Hot",price: 49.00 },
    { image: "./assets/img/home/dress-white-glass.png", hoverImage: "./assets/img/home/dress-blue.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/dress-blue.png", hoverImage: "./assets/img/home/women-dress.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/women-white.png", hoverImage: "./assets/img/home/dress-blue.png", label: "Hot",price: 49.00 },
    { image: "./assets/img/home/women-dress.png", hoverImage: "./assets/img/home/dress-white-glass.png", label: "New",price: 49.00 },
    { image: "./assets/img/home/dress-blue.png", hoverImage: "./assets/img/home/women-dress.png", label: "New",price: 49.00 }
  ]
};

const buttons = document.querySelectorAll('.product-categories button');
const row = document.querySelector('.row');

function showProducts(category) {
  row.innerHTML = ""; 
  
  const products = productData[category];
  
  products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6 col-12 mt-3';
    
    const price = product.price ? product.price.toFixed(2) : "0.00";
    
    col.innerHTML = `
      <div class="product-item">
        <span class="product-label ${product.label.toLowerCase()}">${product.label}</span>
        <img class="product-image" src="${product.image}" alt="${category}">
        <img class="hover-image" src="${product.hoverImage}" alt="${category} Hover">
        <div class="icon-container">
          <span class="heart-icon">
            <i class="fa-regular fa-heart"></i>
          </span>
          <span class="share-icon">
            <i class="fa-solid fa-expand"></i>
          </span>
          <span class="compare-icon">
            <i class="fa-solid fa-code-compare"></i>
          </span>
        </div>
        <h3>Sample Product</h3>
        <p class="price">$${price}</p> <!-- Random silindi, məhsulun öz qiyməti yazıldı -->
        <button class="add-to-cart btn-cart">Add To Cart</button>
      </div>
    `;
    row.appendChild(col);
  });
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.textContent.trim();
    showProducts(category);
  });
});

showProducts("NEW ARRIVAL");



//   document.addEventListener("DOMContentLoaded", function () {
//     const products = document.querySelectorAll(".product-item1");
//     const dots = document.querySelectorAll(".dot");
//     let currentIndex = 0;
//     const itemsPerPage = 4;
//     let autoPlayInterval;
//     const maxIndex = products.length - itemsPerPage;

//     function showItems() {
//         products.forEach((item, i) => {
//             if (i >= currentIndex && i < currentIndex + itemsPerPage) {
//                 item.style.visibility = "visible";
//                 item.style.opacity = "1";
//                 item.style.transform = "translateY(0)";
//             } else {
//                 item.style.visibility = "hidden";
//                 item.style.opacity = "0";
//                 item.style.transform = "translateY(10px)";
//             }
//         });

//         dots.forEach((dot, i) => {
//             dot.classList.toggle("active", currentIndex === i);
//         });
//     }

//     function nextSlide() {
//         if (currentIndex < maxIndex) {
//             currentIndex++;
//         } else {
//             currentIndex = 0;
//         }
//         showItems();
//     }

//     function prevSlide() {
//         if (currentIndex > 0) {
//             currentIndex--;
//         } else {
//             currentIndex = maxIndex;
//         }
//         showItems();
//     }

//     function startAutoPlay() {
//         autoPlayInterval = setInterval(nextSlide, 3000);
//     }

//     function stopAutoPlay() {
//         clearInterval(autoPlayInterval);
//     }

//     dots.forEach((dot, i) => {
//         dot.addEventListener("click", () => {
//             currentIndex = i;
//             showItems();
//             stopAutoPlay();
//             startAutoPlay();
//         });
//     });

//     showItems();
//     startAutoPlay();
// });


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

// search
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


// menu
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


//slider only dot

// const slider = document.querySelector(".slider-sl");
// const dots = document.querySelectorAll(".dot");
// let index = 0;

// const slideWidth = slider.children[0].offsetWidth + 15;

// function moveSlider(newIndex) {
//   index = newIndex;
//   slider.style.transform = `translateX(-${index * slideWidth}px)`;
//   updateDots();
// }

// function updateDots() {
//   dots.forEach((dot, i) => {
//     dot.classList.toggle("active", i === index);
//   });
// }

// dots.forEach((dot, i) => {
//   dot.addEventListener("click", () => moveSlider(i));
// });


//slider dot and mouse 

const slider = document.querySelector(".slider-sl");
const dots = document.querySelectorAll(".dot");
let index = 0;

const slideWidth = slider.children[0].offsetWidth + 15;
let isDragging = false;
let startX = 0;
let currentX = 0;

function moveSlider(newIndex) {
  index = newIndex;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => moveSlider(i));
});

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return; 

  currentX = e.clientX; 
  const diff = startX - currentX;

  if (Math.abs(diff) > slideWidth / 2) {
    if (diff > 0) {
      moveSlider(index + 1); 
    } else {
      moveSlider(index - 1); 
    }
    isDragging = false;
  }
});

slider.addEventListener("mouseup", () => {
  isDragging = false; 
  slider.style.cursor = "grab"; 
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
  slider.style.cursor = "grab";
});

